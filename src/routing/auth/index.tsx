import React from 'react';
import { CompositeNavigationProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import login from '../../components/screens/authentication/login';
import { RootStackParam } from '../';

type RootStack = {
    login: undefined;
    // signup: { params here }
}

export type AuthScreenNavigationProp = CompositeNavigationProp<
    StackNavigationProp<RootStack, 'login'>,
    StackNavigationProp<RootStackParam>
>

const Stack = createStackNavigator<RootStack>();

const auth = () => 
    <Stack.Navigator
        initialRouteName='login'
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen
            name='login'
            component={login}
            options={{
                title: ''
            }}
        />
    </Stack.Navigator>

export default auth;