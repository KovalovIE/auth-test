import axios, { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { UserMe } from '../../../shared/types';
import { API_ENDPOINTS } from '../../../shared/api/endpoints';
import { UseAuthMeQueryParams } from '../types';

export const useAuthMeQuery = ({ isNetworkConnected, accessToken }: UseAuthMeQueryParams) => {
    const fetchUser = async (): Promise<UserMe> => {
        const response = await axios.get<UserMe>(API_ENDPOINTS.auth.me, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response.data;
    };

    const result = useQuery<UserMe, AxiosError>({
        queryKey: ['auth', 'me', accessToken],
        queryFn: fetchUser,
        enabled: !!accessToken && isNetworkConnected,
        retry: false,
    });

    return result;
};
