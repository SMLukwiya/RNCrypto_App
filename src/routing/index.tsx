import React from 'react';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

import splash from '../components/screens/splashScreen';
import authStack from './auth';
import dashboardStack from './dashboard';

export type RootStackParam = {
    splash: undefined;
    authStack: undefined;
    dashboardStack: undefined
}

export type IndexScreenNavigationProp = StackScreenProps<RootStackParam, 'splash'>

const Stack = createStackNavigator<RootStackParam>();

const entry = () => 
    <Stack.Navigator
        initialRouteName='splash'
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen
            name='splash'
            component={splash}
        />
        <Stack.Screen
            name='authStack'
            component={authStack}
        />
        <Stack.Screen
            name='dashboardStack'
            component={dashboardStack}
        />
    </Stack.Navigator>

export default entry;