import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class Category extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return { title: navigation.getParam('categoryName') };
    };

  render() {
    return (
      <View>
        <Text>con ga</Text>
      </View>
    );
  }
}

