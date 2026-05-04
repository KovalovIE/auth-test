import { useNavigation } from '@react-navigation/native';
import { AuthStackNavigation } from '../../../navigation';

export const useHome = () => {
    const navigation = useNavigation<AuthStackNavigation>();

    const goToLoginScreen = () => {
        navigation.navigate('AuthScreen');
    };

    return { goToLoginScreen };
};
