import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Xmls } from '../../../assets/icons/Xmls'
import SvgIcon from '../../../assets/svgs/SvgIcon'
import Catagories from '../../../components/Catagories'
import SwiperComp from '../../../components/SwiperComp'
import SimpleTimer from '../../../components/commons/SimpleTimer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { theme } from '../../../components/theme'

import Svg from 'react-native-svg'
import OrderProductCard from '../../../components/OrderProductCard'



export default function CheckOut({navigation}:any) {
  return (
   
    <SafeAreaView>
        <ScrollView>
            <View style={styles.container}>
             <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ position: 'absolute', left: 0, padding: 8 }}
          >
            <SvgIcon xml={Xmls.backArrow} width={18} height={18} />
          </TouchableOpacity>

          <Text style={{ fontFamily: theme.fonts.semiBold, fontSize: 20 }}>
            Checkout
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={{flexDirection:'row',gap:5, marginTop:20, alignItems:'center'}}>
            <SvgIcon xml={Xmls.locationCheckOut} width={18} height={18} />
            <Text style={{fontFamily:theme.fonts.bold,fontSize:18}}>Delivery Address</Text>
        </View>


        <View style={{flexDirection:'row',gap:5, marginTop:10}}>
        <View style={styles.addressContainer}>
            <View style={{justifyContent:"flex-end",alignItems:'flex-end'}}>
            <SvgIcon xml={Xmls.edit} width={18} height={18} />
            </View>
            <Text style={{fontFamily:theme.fonts.semiBold}}>Address</Text>
            <Text style={{fontFamily:theme.fonts.regular,fontSize:16}}>216 St Paul's Rd, London N1 2LL, UK
Contact :  +44-784232</Text>
        </View>
        <TouchableOpacity >
            <View style={styles.addAddressBtn}>
            <SvgIcon xml={Xmls.add} width={32} height={32} />
            </View>
        </TouchableOpacity>
        </View>

        {/* shopping List */}
        <View >
            <Text style={{fontFamily:theme.fonts.bold,fontSize:18,marginBottom:10,marginTop:20}}>Shopping List</Text>
        </View>

        <View>
        <OrderProductCard 
        image={require('../../../assets/images/HomeScreen/Kurtaa.png')}
         title="Women’s Casual Wear"
  variants={{ label: "Variations :", options: ["Black", "Red"] }}
  rating={4.8}
  price={34}
  oldPrice={64}
  discountText="upto 33% off"
  quantity={1}
        />
</View>

<View  style={{marginTop:10}}>
    <OrderProductCard 
        image={require('../../../assets/images/HomeScreen/jacket.png')}
         title="Men’s Jacket"
  variants={{ label: "Variations :", options: ["Green", "Grey"] }}
  rating={4.8}
  price={34}
  oldPrice={64}
  discountText="upto 28% off"
  quantity={1}
        />
</View>
            


        </View>


        </ScrollView>
    </SafeAreaView>
  )
}

