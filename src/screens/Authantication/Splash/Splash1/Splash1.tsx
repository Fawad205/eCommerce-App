import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Image } from 'react-native'

export default function Splash1({navigation}:any) {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.replace("Splash2")
    },1000
  )
  })
  return (
    <View style={styles.container}>    
    <Image
    source={require("../../../../assets/images/Splash/Splash1.png")
    }
    style={{height:300 ,width:300}}
    resizeMode='contain'
    />

    </View>

  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})