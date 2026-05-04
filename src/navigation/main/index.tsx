import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainNavigatorParamList } from '../types';
import { ProfileScreen } from '../../modules/profile/ui';

const MainStack = createNativeStackNavigator<MainNavigatorParamList>();

export const MainNavigator = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
        </MainStack.Navigator>
    );
};
