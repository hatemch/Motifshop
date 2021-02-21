// Navigation/Navigations.js

import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation-stack'
import SignIn from '/home/hatem/Desktop/MotifShop/app/Components/SignIn'
import Registry from '../app/Components/Registry'
import HomePage from '../app/Components/HomePage'


const AppStackNavigator = createStackNavigator({

//  Login : SingnIn,
//  Register : Registry,
//  Home : HomePage

  Login: {
    screen: SingnIn,
    navigationOptions: {
      title: 'connect'
    }
  },
  Register: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
    screen: Registry
  },
  Home: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
    screen: HomePage
  }

})

export default createAppContainer(MotifShopTabNavigator)
