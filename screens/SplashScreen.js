import * as React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

var logo = require('../assets/MedicineLogo.jpg')
export default class SplashScreen extends React.Component{
    constructor(props){
        super(props)
        setTimeout(()=>{
            this.props.navigation.navigate('Login')
        },5000)
    }
    render(){
        return(
            <View style = {styles.container}>
            <Text style = {styles.text}>Medicine Organiser</Text>
            <Image source = {logo}
            style = {{width:400,height:400}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#52b3d9',
    },
    text:{
        color: "white",
        fontWeight: "bold",
        fontSize: RFValue(20),
    }
})