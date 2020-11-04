import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AddDataScreen from '../screens/AddDataScreen';
import SearchScreen from '../screens/SearchScreen';

export const AppTabNavigator = createBottomTabNavigator({
    Data:{
        screen:AddDataScreen,
        navigationOptions :{
            //tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
            tabBarLabel : "Add Medicine",
          }
    },
    Search:{
        screen:SearchScreen,
        navigationOptions :{
            //tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
            tabBarLabel : "Seacrh Medicine",
          }
    }
})