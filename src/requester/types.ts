import type { AxiosRequestConfig } from 'axios';

export type RequesterConfig = AxiosRequestConfig & {
    skipAuthRefresh?: boolean;
    _retry?: boolean;
};

export type UnauthorizedHandler = () => void | Promise<void>;

export interface Requester {
    get: <T>(url: string, config?: RequesterConfig) => Promise<T>;
    post: <T>(url: string, body?: unknown, config?: RequesterConfig) => Promise<T>;
    setUnauthorizedHandler: (handler: UnauthorizedHandler) => void;
}
