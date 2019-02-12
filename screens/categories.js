import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, FlatList, Image} from 'react-native';
import CategoryListItems from '../components/categoryListItems';


export default class Categories extends React.Component {

    static navigationOptions = {
        headerTitle:(<Image style={{width:100, height: 48, flex: 1}} resizeMode="contain" source={require('../images/logo1.png')}/>)
      };

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
      const {navigation} = this.props;
    const { categories } = this.state;
    return (
          <FlatList
            data={categories}
            renderItem={({ item }) => 
                <CategoryListItems 
                    category={item}
                    onPress={() => navigation.navigate('Category', {
                        categoryName: item.name
                    }
                    )}
                     />}
            keyExtractor={ item  => '${item.id}'}
            contentContainerStyle={styles.container}
          />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
});