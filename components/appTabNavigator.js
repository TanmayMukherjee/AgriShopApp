import React from 'react';
import { Image } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ContinueShoppingScreen from '../screens/continueShopping';
import PlaceOrderScreen from '../screens/placeOrder';


export const AppTabNavigator = createBottomTabNavigator({
    ContinueShopping: {
        screen: ContinueShoppingScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/continueshopping.png")} style={{ width: 40, height: 30 }} />,
            tabBarLabel: "Continue Shopping",
        }
    },
    PlaceOrder: {
        screen: PlaceOrderScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/placeOrder.jpg")} style={{ width: 40, height: 30 }} />,
            tabBarLabel: "Place Order",
        }
    }
    
})
