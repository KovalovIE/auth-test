import { Dispatch, SetStateAction } from 'react';
import { Tokens } from '../../shared/types';

export type CheckTokensParams = {
    setTokens: Dispatch<SetStateAction<Tokens | null>>;
    onFinishLaunch: () => void;
};

export type RefreshTokenMutationParams = {
    tokens: Tokens | null;
    setTokens: Dispatch<SetStateAction<Tokens | null>>;
    onFinishLaunch: () => void;
};

export type UseAuthMeQueryParams = {
    isNetworkConnected: boolean;
    accessToken?: string;
};
