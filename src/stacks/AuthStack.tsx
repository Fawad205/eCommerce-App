import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/Authantication/Login/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from '../screens/Authantication/SignUp/SignUp';
import Forgot from '../screens/Authantication/ForgotPassword/Forgot';



const Stack = createNativeStackNavigator();

export default function AuthStack() {

  return (
    
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{headerShown : false}}
      >
      <Stack.Screen name="SignIn" component={SignIn} />
       <Stack.Screen name="SignUp" component={SignUp} />
       <Stack.Screen name="Forgot" component={Forgot} />
       

         </Stack.Navigator>
    
  )
}

const styles = StyleSheet.create({})