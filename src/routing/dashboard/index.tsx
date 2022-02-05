import React from "react";
import { CompositeScreenProps } from "@react-navigation/native";
import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from "@react-navigation/stack";

import homeStack from './home';
import {RootStackParam} from '../'

type BottomTabParam = {
    homeStack: undefined
}

export type StackScreenNavigatorProp = CompositeScreenProps<
    BottomTabScreenProps<BottomTabParam, 'homeStack'>,
    StackScreenProps<RootStackParam>
>

const Tab = createBottomTabNavigator<BottomTabParam>();

const Tabs = () => 
    <Tab.Navigator
        initialRouteName='homeStack'
        screenOptions={{
            headerShown: false
        }}
    >
        <Tab.Screen 
            name='homeStack'
            component={homeStack}
        />
    </Tab.Navigator>

export default Tabs;