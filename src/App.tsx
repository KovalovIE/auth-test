import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContextProvider } from './appContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RootNavigator } from './navigation';
import { NetworkStatus } from './shared/networkStatus';

const queryClient = new QueryClient();

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaProvider>
            <QueryClientProvider client={queryClient}>
                <AppContextProvider>
                    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                    <RootNavigator />
                    <NetworkStatus />
                </AppContextProvider>
            </QueryClientProvider>
        </SafeAreaProvider>
    );
};

export default App;
