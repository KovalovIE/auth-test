import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useAppContext } from '../../../appContext/AppContext';
import { storage, STORAGE_KEYS } from '../../../storage';
import { User } from '../../../shared/types/types';
import { LoginParams } from '../types';
import { API_ENDPOINTS } from '../../../shared/api/endpoints';
import { requester } from '../../../requester';

const getUserData = async (params: LoginParams): Promise<User> => {
    return requester.post<User>(API_ENDPOINTS.auth.login, {
        username: params.username,
        password: params.password,
    });
};

export const useLoginMutation = () => {
    const { handleUserData } = useAppContext();

    const onSuccess = (data: User) => {
        storage.setItem(STORAGE_KEYS.authTokens, {
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
        });
        handleUserData(data);
    };

    const onError = (error: AxiosError) => {
        console.error('Login error:', error.message, error.name);
    };

    const loginMutation = useMutation<User, AxiosError, LoginParams>({
        mutationFn: getUserData,
        onSuccess,
        onError,
    });

    return { loginMutation };
};
