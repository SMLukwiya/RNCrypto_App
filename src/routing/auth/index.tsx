import React from 'react';
import { CompositeScreenProps } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps, StackNavigationOptions } from '@react-navigation/stack';

import login from '../../components/screens/authentication/login';
import createAccountIndex from '../../components/screens/authentication/createAccountIndex';
import createAccountOTP from '../../components/screens/authentication/createAccountOTP';
import createAccountSetup from '../../components/screens/authentication/createAccountSetup';

// common
import HeaderLeft from '../../components/resusable/HeaderLeft';
import { COLORS, SIZES } from '../../configs';

import { RootStackParam } from '../';

type RootStackList = {
    login: undefined;
    createAccountIndex: undefined;
    createAccountOTP: {email: string};
    createAccountSetup: {email: string}
}

// create a generic extension
export type AuthScreenProps<S extends keyof RootStackList> = CompositeScreenProps<
    StackScreenProps<RootStackList, S>,
    StackScreenProps<RootStackParam>
>

const Stack = createStackNavigator<RootStackList>();

// header options
const headerOptions: StackNavigationOptions = {
    // headerShown: false,
    headerTransparent: true
}

const auth = () => 
    <Stack.Navigator
        initialRouteName='login'
        screenOptions={headerOptions}
    >
        <Stack.Screen
            name='login'
            component={login}
            options={{
                title: '',
                headerShown: false
            }}
        />
        <Stack.Screen
            name='createAccountIndex'
            component={createAccountIndex}
            options={({navigation, route}: any) => ({
                title: '',
                headerLeft: () => <HeaderLeft color={COLORS.black} onPress={() => navigation.goBack()} />,
                headerLeftContainerStyle: { paddingLeft: SIZES.medium}
                
            })}
        />
        <Stack.Screen
            name='createAccountOTP'
            component={createAccountOTP}
            options={({navigation, route}: any) => ({
                title: '',
                headerLeft: () => <HeaderLeft color={COLORS.black} onPress={() => navigation.goBack()} />,
                headerLeftContainerStyle: { paddingLeft: SIZES.medium}
            })}
        />
        <Stack.Screen
            name='createAccountSetup'
            component={createAccountSetup}
            initialParams={{email: 'some email'}}
            options={({navigation, route}: any) => ({
                title: '',
                headerLeft: () => <HeaderLeft color={COLORS.black} onPress={() => navigation.goBack()} />,
                headerLeftContainerStyle: { paddingLeft: SIZES.medium}
                
            })}
        />
    </Stack.Navigator>

export default auth;