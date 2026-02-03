import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/App/HomeScreen/HomeScreen';
import Wishlist from '../screens/App/Wishlist/Wishlist';
import Cart from '../screens/App/Cart/Cart';
import Search from '../screens/App/Search/Search';
import Settings from '../screens/App/Settings/Settings';
import { View } from 'react-native';
import SvgIcon from '../../eCommerce-App/src/assets/svgs/SvgIcon';
import { Xmls } from '../assets/icons/Xmls';
import { useIsFocused } from '@react-navigation/native';

const Tab = createBottomTabNavigator(); 



export default function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{
        headerShown:false,
        tabBarShowLabel:true,
        tabBarLabelPosition:'below-icon',
        tabBarActiveTintColor:'#EB3030',
        tabBarInactiveTintColor:'#000000'
    }}>
        
           
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarIcon : ( {focused}) => 
            focused ? (
            <SvgIcon xml={ Xmls.homef } width={18} height={18} />)
            : (<SvgIcon xml={Xmls.home} width={18} height={18}/> )
        ,
      }}
      />
     
      <Tab.Screen name="Wishlist" component={Wishlist} 
        options={{
        tabBarIcon : ( {focused}) => 
            focused ? (
            <SvgIcon xml={ Xmls.heartf } width={18} height={18} />)
            : (<SvgIcon xml={Xmls.heart} width={18} height={18}/> )
        ,
      }}
      />
      <Tab.Screen name="Cart" component={Cart} 
       options={{
        tabBarIcon : ( {focused}) => 
            focused ? (
            <SvgIcon xml={ Xmls.cartf } width={18} height={18} />)
            : (<SvgIcon xml={Xmls.cart} width={18} height={18}/> )
        ,
      }}
      />
      <Tab.Screen name="Search" component={Search} 
       options={{
        tabBarIcon : ( {focused}) => 
            focused ? (
            <SvgIcon xml={ Xmls.Searchf } width={18} height={18} />)
            : (<SvgIcon xml={Xmls.searchBottom} width={18} height={18}/> )
        ,
      }}
      />
      <Tab.Screen name="Settings" component={Settings} 
       options={{
        tabBarIcon : ( {focused}) => 
            focused ? (
            <SvgIcon xml={ Xmls.Settingsf } width={18} height={18} />)
            : (<SvgIcon xml={Xmls.settings} width={18} height={18}/> )
        ,
      }}
      />
     
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({


});




