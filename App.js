import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/welcomeScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {AppTabNavigator} from './components/appTabNavigator';
import VegetableScreen from './screens/vegetables';
import FruitScreen from './screens/fruits';
import ContinueShoppingScreen from './screens/continueShopping';


export default class App extends React.Component {
  render(){
    return(
      
        <AppContainer/>
     
    )
  }
}
const SwitchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  BottomTab:{screen:AppTabNavigator},
  Vegetables:{screen:VegetableScreen},
  Fruits:{screen:FruitScreen},
  continueShopping:{screen:ContinueShoppingScreen},
  
})
const AppContainer=createAppContainer(SwitchNavigator);


