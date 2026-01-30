import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { ImageBackground } from 'react-native';
import { theme } from './theme';
import SvgIcon from '../assets/svgs/SvgIcon';
import { Xmls } from '../assets/icons/Xmls';

const { width } = Dimensions.get('window');

export default function SwiperComp() {

  type PromoCard = {
    id: string;
    title: string;
    discount: string;
    description: string;
    image: any;
  };

  const promoCards: PromoCard[] = [
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

  const renderItem = ({ item }: { item: PromoCard }) => (
    <View style={styles.cardWrapper}>
      <ImageBackground source={item.image} style={styles.cardimage}>
        <View style={styles.cardContent}>
          <Text style={styles.discountText}>{item.discount}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
  <TouchableOpacity style={styles.shopNowButton}>
            <Text style={styles.shopNowButtonText}>Shop Now </Text>
            <SvgIcon xml={Xmls.arrow} width={18} height={18} />
          </TouchableOpacity>
        </View>

        </ImageBackground>
    </View>

  )


  return (
    <View style={styles.container}>
      <SwiperFlatList  
      data={promoCards}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showPagination
      paginationStyleItem={styles.paginationItem}
      paginationDefaultColor={theme.colors.gray}
      paginationActiveColor={'#FFA3B3'}
      />
 
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
       height:230,
       width:'100%',
     

    },
    cardWrapper:{
      width:width - 41,
    
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
      alignContent:'center',
      justifyContent:'center',
    },
     cardContent:{
      padding:15,
      justifyContent:'space-between',
      height:'90%',
    },

    discountText:{
      fontSize:24,
      fontFamily:theme.fonts.bold,
      color:'white',
    },
   
    descriptionText:{
      width:120,
      fontSize:14,
      fontFamily:theme.fonts.regular,
      color:'white',
    },
    shopNowButton:{
      borderRadius:5,
     borderWidth:1,
      borderColor:theme.colors.white,
      width:100,
      height:35,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      gap:5,    
    },
    shopNowButtonText:{
      color:theme.colors.white,
      fontFamily:theme.fonts.semiBold,
      fontSize:12,
      
    }
})