import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../screens/App/GetStarted/GetStarted';
import HomeScreen from '../screens/App/HomeScreen/HomeScreen';
import BottomTabsComp from './BottomTabs';
import Profile from '../screens/App/profile/Profile';
import CheckOut from '../screens/App/CheckOut/CheckOut';
import PlaceOrder from '../screens/App/PlaceOrder/PlaceOrder';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
    initialRouteName='GetStarted' 
    screenOptions={{headerShown: false}}
    id='RootStack'
    >
      <Stack.Screen name='GetStarted' component={GetStarted}></Stack.Screen>
      <Stack.Screen name='Profile' component={Profile}></Stack.Screen>
      <Stack.Screen name='CheckOut' component={CheckOut}></Stack.Screen>
      <Stack.Screen name='PlaceOrder' component={PlaceOrder}></Stack.Screen>

      <Stack.Screen name='BottomTabs' component={BottomTabsComp}></Stack.Screen>


    </Stack.Navigator>
  )
}

