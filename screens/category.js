import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class Category extends Component<Props> {

  render() {
    const {categories} = this.state;
    return (
      <View>
        category
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#FFF',
    paddingLeft: 16,
    paddingRight: 16
  },
});