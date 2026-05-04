import { Text, View } from 'react-native';
import { useLaunchApp } from '../hooks/useLaunchApp';
import { styles } from './styles';

export const LaunchScreen = () => {
    const { isNetworkConnected } = useLaunchApp();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{isNetworkConnected ? 'Test task' : 'No internet connection'}</Text>
        </View>
    );
};
