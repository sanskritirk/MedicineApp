import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import AddDataScreen from './screens/AddDataScreen';
import SearchScreen from './screens/SearchScreen';
import {AppTabNavigator} from './components/AppTabNavigator';


export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}}

const switchNavigator = createSwitchNavigator({
  Splash:{screen:SplashScreen},
  Login:{screen:LoginScreen},
  SignUp:{screen:SignUpScreen},
  BottomTab:{screen:AppTabNavigator},
})

const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
