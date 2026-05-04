import axios, { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { Tokens } from '../../../shared/types';
import { RefreshTokenMutationParams } from '../types';
import { storage } from '../../../storage';
import { API_ENDPOINTS } from '../../../shared/api/endpoints';

export const useRefreshTokenMutation = ({ tokens, setTokens, onFinishLaunch }: RefreshTokenMutationParams) => {
    const fetchRefreshToken = async (): Promise<Tokens> => {
        if (!tokens?.refreshToken) {
            throw new Error('Refresh token is missing');
        }

        const response = await axios.post<Tokens>(
            API_ENDPOINTS.auth.refresh,
            {
                refreshToken: tokens.refreshToken,
                expiresInMins: 30,
            },
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );

        return response.data;
    };

    const onSuccess = async (newTokens: Tokens) => {
        await storage.setItem('authTokens', newTokens);
        setTokens(newTokens);
    };

    const onError = async (error: AxiosError) => {
        console.error('Error refreshing token:', error);
        await storage.removeItem('authTokens');
        onFinishLaunch();
    };

    const result = useMutation<Tokens, AxiosError, void>({
        mutationFn: fetchRefreshToken,
        onSuccess,
        onError,
    });

    return { isIdleRefreshToken: result.isIdle, refreshTokenMutation: result.mutate };
};
