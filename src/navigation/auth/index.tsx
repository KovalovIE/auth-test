import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthNavigatorParamList } from '../types';
import { HomeScreen } from '../../modules/home/ui';
import { AuthScreen } from '../../modules/auth/ui';

const AuthStack = createNativeStackNavigator<AuthNavigatorParamList>();

export const AuthNavigator = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <AuthStack.Screen name="AuthScreen" component={AuthScreen} options={{ headerShown: false }} />
        </AuthStack.Navigator>
    );
};
