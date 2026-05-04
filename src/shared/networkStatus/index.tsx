import { memo, useEffect } from 'react';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { onlineManager } from '@tanstack/react-query';
import { useAppContext } from '../../appContext/AppContext';

export const NetworkStatus = memo(() => {
    const { changeNetworkState } = useAppContext();

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
            const isConnected = Boolean(state.isConnected) && state.isInternetReachable !== false;

            changeNetworkState(isConnected);

            onlineManager.setOnline(isConnected);
        });

        return unsubscribe;
    }, [changeNetworkState]);

    return null;
});
