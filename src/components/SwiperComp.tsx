import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { ImageBackground } from 'react-native';
import { theme } from './theme';

const { width } = Dimensions.get('window');

export default function SwiperComp() {

      const promoCards = [
    {
      id: '1',
      title: 'Beauty',
      discount: '50-40% OFF',
      description: 'Now in (Product) All colours',
      image: require('../assets/images/HomeScreen/girlWitbag.png'),
    },
    {
      id: '2',
      title: 'Fashion',
      discount: '30-20% OFF',
      description: 'All colours available',
      image: require('../assets/images/HomeScreen/girlWitbag.png'),
    },
    {
      id: '3',
      title: 'Kids',
      discount: '50% OFF',
      description: 'Shop Now for Kids',
      image: require('../assets/images/HomeScreen/girlWitbag.png'),
    },
  ];
  return (
    <View style={styles.container}>
      <SwiperFlatList  
      showPagination
      paginationStyleItem={styles.paginationItem}
      >
        {promoCards.map(({id,  discount, description, image}) => (
          <View key={id} style={styles.cardWrapper}>
            <ImageBackground key={id} source={image} style={styles.cardimage}>
                <View style={styles.cardContent}>
                    <Text style={styles.discountText}>{discount}</Text>
                    <Text style={styles.descriptionText}>{description}</Text>
                    <TouchableOpacity style={styles.shopNowButton}>
                        <Text>Shop Now</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            </View>
        ))}

      </SwiperFlatList>
 
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
       height:230,
       width:370,
     

    },
    cardWrapper:{
      width:width - 40,
      marginHorizontal:20,
      borderRadius:25,
    
    },
    paginationItem:{
      width:10,
      height:10,
      borderRadius:5,
      marginHorizontal:3,
      
    },
    cardimage:{
      height:189,
      width:'100%',
      resizeMode:'cover',
      padding:15,
      alignContent:'center',
      justifyContent:'center',
    },
    discountText:{
      fontSize:24,
      fontFamily:theme.fonts.bold,
      color:'white',
    },
    cardContent:{},
    descriptionText:{
      width:100,
      backgroundColor:theme.colors.white,
    },
    shopNowButton:{
      borderRadius:5,
     borderWidth:1,
      borderColor:theme.colors.white,
      width:100,
      height:35,
      justifyContent:'center',
      alignItems:'center',
    
    },
})