import type { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { UserMe } from '../../../shared/types';
import { API_ENDPOINTS } from '../../../shared/api/endpoints';
import { UseAuthMeQueryParams } from '../types';
import { requester } from '../../../requester';

export const useAuthMeQuery = ({ isNetworkConnected, accessToken }: UseAuthMeQueryParams) => {
    const fetchUser = async (): Promise<UserMe> => {
        return requester.get<UserMe>(API_ENDPOINTS.auth.me);
    };

    const result = useQuery<UserMe, AxiosError>({
        queryKey: ['auth', 'me', accessToken],
        queryFn: fetchUser,
        enabled: !!accessToken && isNetworkConnected,
        retry: false,
    });

    return result;
};
