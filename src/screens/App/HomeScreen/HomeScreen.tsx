import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ImageBackground } from 'react-native'
import React, { useRef } from 'react'
import { styles } from './styles'
import { Xmls } from '../../../assets/icons/Xmls'
import SvgIcon from '../../../assets/svgs/SvgIcon'
import Catagories from '../../../components/Catagories'
import SwiperComp from '../../../components/SwiperComp'
import SimpleTimer from '../../../components/commons/SimpleTimer'
import ProductCardComp from '../../../components/ProductCardComp'
import { ScrollView } from 'react-native-gesture-handler'
import { theme } from '../../../components/theme'
import {format, getDate} from 'date-fns';




export default function HomeScreen({navigation}:any) {

  const scrollRef = useRef<ScrollView>(null)
  const scrollRight = () =>{
    scrollRef.current?.scrollTo({
      x:300,
      animated:true
    })
  }

  const currentdate= new Date();

 const customFormattedDate = format(currentdate , "dd/MM/yyyy ")


  return (
    <ScrollView>
    <View style={styles.container}>

      <View>

      <View style={styles.header}>
        <TouchableOpacity>          <Image source={require('../../../assets/images/HomeScreen/logs.png')} />
        </TouchableOpacity>
        <Image  source={require('../../../assets/images/HomeScreen/logo.png')} />
        <TouchableOpacity
        onPress={() => navigation.getParent('RootStack')?.navigate('Profile')}
        >
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

      {/* Flat and Heels */}

      <View style={styles.flatAndHeel}>

  {/* 🔹 Background images layer */}
  <View style={styles.bgLayer}>
    <Image
      source={require('../../../assets/images/HomeScreen/liner.png')}
      style={styles.liner}
    />

    <Image
      source={require('../../../assets/images/HomeScreen/stars.png')}
      style={styles.stars}
    />

    <Image
      source={require('../../../assets/images/HomeScreen/heal.png')}
      style={styles.heels}
    />
  </View>

  {/* 🔹 Content layer */}
  <View style={styles.content}>
    <Text style={styles.title}>Flat and Heels</Text>
    <Text style={styles.subTitle}>
      Stand a chance to get rewarded
    </Text>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Visit now </Text>
      <SvgIcon xml={Xmls.arrow}/>
    </TouchableOpacity>
  </View>

</View>




      {/* Trending Products */}

      <View style={styles.trendingProductSection}>
        <View style={{flexDirection:'column',gap:5 }}>
        <Text style={styles.dealOfDayText}>Trending Products</Text>
        <View style={styles.dealtime}>
          <SvgIcon xml={Xmls.calender} width={18} height={18} />
          <Text style={{color:'#fff'}}>Last Date {customFormattedDate}</Text>
        </View>
        </View>
        <View style={styles.viewallbtn}>
        <TouchableOpacity>
          <Text style={styles.viewallTxt}>View all</Text>
        </TouchableOpacity>
          <SvgIcon xml={Xmls.arrow} width={18} height={18} />
        </View>
      </View>
        
          {/* bottom product card */}
          
          <View style={{ position: 'relative' }}>
  <TouchableOpacity
    onPress={scrollRight}
    style={{
      position: 'absolute',
      right: 12,
      top: '40%',
      transform: [{ translateY: -12 }],
      zIndex: 20,
      
      width: 32,
      height: 32,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Image source={require('../../../assets/images/HomeScreen/sliderArrow.png')}/>
  </TouchableOpacity>

  <ScrollView
    ref={scrollRef}
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ paddingRight: 40 }}
  >
    <ProductCardComp
      image={require('../../../assets/images/HomeScreen/watch.png')}
      price={650}
      description={`IWC Schaffhausen
2021 Pilot's Watch SIHH 2019 44mm`}
      originalPrice={1599}
      discountPercent="60% off"
      showTitle={false}
      showRating={false}
      style={{height:240}}
    />

    <ProductCardComp
      image={require('../../../assets/images/HomeScreen/whiteShoes.png')}
      price={650}
      description={`Labbin White Sneakers
For Men and Female`}
      originalPrice={1250}
      discountPercent="70% off"
      showTitle={false}
      showRating={false}
      style={{height:240}}
    />
  </ScrollView>
</View>

  {/* Hot SummerSale */}
  <View style={styles.hotSale}>
    <Image source={require('../../../assets/images/HomeScreen/hotSale.png')}/>
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
      <View>
    <Text style={{fontFamily:theme.fonts.semiBold,fontSize:18}}>New Arrivals</Text>
    <Text style={{fontFamily:theme.fonts.regular}}>Summer’ 25 Collections</Text>
    </View>
    <View style={{
      backgroundColor:theme.colors.primary,
      borderRadius:5,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      padding:8,
      gap:8,
      height:30

    }}>
        <TouchableOpacity>
          <Text style={styles.viewallTxt}>View all</Text>
        </TouchableOpacity>
          <SvgIcon xml={Xmls.arrow} width={18} height={18} />
        </View>
    </View>
  </View>

  {/* Sponsered */}
  <View style={styles.sponserd}>
    <Text style={{fontFamily:theme.fonts.semiBold,padding:5,fontSize:18}}>Sponserd</Text>
   <Image source={require('../../../assets/images/HomeScreen/browwenShoes.png')}/>
   <View style={{flexDirection:'row',marginTop:5,justifyContent:'space-between',alignItems:'center'}}>
   <Text  style={{fontFamily:theme.fonts.bold,padding:5,fontSize:18}} >up to 50% Off </Text>
   <SvgIcon xml={Xmls.sliderArrow} width={18} height={18}/>
   </View>
  </View>
      
    </View>
    </ScrollView>
  )
}

