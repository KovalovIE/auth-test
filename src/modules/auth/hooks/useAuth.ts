import { Keyboard } from 'react-native';
import { useLoginForm } from './useLoginForm';
import { useLoginMutation } from './useLoginMutation';
import { useAppContext } from '../../../appContext/AppContext';
import { useCallback } from 'react';

export const useAuth = () => {
    const loginForm = useLoginForm();
    const { loginMutation } = useLoginMutation();
    const { isNetworkConnected } = useAppContext();

    const onPressLogin = useCallback(() => {
        Keyboard.dismiss();

        if (!isNetworkConnected) {
            return;
        }

        const loginParams = loginForm.validateForm();

        if (!loginParams) {
            return;
        }

        loginMutation.mutate(loginParams);
    }, [loginForm, loginMutation.mutate, isNetworkConnected]);

    const isButtonDisabled = !loginForm.isFormFilled || loginMutation.isPending;

    return {
        ...loginForm,
        onPressLogin,
        isLoading: loginMutation.isPending,
        isError: loginMutation.isError,
        loginMutation,
        isButtonDisabled,
    };
};
