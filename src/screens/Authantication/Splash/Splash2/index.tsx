import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SplashScreenData } from './data'
import { Image } from 'react-native';
import { styles } from './styles'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../../../../stacks/AuthStack';

// type Props = NativeStackScreenProps<RootStackParamList, 'Splash2'>;


export default function Splash2({navigation}:any) {

  const [state,setState]=useState(0);
  const current = SplashScreenData[state];
  return (  
   
    <View style={styles.container}>
    <View style={styles.imageContainer} >

      <Image source={current.image}
      style={styles.image} />
    </View>
      <Text style={styles.title}>{current.title}</Text>
      <Text style={styles.discription}>{current.discription}</Text>
    
    
    {/* //page count */}



  <Text style={styles.pageCount}>
    {state + 1}/{SplashScreenData.length}
  </Text>

 {/* Dots Slider */}
      <View style={styles.dotsContainer}>
        {SplashScreenData.map((_, index) => (
          <View
            key={index.toString()}
            style={[
              styles.dot,
              { backgroundColor: index === state ? '#1A1A1A' : '#ffff' },
            ]}
          />
        ))}
      </View>



  {/* // Next Button */}
    <TouchableOpacity onPress={() => {
      if (state <SplashScreenData.length - 1)
      {
        setState(state + 1);
      }
      else {
       
        navigation.replace("AuthStack");
      }
      }} 
      style={styles.btn}>
      <Text style={styles.btnTxt}>
        {state === 2 ? 'Get Started' : 'Next'}
      </Text>
    </TouchableOpacity>

{/* // Prev Button */}
   {state > 0 && (
  <TouchableOpacity
    onPress={() => setState(state - 1)}
    style={styles.btnPrev}
  >
    <Text style={styles.PrevbtnTxt}>Prev</Text>
  </TouchableOpacity>
)}

{/* // Skip Button */}
    <TouchableOpacity
  onPress={() => {
    setState(2); 
  }}
  style={styles.skipBtn}
>
  <Text style={styles.skipTxt}>Skip</Text>
</TouchableOpacity>

  
  </View>

  )
}

