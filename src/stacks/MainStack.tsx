import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppStack from "./AppStack"
import AuthStack from "./AuthStack";
import Splash1 from "../screens/Authantication/Splash/Splash1/Splash1"
import Splash2 from "../screens/Authantication/Splash/Splash2";


const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Splash1"
    >
      <Stack.Screen name="Splash1" component={Splash1}/> 
      <Stack.Screen name="Splash2" component={Splash2}/> 
      <Stack.Screen name="AuthStack" component={AuthStack} />
       <Stack.Screen name="AppStack" component={AppStack} /> 
    </Stack.Navigator>
  );
}