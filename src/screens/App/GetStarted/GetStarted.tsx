
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { styles } from './styles' 
import Button from '../../../components/commons/Button'



export default function GetStarted({ navigation }: any) {
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/getStarted/GetStarted.png')}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.txtContainer}>
        <Text style={styles.txt}>You want Authentic, here you go!</Text>

        <Text style={styles.txtBelow}>Find it here,buy it now!</Text>

        <Button
          text="Get Started"
          style={styles.button}
          onPress={() => navigation.navigate('HomeScreen')}
        />
        </View>
      </ImageBackground>

    </View>
  )
}
