import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Xmls } from '../../../assets/icons/Xmls'
import SvgIcon from '../../../assets/svgs/SvgIcon'
import Catagories from '../../../components/Catagories'
import SwiperComp from '../../../components/SwiperComp'
import SimpleTimer from '../../../components/commons/SimpleTimer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from '../../../components/theme'



export default function PlaceOrder({navigation}:any) {
  return (
   
    <SafeAreaView>
        <View style={styles.container}>
             <View style={{ justifyContent: 'center',flexDirection:'row', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ position: 'absolute', left: 0, padding: 8 }}
          >
            <SvgIcon xml={Xmls.backArrow} width={18} height={18} />
          </TouchableOpacity>

          <Text style={{ fontFamily: theme.fonts.semiBold, fontSize: 20 }}>
            Checkout
          </Text>

          <TouchableOpacity style={{ position: 'absolute', right: 0, padding: 8 }}>
            <SvgIcon xml={Xmls.heart} width={18} height={18} />
          </TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>
  )
}

