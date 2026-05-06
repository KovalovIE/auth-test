import { useEffect } from 'react';
import { requester } from '../../requester/AxiosRequester';
import { useLogout } from './useLogout';

export const useRequesterUnauthorizedHandler = () => {
    const logout = useLogout();

    useEffect(() => {
        requester.setUnauthorizedHandler(logout);
    }, [logout]);
};
