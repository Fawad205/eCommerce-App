import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native'
import { theme } from '../../eCommerce-App/src/components/theme'

interface ProductCardProps {
  image?: ImageSourcePropType
  title?: string
  description?: string
  price?: number
  originalPrice?: number
  discountPercent?: string
  rating?: number 
  reviewsCount?: number
  showTitle?: boolean
  showRating?: boolean
  showStars?: boolean
  style?: ViewStyle
  imageStyle?: ImageStyle
  contentStyle?: ViewStyle
  titleStyle?: TextStyle
  showShadow?: boolean

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
  showTitle = true,
  showRating = true,
  showStars = true,
  style,
  imageStyle,
  contentStyle,
  titleStyle,
  showShadow =false

}: ProductCardProps) {
  const stars = Array.from({ length: 5 }).map((_, i) => (i < Math.round(rating) ? '★' : '☆'))

  const displayTitle = title ?? ''
  const displayPrice = price

  return (
    <View style={[styles.card,showShadow && styles.shadow, style]}  >
      <View style={styles.imageWrapper}>
        {image ? (
          <Image source={image} style={[styles.image, imageStyle]} resizeMode="contain" />
        ) : (
          <View style={[styles.image, styles.placeholder]}>
            <Text style={styles.placeholderText}>No image</Text>
          </View>
        )}
      </View> 

      <View style={[styles.content, contentStyle]}>
        {showTitle ? (
          <Text style={[styles.title, titleStyle]} >
            {displayTitle}
          </Text>
        ) : null}  
        
          <Text style={styles.description} >
            {description}
          </Text>
        
        <View style={styles.rowBetween}>
          <View>
            {displayPrice !== undefined ? (
              <>
                <Text style={styles.price}>₹{displayPrice}</Text>
                <View style={{flexDirection:'row',gap:5}}>
                  {originalPrice !== undefined ? (
                    <Text style={styles.originalPrice}>₹{originalPrice}</Text>
                  ) : null}
                  {discountPercent ? (
                    <View style={styles.discountBadge}>
                      <Text style={styles.discountText}>{discountPercent}</Text>
                    </View>
                  ) : null}
                </View>
              </>
            ) : (
              <Text style={styles.price}>—</Text>
            )}
          </View> 
          {showRating && rating > 0 ? (
          <View style={styles.ratingWrap}>
            {showStars ? <Text style={styles.stars}>{stars.join(' ')}</Text> : null}
            <Text style={styles.reviews}>{reviewsCount}</Text>
          </View>
          ) : null }
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
   
   width:175,
   overflow:'hidden',
   backgroundColor:'#ffff',
   margin:5,
  
   flexDirection:'column',
  
  },
  shadow:{
    backgroundColor:'#ffffff',
    elevation:5,
    shadowColor:'#000000',
    shadowOffset:{width:1,height:1},
    shadowOpacity:0.4,
    shadowRadius:3,
    
  },
  imageWrapper: {
    
  },
  image: {
    borderRadius:5,
    width: '100%',
    
  },
  placeholder: {
    width: '100%',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  placeholderText: {
    color: theme.colors.gray,
    fontFamily: theme.fonts.regular,
  },
  discountBadge: {
    
  },
  discountText: {
    color:theme.colors.primary,
    fontFamily:theme.fonts.regular,
  },
  content: {
    padding:8
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
   fontFamily:theme.fonts.semiBold,
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
