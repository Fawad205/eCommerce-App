import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Catagories() {

    const catagories = [
        {
            id: '1',
            title: 'Beauty',
            imageurl: require('../assets/images/HomeScreen/beauty.png'),
        },
        {
            id: '2',
            title: 'Fashion',
            imageurl: require('../assets/images/HomeScreen/fashion.png'),
        },
        {
            id: '3',
            title: 'Kids',
            imageurl: require('../assets/images/HomeScreen/kids.png'),
        },
        {
            id: '4',
            title: 'Mens',
            imageurl: require('../assets/images/HomeScreen/mens.png'),
        },
        {
            id: '5',
            title: 'Womens',
            imageurl: require('../assets/images/HomeScreen/womens.png'),
        },
        ];

  return (
    <View>
    <ScrollView  
    
    horizontal showsHorizontalScrollIndicator={false}>

        {catagories.map( ({id, title, imageurl}) => (
            <View style={styles.container} key={id}>
                <Image 
                source = {imageurl}
                style={styles.image}
                />
                <Text style={styles.title}>{title}</Text>
            </View>
        ))}

    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
    marginVertical:10,
    marginRight:27,

    
    },
    image:{
        width:52,
        height:58,
        resizeMode:'contain',
        
    },
    title:{},
})