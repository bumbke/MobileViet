/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import CategoryListItems from './components/categoryListItems';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {id: 1, name: 'ĐIỆN THOẠI'},
        {id: 2, name: 'TABLET'},
        {id: 3, name: 'LAPTOP'},
        {id: 4, name: 'PHỤ KIỆN'}
      ]
    };
  }

  render() {
    const {categories} = this.state;
    return (
      <View>
          <FlatList data={categories}
              renderItem={({ item }) => <CategoryListItems category={item} />}
              keyExtractor={ item  => '${item.id}'}
              contentContainerStyle={{paddingLeft: 16, paddingRight: 16}}
          />
        
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
