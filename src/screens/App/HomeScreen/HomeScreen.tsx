import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Xmls } from '../../../assets/icons/Xmls'
import SvgIcon from '../../../assets/svgs/SvgIcon'
import Catagories from '../../../components/Catagories'
import SwiperComp from '../../../components/SwiperComp'
import SimpleTimer from '../../../components/commons/SimpleTimer'



export default function HomeScreen() {
  return (
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


    </View>
  )
}

