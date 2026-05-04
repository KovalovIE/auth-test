import { Keyboard } from 'react-native';
import { useLoginForm } from './useLoginForm';
import { useLoginMutation } from './useLoginMutation';
import { useAppContext } from '../../../appContext/AppContext';

export const useAuth = () => {
    const loginForm = useLoginForm();
    const { loginMutation } = useLoginMutation();
    const { isNetworkConnected } = useAppContext();

    const onPressLogin = () => {
        Keyboard.dismiss();

        if (!isNetworkConnected) {
            return;
        }

        const loginParams = loginForm.validateForm();

        if (!loginParams) {
            return;
        }

        loginMutation.mutate(loginParams);
    };

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
