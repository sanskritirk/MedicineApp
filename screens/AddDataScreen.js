import * as React from 'react';
import {Text,View,TouchableOpacity,StyleSheet,TextInput,KeyboardAvoidingView,} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader';


export default class AddDataScreen extends React.Component{
    constructor(){
        super()
        this.state={
            medicineName:'',
            expiryDate:'',
            purpose:'',
            quantity:'',
        }
    }
    submitData=()=>{
        var user = firebase.auth().currentUser.uid
        db.collection('medicine_data').doc(user).collection('data').add({
            'medicine_name':this.state.medicineName,
            'expiry_date':this.state.expiryDate,
            'purpose':this.state.purpose,
            'quantity':this.state.quantity
        })
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
        this.props.navigation.navigate('Search')
    }
    render(){
        return(
            <View style = {{flex:1}}>
            <MyHeader title="ADD MEDICINE" navigation ={this.props.navigation}/>
            <KeyboardAvoidingView style={styles.keyBoardStyle}>
            <TextInput style = {styles.inputBox}
            placeholder = {'Medicine Name'}
            onChangeText={(text)=>{
                this.setState({
                    medicineName:text
                })
            }}
            value = {this.state.medicineName}/>
            <TextInput style = {styles.inputBox}
            placeholder = {'Expiry Date'}
            onChangeText={(text)=>{
                this.setState({
                    expiryDate:text
                })
            }}
            value={this.state.expiryDate}/>
            <TextInput style = {styles.inputBox}
            placeholder = {'Purpose'}
            multiline = {true}
            onChangeText={(text)=>{
                this.setState({
                    purpose:text
                })
            }}
            value = {this.state.purpose}
            />
            <TextInput style = {styles.inputBox}
            placeholder = {'Quantity'}
            multiline = {true}
            onChangeText={(text)=>{
                this.setState({
                    quantity:text
                })
            }}
            value = {this.state.quantity}
            />
            <TouchableOpacity style = {styles.button} onPress={()=>{this.submitData()}}>
            <Text style = {styles.buttonText}>ADD</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    keyBoardStyle:{
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
        marginBottom:RFValue(300),
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