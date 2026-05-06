import { useQueryClient } from '@tanstack/react-query';
import { useAppContext } from '../../appContext/AppContext';
import { useCallback } from 'react';
import { storage, STORAGE_KEYS } from '../../storage';

export const useLogout = () => {
    const queryClient = useQueryClient();
    const { handleUserData } = useAppContext();

    const logout = useCallback(async () => {
        await storage.removeItem(STORAGE_KEYS.authTokens);
        handleUserData(null);
        queryClient.clear();
    }, [handleUserData, queryClient]);

    return logout;
};
