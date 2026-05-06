import { NavigationContainer } from '@react-navigation/native';
import { useAppContext } from '../../appContext/AppContext';
import { AuthNavigator } from '../auth';
import { MainNavigator } from '../main';
import { LaunchNavigator } from '../launch';
import { useRequesterUnauthorizedHandler } from '../../shared/hooks/useRequesterUnauthorizedHandler';

export const RootNavigator = () => {
    const { user, isAppLoaded } = useAppContext();

    useRequesterUnauthorizedHandler();

    const appLoadedStacks = user?.accessToken ? <MainNavigator /> : <AuthNavigator />;

    return <NavigationContainer>{isAppLoaded ? appLoadedStacks : <LaunchNavigator />}</NavigationContainer>;
};
