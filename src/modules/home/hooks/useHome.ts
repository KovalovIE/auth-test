import { useNavigation } from '@react-navigation/native';
import { AuthStackNavigation } from '../../../navigation';
import { useCallback } from 'react';

export const useHome = () => {
    const navigation = useNavigation<AuthStackNavigation>();

    const goToLoginScreen = useCallback(() => {
        navigation.navigate('AuthScreen');
    }, [navigation]);

    return { goToLoginScreen };
};
