import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LaunchScreen } from '../../modules/launchApp/ui';
import { LaunchNavigatorParamList } from '../types';

const LaunchStack = createNativeStackNavigator<LaunchNavigatorParamList>();

export const LaunchNavigator = () => {
    return (
        <LaunchStack.Navigator>
            <LaunchStack.Screen name="LaunchAppScreen" component={LaunchScreen} options={{ headerShown: false }} />
        </LaunchStack.Navigator>
    );
};
