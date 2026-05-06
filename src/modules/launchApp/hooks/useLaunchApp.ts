import { useCallback, useEffect, useState } from 'react';
import { useAppContext } from '../../../appContext/AppContext';
import { storage, STORAGE_KEYS } from '../../../storage';
import { Tokens } from '../../../shared/types';
import { mappedUser } from '../../../helpers/mappedUser';
import { useAuthMeQuery } from './useAuthMeQuery';
import { useCheckTokens } from './useCheckTokens';

export const useLaunchApp = () => {
    const { changeAppState, handleUserData, isNetworkConnected } = useAppContext();
    const [tokens, setTokens] = useState<Tokens | null>(null);

    const onFinishLaunch = useCallback(() => {
        changeAppState();
    }, [changeAppState]);

    useCheckTokens({ setTokens, onFinishLaunch });

    const dataMe = useAuthMeQuery({ isNetworkConnected, accessToken: tokens?.accessToken });

    useEffect(() => {
        if (dataMe.isSuccess && dataMe.data && tokens) {
            const handleSuccess = async () => {
                const actualTokens = await storage.getItem<Tokens>(STORAGE_KEYS.authTokens);
                const user = mappedUser(dataMe.data, actualTokens || tokens);

                handleUserData(user);
                onFinishLaunch();
            };

            handleSuccess();
        } else if (dataMe.isError) {
            if (!isNetworkConnected) {
                return;
            }

            onFinishLaunch();
        }
    }, [
        dataMe.isSuccess,
        dataMe.data,
        dataMe.isError,
        dataMe.error,
        onFinishLaunch,
        handleUserData,
        tokens,
        isNetworkConnected,
    ]);

    return { isNetworkConnected };
};
