import axios, { type AxiosError, type AxiosInstance, type InternalAxiosRequestConfig } from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from '../shared/api/endpoints';
import { storage, STORAGE_KEYS } from '../storage';
import { Tokens } from '../shared/types';
import type { Requester, RequesterConfig, UnauthorizedHandler } from './types';

const EXPIRES_IN_MINS = 30;

class AxiosRequester implements Requester {
    private instance: AxiosInstance;
    private unauthorizedHandler?: UnauthorizedHandler;
    private pendingRefreshTokenRequest: Promise<Tokens> | null = null;

    constructor() {
        this.instance = axios.create({
            baseURL: API_BASE_URL,
            timeout: 60000,
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json',
            },
        });

        this.instance.interceptors.request.use(this.attachAuthHeader);
        this.instance.interceptors.response.use(
            (response) => response,
            async (error: AxiosError) => {
                const originalRequest = error.config as RequesterConfig | undefined;

                if (error.response?.status !== 401) {
                    return Promise.reject(error);
                }

                if (!originalRequest || originalRequest.skipAuthRefresh) {
                    return Promise.reject(error);
                }

                if (originalRequest._retry) {
                    await this.unauthorizedHandler?.();
                    return Promise.reject(error);
                }

                originalRequest._retry = true;

                try {
                    if (!this.pendingRefreshTokenRequest) {
                        this.pendingRefreshTokenRequest = this.refreshTokens();
                    }

                    const newTokens = await this.pendingRefreshTokenRequest;
                    this.pendingRefreshTokenRequest = null;

                    originalRequest.headers = {
                        ...originalRequest.headers,
                        Authorization: `Bearer ${newTokens.accessToken}`,
                    };

                    return this.instance(originalRequest);
                } catch (refreshError) {
                    this.pendingRefreshTokenRequest = null;
                    await this.unauthorizedHandler?.();

                    return Promise.reject(refreshError);
                }
            },
        );
    }

    private attachAuthHeader = async (config: InternalAxiosRequestConfig) => {
        const tokens = await storage.getItem<Tokens>(STORAGE_KEYS.authTokens);

        if (tokens?.accessToken) {
            config.headers.Authorization = `Bearer ${tokens.accessToken}`;
        }

        return config;
    };

    private refreshTokens = async (): Promise<Tokens> => {
        const tokens = await storage.getItem<Tokens>(STORAGE_KEYS.authTokens);

        if (!tokens?.refreshToken) {
            throw new Error('Refresh token is missing');
        }

        const response = await this.instance.post<Tokens>(
            API_ENDPOINTS.auth.refresh,
            {
                refreshToken: tokens.refreshToken,
                expiresInMins: EXPIRES_IN_MINS,
            },
            {
                skipAuthRefresh: true,
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            } as RequesterConfig,
        );

        if (!response.data.accessToken || !response.data.refreshToken) {
            throw new Error('Invalid refresh token response');
        }

        await storage.setItem(STORAGE_KEYS.authTokens, response.data);

        return response.data;
    };

    setUnauthorizedHandler = (handler: UnauthorizedHandler) => {
        this.unauthorizedHandler = handler;
    };

    get = async <T>(url: string, config?: RequesterConfig): Promise<T> => {
        const response = await this.instance.get<T>(url, config);
        return response.data;
    };

    post = async <T>(url: string, body?: unknown, config?: RequesterConfig): Promise<T> => {
        const response = await this.instance.post<T>(url, body, config);
        return response.data;
    };
}

export const requester = new AxiosRequester();
