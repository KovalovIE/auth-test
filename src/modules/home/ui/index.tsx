import { View } from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../../shared/customButton';
import { useHome } from '../hooks/useHome';

export const HomeScreen = () => {
    const { goToLoginScreen } = useHome();

    return (
        <View style={styles.container}>
            <CustomButton title="Go to login" onPress={goToLoginScreen} />
        </View>
    );
};
