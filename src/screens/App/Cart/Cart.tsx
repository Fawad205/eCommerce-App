import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import React, { useRef } from 'react';
import { styles } from './styles';
import { Xmls } from '../../../assets/icons/Xmls';
import SvgIcon from '../../../assets/svgs/SvgIcon';
import Catagories from '../../../components/Catagories';
import SwiperComp from '../../../components/SwiperComp';
import SimpleTimer from '../../../components/commons/SimpleTimer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductCardComp from '../../../components/ProductCardComp';
import SwiperCart from '../../../components/SwiperCart';
import { ScrollView } from 'react-native-gesture-handler';
import { theme } from '../../../components/theme';

export default function Cart({navigation}:any) {
  const [selectedSize, setSelectedSize] = React.useState('7 UK');
  const sizes = ['6 UK', '7 UK', '8 UK', '9 UK', '10 UK'];

  const scrollRef = useRef<ScrollView>(null);
  const scrollRight = () => {
    scrollRef.current?.scrollTo({
      x: 300,
      animated: true,
    });
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.conteiner}>
          <View style={styles.hrader}>
            <SvgIcon xml={Xmls.backArrow} width={18} height={18} />
            <SvgIcon xml={Xmls.troly} width={18} height={18} />
          </View>

          {/* swipper component */}
          <View style={styles.swiper}>
            <SwiperCart />
          </View>

          {/* Sizes Section */}

          <View>
            <Text
              style={{ fontFamily: theme.fonts.semiBold, marginVertical: 10 }}
            >
              Size: {selectedSize}
            </Text>

            <View style={{ flexDirection: 'row', gap: 10 }}>
              {sizes.map(size => {
                const isSelected = selectedSize === size;

                return (
                  <TouchableOpacity
                    key={size}
                    onPress={() => setSelectedSize(size)}
                    style={[
                      styles.sizesBtn,
                      isSelected && styles.selectedSizeBtn,
                    ]}
                  >
                    <Text
                      style={{
                        color: isSelected ? '#fff' : theme.colors.primary,
                        fontFamily: theme.fonts.semiBold,
                      }}
                    >
                      {size}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* nmae and description */}
          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                fontFamily: theme.fonts.bold,
                fontSize: 18,
                marginTop: 10,
              }}
            >
              NIke Sneakers
            </Text>

            <Text style={{ fontFamily: theme.fonts.regular, fontSize: 14 }}>
              Vision Alta Men’s Shoes Size (All Colours)
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <SvgIcon xml={Xmls.star} width={18} height={18} />
              <SvgIcon xml={Xmls.star} width={18} height={18} />
              <SvgIcon xml={Xmls.star} width={18} height={18} />
              <SvgIcon xml={Xmls.star} width={18} height={18} />
              <SvgIcon xml={Xmls.starHalf} width={18} height={18} />
              <Text style={{ color: theme.colors.gray, marginLeft: 5 }}>
                56,890
              </Text>
            </View>

            <View
              style={{
                marginTop: 5,
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: theme.colors.gray,
                  textDecorationLine: 'line-through',
                  fontSize: 14,
                }}
              >
                ₹2,999
              </Text>
              <Text style={{ fontFamily: theme.fonts.semiBold, fontSize: 16 }}>
                ₹1,500
              </Text>
              <Text
                style={{
                  color: theme.colors.primary,
                  fontFamily: theme.fonts.semiBold,
                  fontSize: 14,
                }}
              >
                50% Off
              </Text>
            </View>

            <View>
              <Text
                style={{
                  fontFamily: theme.fonts.semiBold,
                  fontSize: 16,
                  marginVertical: 10,
                }}
              >
                Product Details
              </Text>
              <Text style={{ fontFamily: theme.fonts.regular, fontSize: 13 }}>
                Perhaps the most iconic sneaker of all-time, this original
                "Chicago"? colorway is the cornerstone to any sneaker
                collection. Made famous in 1985 by Michael Jordan, the shoe has
                stood the test of time, becoming the most famous colorway of the
                Air Jordan 1. This 2015 release saw the ...
                <Text style={{ color: theme.colors.primary }}>More</Text>
              </Text>
            </View>
          </View>
          {/* btns Section */}
          <View style={{ flexDirection: 'row', gap: 10, marginVertical: 10 }}>
            <TouchableOpacity style={styles.btns}>
              <SvgIcon xml={Xmls.location} width={18} height={18} />
              <Text>Nearest Store</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btns}>
              <SvgIcon xml={Xmls.lock} width={18} height={18} />
              <Text>VIP</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btns}>
              <SvgIcon xml={Xmls.return} width={18} height={18} />
              <Text>Return Policy</Text>
            </TouchableOpacity>
          </View>

          {/* Cart and Buy */}

          <View style={{ flexDirection: 'row', gap: 10, marginVertical: 10 }}>
            <TouchableOpacity style={{ flexDirection: 'row', gap: 5 }}
            onPress={() => navigation.getParent('RootStack')?.navigate('CheckOut')}
            >
              <Image
                source={require('../../../assets/images/Cart/goToCart.png')}
              />
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: 'row', gap: 5 }}              onPress={() => navigation.getParent('RootStack')?.navigate('PlaceOrder')}
              >
              <Image
                source={require('../../../assets/images/Cart/buyNow.png')}
              />
            </TouchableOpacity>
          </View>

          {/* Delivery */}

          <View style={styles.delivery}>
            <Text style={{ fontFamily: theme.fonts.bold, fontSize: 16 }}>
              Delivery in
            </Text>
            <Text style={{ fontFamily: theme.fonts.bold, fontSize: 22 }}>
              1 within Hour
            </Text>
          </View>

          {/* ViewSimilier and Add to compare */}

          <View style={{ flexDirection: 'row', gap: 10 }}>
            <TouchableOpacity style={styles.similerBtn}>
              <SvgIcon xml={Xmls.cartEye} width={18} height={18} />
              <Text style={{ fontFamily: theme.fonts.semiBold, fontSize: 16 }}>
                View Similier
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.similerBtn}>
              <SvgIcon xml={Xmls.phone} width={18} height={18} />
              <Text style={{ fontFamily: theme.fonts.semiBold, fontSize: 16 }}>
                Add to Compare
              </Text>
            </TouchableOpacity>
          </View>

          {/* Similier products */}
          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                fontFamily: theme.fonts.bold,
                fontSize: 22,
                marginVertical: 10,
              }}
            >
              Similier To
            </Text>

            <View style={styles.featuredSection}>
              <Text style={styles.featuredText}>282+ Iteams</Text>

              {/* buttons parent view */}
              <View
                style={{
                  flexDirection: 'row',
                  gap: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity style={styles.sort}>
                  <Text>Sort </Text>
                  <SvgIcon xml={Xmls.sort} width={18} height={18} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.filter}>
                  <Text>Filter </Text>
                  <SvgIcon xml={Xmls.filter} width={18} height={18} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Cards comps  */}
          <View style={{ flexDirection: 'row', gap: 10 }}>
          <ProductCardComp 
          image={require('../../../assets/images/Cart/jorden1.png')}
          title='NIke Sneakers'
          description='Nike Air Jordan Retro 1 Low Mystic Black'
          price={1900}
          rating={4.5}
          reviewsCount={46890}
          />

          <ProductCardComp 
          image={require('../../../assets/images/Cart/jorden2.png')}
          title='NIke Sneakers'
          description='Nike Air Jordan Retro 1 Low Mystic Black'
          price={1900}
          rating={4.5}
          reviewsCount={46890}
          />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
