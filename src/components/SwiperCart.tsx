import React, { useRef, useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { SwiperFlatList } from 'react-native-swiper-flatlist'
import { theme } from './theme'
import SvgIcon from '../assets/svgs/SvgIcon'
import { Xmls } from '../assets/icons/Xmls'

export default function SwiperCart() {
  type PromoCard = { id: string; image: any }

  const promoCards: PromoCard[] = [
    { id: '1', image: require('../assets/images/Cart/cartshoes.png') },
    { id: '2', image: require('../assets/images/Cart/cartshoes.png') },
    { id: '3', image: require('../assets/images/Cart/cartshoes.png') },
    { id: '4', image: require('../assets/images/Cart/cartshoes.png') },
    { id: '5', image: require('../assets/images/Cart/cartshoes.png') },
  ]

  const { width: windowWidth } = useWindowDimensions()
  const [sliderWidth, setSliderWidth] = useState(windowWidth)

  const swiperRef = useRef<any>(null)
  const [currentIndex, setIndex] = useState(0)

  const goNext = () => {
    if (currentIndex < promoCards.length - 1) {
      swiperRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true })
    }
  }

  const renderItem = ({ item }: { item: PromoCard }) => (
    <View style={{ width: sliderWidth, height: '100%' }}>
      <Image source={item.image} style={styles.cardimage} />
    </View>
  )

  return (
    <View style={styles.container}>
      {/* This wrapper controls the REAL width + rounded corners */}
      <View
        style={styles.sliderBox}
        onLayout={(e) => setSliderWidth(e.nativeEvent.layout.width)}
      >
        <SwiperFlatList
          ref={swiperRef}
          data={promoCards}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showPagination
          paginationStyleItem={styles.paginationItem}
          paginationStyle={styles.paginationContainer}
          paginationDefaultColor={theme.colors.gray}
          paginationActiveColor={'#F83758'}
          onChangeIndex={({ index }) => setIndex(index)}

          // ✅ These fix touch swipe stopping between slides (esp Android)
          snapToInterval={sliderWidth}
          snapToAlignment="start"
          decelerationRate="fast"
          disableIntervalMomentum
          bounces={false}
          getItemLayout={(_, index) => ({
            length: sliderWidth,
            offset: sliderWidth * index,
            index,
          })}
        />

        {/* Right arrow on top of image */}
        <TouchableOpacity
          style={styles.rightArrow}
          onPress={goNext}
          disabled={currentIndex === promoCards.length - 1}
        >
          <SvgIcon xml={Xmls.sliderArrow} width={18} height={18} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: '100%',
    
    
  },

  // IMPORTANT: borderRadius + overflow hidden here (one place)
  sliderBox: {
   height: 250,
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },

  cardimage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    
  },

  paginationItem: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  paginationContainer: {
    position:'static',
    marginBottom: 10,
},

  rightArrow: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -9 }],
    zIndex: 10,
  },
})
