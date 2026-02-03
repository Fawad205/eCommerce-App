import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native'
import { theme } from '../../eCommerce-App/src/components/theme'

interface ProductCardProps {
  image: ImageSourcePropType
  title: string
  description?: string
  price: number
  originalPrice?: number
  discountPercent?: string
  rating?: number 
  reviewsCount?: number
 
}

export default function ProductCardComp({
  image,
  title,
  description,
  price,
  originalPrice,
  discountPercent,
  rating = 0,
  reviewsCount = 0,
 
}: ProductCardProps) {
  const stars = Array.from({ length: 5 }).map((_, i) => (i < Math.round(rating) ? '★' : '☆'))

  return (
    <View style={styles.card}  >
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} resizeMode="contain" />
        
      </View>

      <View style={styles.content}>
        <Text style={styles.title} >
          {title}
        </Text>
        
          <Text style={styles.description} >
            {description}
          </Text>
        
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.price}>₹{price}</Text>
            <View style={{flexDirection:'row',gap:5}}>
              <Text style={styles.originalPrice}>₹{originalPrice}</Text>
              {discountPercent ? (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{discountPercent}</Text>
          </View>
        ) : null}
              </View>
          </View>

          <View style={styles.ratingWrap}>
            <Text style={styles.stars}>{stars.join(' ')}</Text>
            <Text style={styles.reviews}>{reviewsCount}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
   
   height:340,
   width:'50%',
   overflow:'hidden'
  },
  imageWrapper: {
    paddingTop:20,
    paddingBottom:10
  },
  image: {
    borderRadius:5
  },
  discountBadge: {
    
  },
  discountText: {
    color:theme.colors.primary,
    fontFamily:theme.fonts.regular,
  },
  content: {
 
  },
  title: {
    fontFamily:theme.fonts.semiBold,
  },
  description: {
    fontFamily:theme.fonts.regular,
  },
  rowBetween: {
    
  },
  price: {
   fontFamily:theme.fonts.regular,
  },
  originalPrice: {
    fontFamily:theme.fonts.regular,
    color:theme.colors.gray,
    textDecorationLine:'line-through'
  },
  ratingWrap: {
   flexDirection:'row',
   gap:5
  },
  stars: {
    
  },
  reviews: {
    color:theme.colors.gray,
   
  },
})
