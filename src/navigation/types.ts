import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AuthNavigatorParamList = {
    HomeScreen: undefined;
    AuthScreen: undefined;
};

export type LaunchNavigatorParamList = {
    LaunchAppScreen: undefined;
};

export type MainNavigatorParamList = {
    ProfileScreen: undefined;
};

export type AuthStackNavigation = NativeStackNavigationProp<AuthNavigatorParamList>;
export type MainStackNavigation = NativeStackNavigationProp<MainNavigatorParamList>;
export type LaunchStackNavigation = NativeStackNavigationProp<LaunchNavigatorParamList>;
