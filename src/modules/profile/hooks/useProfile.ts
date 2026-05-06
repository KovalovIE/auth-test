import { useCallback } from 'react';
import { useAppContext } from '../../../appContext/AppContext';
import { useLogout } from '../../../shared/hooks/useLogout';

export const useProfile = () => {
    const { user } = useAppContext();
    const logout = useLogout();

    const title = user?.firstName && user?.lastName ? `Hi, ${user.firstName} ${user.lastName}!` : 'Hi, user!';

    const onPressLogout = useCallback(async () => {
        await logout();
    }, [logout]);

    return { onPressLogout, title };
};
