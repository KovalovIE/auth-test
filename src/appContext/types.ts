import { User } from '../shared/types/types';

export type AppContextType = {
    isAppLoaded: boolean;
    user: User | null;
    isNetworkConnected: boolean;
    changeAppState: () => void;
    handleUserData: (userData: User | null) => void;
    changeNetworkState: (isConnected: boolean) => void;
};

export type AppContextProps = {
    children: React.ReactNode;
};
