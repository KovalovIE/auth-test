import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { AppContextType, AppContextProps } from './types';
import { User } from '../shared/types/types';

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: AppContextProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAppLoaded, setIsAppLoaded] = useState<boolean>(false);
    const [isNetworkConnected, setIsNetworkConnected] = useState<boolean>(true);

    const changeAppState = useCallback(() => {
        setIsAppLoaded(true);
    }, []);

    const handleUserData = useCallback((userData: User | null) => {
        setUser(userData);
    }, []);

    const changeNetworkState = useCallback((isConnected: boolean) => {
        setIsNetworkConnected(isConnected);
    }, []);

    const value: AppContextType = useMemo(
        () => ({
            isAppLoaded,
            user,
            isNetworkConnected,
            changeAppState,
            handleUserData,
            changeNetworkState,
        }),
        [isAppLoaded, user, isNetworkConnected, changeAppState, handleUserData, changeNetworkState],
    );

    return <AppContext value={value}>{children}</AppContext>;
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext error');
    }
    return context;
};
