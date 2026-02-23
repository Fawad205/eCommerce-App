import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput} from 'react-native'
import React, { useRef } from 'react'
import { styles } from './styles'
import { Xmls } from '../../../assets/icons/Xmls'
import SvgIcon from '../../../assets/svgs/SvgIcon'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { WishlistData } from './data'
import ProductCardComp from '../../../components/ProductCardComp'
// import { MasonryFlashList } from '@shopify/flash-list'
import MasonryList from 'react-native-masonry-list'

export default function WishlistScreen({navigation}:any) {
  type WishlistItem = typeof WishlistData[number]


    return (
    
    <View style={styles.container}>

      <View>

      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../../../assets/images/HomeScreen/logs.png')} />
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
      <Text style={styles.featuredText}>52,082+ Items </Text>

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

      {/* Product Cards Display */}
    
     <FlatList
      data={WishlistData}
      keyExtractor={(item)=>item.id.toString()}
      numColumns={2}

      renderItem={({item}) => (
        <ProductCardComp 
        image={item.image}
        title={item.title}
        description={item.description}
        price={item.price}
        rating={item.rating}
        reviewsCount={item.reviewCount}
        showShadow
        style={{borderRadius:10}}
        
        />
      )}
      />
     {/* <MasonryList
  data={WishlistData}
  keyExtractor={(item: WishlistItem) => item.id.toString()}
  numColumns={2}
  renderItem={({ item }: { item: WishlistItem }) => (
    <ProductCardComp
      image={item.image}
      title={item.title}
      description={item.description}
      price={item.price}
      rating={item.rating}
      reviewsCount={item.reviewCount}
      showShadow
    />
  )}
/> */}


      
    </View>
   
  )
}

