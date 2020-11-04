import * as  React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity,Alert} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import {RFValue} from 'react-native-responsive-fontsize';

export default class SignUpScreen extends React.Component{
    constructor(){
        super()
        this.state={
            emailId:'',
            password:'',
            confirmPassword:''
        }
    }
    userSignUp=(emailId,password,confirmPassword)=>{
        if (password !== confirmPassword){
            return Alert.alert('Password Dosent Match')
        }
        else{
            firebase.auth().createUserWithEmailAndPassword(emailId,password)
            .then(response=>{
                return Alert.alert('User Added Successfully')
            })
            .catch(error=>{
                var errorCode = error.code
                var errorMessage = error.message
                return Alert.alert(errorMessage)
            })
        }

    }
    render(){
        return(
            <View style = {styles.container}>
            <TextInput style = {styles.inputBox}
            placeholder = {'Email Id'}
            keyboardType = 'email-address'
            onChangeText={(text)=>{
                  this.setState({
                      emailId:text
                  })
            }}/>
            <TextInput style = {styles.inputBox}
            placeholder = {'Password'}
            secureTextEntry
            onChangeText={(text)=>{
                  this.setState({
                      password:text
                  })
            }}/>
            <TextInput style = {styles.inputBox}
            placeholder = {'Confirm Password'}
            secureTextEntry
            onChangeText={(text)=>{
                  this.setState({
                      confirmPassword:text
                  })
            }}/>
            <TouchableOpacity style ={styles.button} onPress = {()=>{
                this.userSignUp(this.state.emailId,this.state.password,this.state.confirmPassword)
                this.props.navigation.navigate('Login')}}>
            <Text style = {styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button: {
        backgroundColor:'#89c4f4',
        width: "80%",
        height: RFValue(50),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(25),
        
        shadowColor: "#000",
        marginBottom:RFValue(10),
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
      },
})