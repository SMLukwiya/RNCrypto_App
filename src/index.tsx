import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigator from './routing';

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default App;