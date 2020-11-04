import * as React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity, Alert} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader';

export default class LoginScreen extends React.Component{
    constructor(){
        super()
        this.state={
            emailId:'',
            password:'',
        }
    }
    userLogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then(response=>{
            return Alert.alert('Successfully Logged In')
        })
        .catch(error=>{
            var errorCode = error.code
            var errorMessage = error.message
            return Alert.alert(errorMessage)
        })
    }
    render(){
        return(
            <View style = {{flex:1}}>
            <MyHeader title="LOGIN" navigation ={this.props.navigation}/>            
            <View style = {styles.container}>
            <TextInput 
            style = {styles.inputBox}
            placeholder = {'Email Id'}
            keyboardType = 'email-address'
            onChangeText={(text)=>{
                this.setState({
                    emailId:text
                })
            }}/>
            <TextInput 
            style = {styles.inputBox}
            placeholder = {'Password'}
            secureTextEntry = {true}
            onChangeText={(text)=>{
                this.setState({
                    password:text
                })
            }}/>
            <TouchableOpacity style = {styles.button} onPress = {()=>{
                this.userLogin(this.state.emailId,this.state.password)
                this.props.navigation.navigate('Data')
            }}>
            <Text style ={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress = {()=>{
                this.props.navigation.navigate('SignUp')
            }}>
            <Text style ={styles.buttonText}>New User? Register Here</Text>
            </TouchableOpacity>
            </View>
            </View>
        )
 
    }
   
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    button: {
        backgroundColor:'#89c4f4',
        width: "80%",
        height: RFValue(50),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(25),
        
        shadowColor: "#000",
        marginBottom:RFValue(20),
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16,
      },
      buttonText: {
        color: "#32867d",
        fontWeight: "bold",
        fontSize: RFValue(20),
      },
      inputBox: {
        width: "80%",
        height: RFValue(50),
        borderWidth: 1.5,
        borderColor: "#ffffff",
        fontSize: RFValue(20),
        paddingLeft: RFValue(10),
        marginBottom:RFValue(15),
        justifyContent:'center',
        alignItems:'center'
      },
      inputView:{
        flexDirection:'row',
        margin:30,
      }

})