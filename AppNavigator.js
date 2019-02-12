import React from 'react';
import {createStackNavigator} from 'react-navigation';

import Category from './screens/category';
import Categories from './screens/categories';

const AppNavigator = createStackNavigator({
    Categories: {
      screen: Categories
      
    },

    Category: {
        screen: Category
        
      }
  });

  export default AppNavigator;