import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Xmls } from '../../../assets/icons/Xmls'
import SvgIcon from '../../../assets/svgs/SvgIcon'
import Catagories from '../../../components/Catagories'
import SwiperComp from '../../../components/SwiperComp'
import SimpleTimer from '../../../components/commons/SimpleTimer'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import ProductCardComp from '../../../components/ProductCardComp'
import { ScrollView } from 'react-native-gesture-handler'
import { theme } from '../../../components/theme'




export default function HomeScreen() {
  return (
    <ScrollView>
    <View style={styles.container}>

      <View>

      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../../../assets/images/HomeScreen/logs.png')} />
        </TouchableOpacity>
        <Image  source={require('../../../assets/images/HomeScreen/logo.png')} />
        <TouchableOpacity>
          <Image source={require('../../../assets/images/HomeScreen/userprofile.png')} />
        </TouchableOpacity>
      </View>

      {/* Search Input Field */}
      <View style={styles.inputWrapper}>
        <SvgIcon xml={Xmls.search} width={18} height={18} />
        <TextInput
          style={styles.inputField}
          placeholder="Search any Product.."
          placeholderTextColor="#BBBBBB"
        />
        <SvgIcon xml={Xmls.mic} width={18} height={18} />

      </View>

      </View>

      {/* Featured Section */}

      <View style={styles.featuredSection}>
      <Text style={styles.featuredText}>All Featured</Text>

      {/* buttons parent view */}
      <View style={{flexDirection:'row',gap:20,justifyContent:'center',alignItems:'center'}}>

      <TouchableOpacity style={styles.sort}>
        <Text>Sort </Text>
        <SvgIcon xml={Xmls.sort} width={18} height={18} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.filter}>
        <Text >Filter </Text>
        <SvgIcon xml={Xmls.filter} width={18} height={18} />
      </TouchableOpacity>
      </View>

      </View>

      {/* catagories component */}
      <Catagories />

      {/* Swiper Component */}
      
      <SwiperComp />

      {/* Deal of the day */}

      <View style={styles.dealOfDaySection}>
        <View style={{flexDirection:'column',gap:5 }}>
        <Text style={styles.dealOfDayText}>Deal of the Day</Text>
        <View style={styles.dealtime}>
          <SvgIcon xml={Xmls.clock} width={18} height={18} />
        <SimpleTimer seconds={22 * 60 * 60 + 55 * 60 + 20} />
        </View>
        </View>
        <View style={styles.viewallbtn}>
        <TouchableOpacity>
          <Text style={styles.viewallTxt}>View all</Text>
        </TouchableOpacity>
          <SvgIcon xml={Xmls.arrow} width={18} height={18} />
        </View>

      </View>
    {/* productCards */}

    <View style={{flexDirection:'row'}}>
      <ProductCardComp 
      image={require('../../../assets/images/HomeScreen/Kurta (2).png')}
      title="Women Printed Kurta"
  description="Neque porro quisquam est qui dolorem ipsum quia"
  price={1500}
  originalPrice={2499}
  discountPercent="40% Off"
  rating={4.5}
  reviewsCount={56890}
      />
    <ProductCardComp 
      image={require('../../../assets/images/HomeScreen/shoes.png')}
      title="HRX by Hrithik Roshan"
  description="Neque porro quisquam est qui dolorem ipsum quia"
  price={2499}
  originalPrice={4999}
  discountPercent="50% Off"
  rating={4.5}
  reviewsCount={344567}
      />
      </View>

      {/* Special offer  */}

      <View style={styles.offerContainer}>
        <Image source={require('../../../assets/images/HomeScreen/offer.png')}/>
        <View style={styles.offerTxtContainer}>
          <Text style={{fontFamily:theme.fonts.semiBold,fontSize:18}}>Special Offers 😱</Text>
          <Text style={{fontFamily:theme.fonts.regular,fontSize:14}}>We make sure you get the offer you need at best prices</Text>
        </View>

      </View>

    </View>
    </ScrollView>
  )
}

