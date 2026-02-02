import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../screens/App/GetStarted/GetStarted';
import HomeScreen from '../screens/App/HomeScreen/HomeScreen';
import BottomTabsComp from './BottomTabs';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
    initialRouteName='GetStarted' 
    screenOptions={{headerShown: false}}
    >
      <Stack.Screen name='GetStarted' component={GetStarted}></Stack.Screen>
      <Stack.Screen name='BottomTabs' component={BottomTabsComp}></Stack.Screen>

    </Stack.Navigator>
  )
}

