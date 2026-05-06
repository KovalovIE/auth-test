import { useEffect } from 'react';
import { storage, STORAGE_KEYS } from '../../../storage';
import { Tokens } from '../../../shared/types';
import { CheckTokensParams } from '../types';

export const useCheckTokens = ({ setTokens, onFinishLaunch }: CheckTokensParams) => {
    useEffect(() => {
        const getTokens = async () => {
            const storageTokens = await storage.getItem<Tokens>(STORAGE_KEYS.authTokens);
            if (storageTokens) {
                setTokens(storageTokens);
            } else {
                onFinishLaunch();
            }
        };

        getTokens();
    }, [onFinishLaunch, setTokens]);
};
