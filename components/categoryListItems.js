import React, { Component } from 'react'
import {
    View, Text, Image, StyleSheet
} from 'react-native'
import CardView from 'react-native-cardview'

export default function categoryListItems(props) {
    const { category } = props;
  
    return (
      <View >
        <CardView
            cardElevation= {8}
            cardMaxElevation= {10}
            conerRadius= {10}
            style={styles.CardviewStyle}
           
        >
            <Text style={styles.CategoryTitle}>{category.name}</Text>
            <Image source={require('../images/smartphone.png')} style={styles.image}></Image>
        </CardView>
      </View>
    )
  }


const styles = StyleSheet.create({
    
    Container: {
        backgroundColor: '#FFF'
    },

    CardviewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16
    },

    CategoryTitle: {
        color: '#000',
        fontSize: 18,
        fontWeight: '700',
        padding: 10
    },

    image: {
        width: 84,
        height: 84,
        marginBottom: 16
    }
})


