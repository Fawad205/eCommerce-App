import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './src/stacks/Navigation'
import MainStack from './src/stacks/MainStack';
import { ThemeProvider } from './src/components/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const App = () => {
  return (      
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <NavigationContainer ref={navigationRef} >
          <MainStack />
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})