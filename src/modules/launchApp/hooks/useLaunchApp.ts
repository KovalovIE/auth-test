import { useCallback, useEffect, useState } from 'react';
import { useAppContext } from '../../../appContext/AppContext';
import { storage } from '../../../storage';
import { Tokens } from '../../../shared/types';
import { mappedUser } from '../../../helpers/mappedUser';
import { useAuthMeQuery } from './useAuthMeQuery';
import { useCheckTokens } from './useCheckTokens';
import { useRefreshTokenMutation } from './useRefreshTokenMutation';

export const useLaunchApp = () => {
    const { changeAppState, handleUserData, isNetworkConnected } = useAppContext();
    const [tokens, setTokens] = useState<Tokens | null>(null);

    const onFinishLaunch = useCallback(() => {
        changeAppState();
    }, [changeAppState]);

    useCheckTokens({ setTokens, onFinishLaunch });

    const dataMe = useAuthMeQuery({ isNetworkConnected, accessToken: tokens?.accessToken });

    const { isIdleRefreshToken, refreshTokenMutation } = useRefreshTokenMutation({
        tokens,
        setTokens,
        onFinishLaunch,
    });

    useEffect(() => {
        if (dataMe.isSuccess && dataMe.data && tokens) {
            const user = mappedUser(dataMe.data, tokens);
            handleUserData(user);
            onFinishLaunch();
        } else if (dataMe.isError) {
            if (!isNetworkConnected) {
                return;
            }
            const isUnauthorizedError = dataMe.error.isAxiosError && dataMe.error?.status === 401;

            if (isUnauthorizedError && tokens?.refreshToken) {
                if (isIdleRefreshToken) {
                    refreshTokenMutation();
                }
                return;
            }

            if (isUnauthorizedError) {
                storage.removeItem('authTokens');
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
        isIdleRefreshToken,
        refreshTokenMutation,
        isNetworkConnected,
    ]);

    return { isNetworkConnected };
};
