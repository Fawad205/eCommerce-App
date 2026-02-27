import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Xmls } from '../../../assets/icons/Xmls'
import SvgIcon from '../../../assets/svgs/SvgIcon'

import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from '../../../components/theme'
import { PillDropdown } from '../../../components/PillDropdown'
import { set } from 'date-fns'



export default function PlaceOrder({navigation}:any) {
  const [size, setSize] = useState(42);
  const [qty, setQty] = useState(1);
  const sizeOptions = [40, 41, 42, 43, 44].map(n => ({ 
    label: String(n), 
    value: n 
  }));
  const qtyOptions = [1,2,3,4,5,6,7,8,9,10].map(n => ({ 
    label: String(n), 
    value: n 
  }));
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
            Shoppin bag
          </Text>

          <TouchableOpacity style={{ position: 'absolute', right: 0, padding: 8 }}>
            <SvgIcon xml={Xmls.heart} width={18} height={18} />
          </TouchableOpacity>
        </View>

        {/* Selected item size quantity */}
        <View style={styles.bagContainer}>
          <View style={{width:'32%'}}>
          <Image source={require('../../../assets/images/PlaceOrder/Place.png')} />
          </View>
          {/* descriptions */}
          <View style={styles.txtContainer}>
            <Text style={{fontFamily:theme.fonts.bold,fontSize:18}}>Women's Casual Wear</Text>
            <Text style={{marginTop:5,fontFamily:theme.fonts.regular,fontSize:16}}>Checked Single-Breasted Blazer</Text>
            <View style={{flexDirection:'row',gap:12}}>
            <PillDropdown
              label="Size"
              value={size}
              options={sizeOptions}
              onChange={(value) => setSize(typeof value === 'number' ? value : parseInt(value))}
              style={{width:100}}
            />
            <PillDropdown
              label="Qty"
              value={qty}
              options={qtyOptions}
              onChange={(value) => setQty(typeof value === 'number' ? value : parseInt(value))}
              style={{width:100,gap:20}}
            />
            </View>

            <View style={{flexDirection:'row',gap:5}}>
            <Text style={{fontFamily:theme.fonts.regular}}>Delivery by </Text>
            <Text style={{fontFamily:theme.fonts.bold}}>10 May 2XXX </Text>
            </View>

          </View>
        </View>
        {/* Apply promocode */}
        <View style={{flexDirection:'row',gap:10,alignItems:'center'}}>
          <SvgIcon xml={Xmls.promo} height={31} width={30}/>
          <Text style={{fontFamily:theme.fonts.semiBold}}>Apply Coupons</Text>
          <Text style={{color:theme.colors.primary,fontFamily:theme.fonts.semiBold,marginLeft:'auto'}}>Select</Text>
        </View>
        <View style={styles.divider}/>

        {/* Order Payment Details */}
        <View style={styles.OrderPayContainer}>
          <Text style={{fontFamily:theme.fonts.semiBold,marginBottom:5}}>Order Payment Details</Text>
          <View style={{flexDirection:'row',marginVertical:10,}}>
            <Text style={{fontSize:16}}>Order Amount</Text>
            <Text style={{fontFamily:theme.fonts.semiBold,marginLeft:'auto'}}>$ 7000.00</Text>
          </View>
           <View style={{flexDirection:'row',marginVertical:10,}}>
            <Text style={{fontSize:16}}>Convenience</Text>
            <Text style={{color:theme.colors.primary,paddingLeft:15}}>Know More</Text>
            <Text style={{fontSize:16,marginLeft:'auto',color:theme.colors.primary}}>Apply Coupon</Text>
          </View>

          <View style={{flexDirection:'row',marginVertical:10,}}>
            <Text style={{fontSize:16}}>DeliveryFee</Text>
            <Text style={{color:theme.colors.primary,marginLeft:'auto'}}>Free</Text>
          </View>
        </View>

        <View style={styles.divider}/>
        </View>
    </SafeAreaView>
  )
}

