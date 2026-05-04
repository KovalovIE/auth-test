import { useCallback } from 'react';
import { useAppContext } from '../../../appContext/AppContext';
import { storage } from '../../../storage';

export const useProfile = () => {
    const { handleUserData, user } = useAppContext();

    const title = user?.firstName && user?.lastName ? `Hi, ${user.firstName} ${user.lastName}!` : 'Hi, user!';

    const onPressLogout = useCallback(() => {
        handleUserData(null);
        storage.removeItem('authTokens');
    }, [handleUserData]);

    return { onPressLogout, title };
};
