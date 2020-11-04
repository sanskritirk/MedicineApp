import * as React from 'react';
import {Text,View,StyleSheet,TextInput,FlatList, ActivityIndicator} from 'react-native';
import {ListItem} from 'react-native-elements';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';

export default class SearchScreen extends React.Component{
    constructor(){
        super()
        this.state={
            medicine:[],
            isLoaded:false,
        }
    }
    searchMedicines=()=>{
        var user = firebase.auth().currentUser
        db.collection('medicine_data').doc(user.uid).collection('data').get()
        .then(snapshot=>{
            const medicines = []
            snapshot.forEach(doc=>{
                medicines.push({
                    id:doc.id,
                    medicine_name:doc.data().medicine_name,
                    expiry_date:doc.data().expiry_date,
                    quantity:doc.data().quantity,
                    purpose:doc.data().purpose,
                })
                console.log(doc.data())
                console.log(doc.data().medicine_name)
                console.log(doc.data().expiry_date)
                console.log(doc.data().quantity)
                console.log(doc.data().purpose)
            })
        })
        this.setState({
            isLoaded:true,
            medicine:medicines,
        })
        
    }
    componentDidMount(){
        this.searchMedicines()
    }
    render(){      
        if(this.state.isLoaded){
        return(
            <View style = {styles.container}>
                 <FlatList data = {this.state.medicine}
                keyExtractor = {(item,i)=>item.id}
                renderItem = {({item})=>{
                    return(
                    <View style = {{marginTop:20,marginHorizontal:20,paddingVertical:8}}>
                    <View>
                    <Text style = {{fontSize:80,fontWeight:'bold'}}>{item.medicine_name}</Text>
                    <Text style = {{fontWeight:'bold',marginTop:5}}>{item.expiry_date}</Text>
                    <Text style = {{fontWeight:'bold',marginTop:5}}>{item.quantity}</Text>
                    <Text style = {{fontWeight:'bold',marginTop:5}}>{item.purpose}</Text>
                    </View>
                    </View>
                    )
                }}/>
            <MyHeader title="SEARCH" navigation ={this.props.navigation}/>
            </View>
        )
        }
        else{
            return(
                <View style = {styles.container}>
                <ActivityIndicator size = 'large'/>

                </View>
            )
        }
        
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
})