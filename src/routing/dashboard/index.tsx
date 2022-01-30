import React from "react";
import { CompositeNavigationProp } from "@react-navigation/native";
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from "@react-navigation/stack";

import homeStack from './home';
import {RootStackParam} from '../'

type BottomTabParam = {
    homeStack: undefined
}

export type StackScreenNavigatorProp = CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParam, 'homeStack'>,
    StackNavigationProp<RootStackParam>
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