import React from 'react';
import { CompositeScreenProps } from '@react-navigation/core';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

import home from '../../../components/screens/dashboard/home';;
import { StackScreenNavigatorProp } from '../'

type RootStackParam = {
    home: undefined;
}

export type AuthScreenNavigationProp<S extends keyof RootStackParam> = CompositeScreenProps<
    StackScreenProps<RootStackParam, S>,
    StackScreenNavigatorProp
>

const Stack = createStackNavigator<RootStackParam>();

const auth = () => 
    <Stack.Navigator
        initialRouteName='home'
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen
            name='home'
            component={home}
            options={{ 
                title: ''
            }}
        />
    </Stack.Navigator>

export default auth;