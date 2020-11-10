import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image,FlatList, ActivityIndicator,Linking} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import {MaterialIcons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
//import {FAB } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class SearchScreen extends React.Component{
constructor(){
  super()
  this.state = {
    medicine : [],
    isLoaded : false
  }
}


  componentDidMount(){
    this.getContacts()
  }

  getContacts(){
    var user = firebase.auth().currentUser
    db.collection('medicine_data').doc(user.uid)
    .collection('data')
    .get()
    .then(querySnapshot=>{

      const medicines = []
      querySnapshot.forEach(snapshot=>{
        medicines.push({
          id: snapshot.id,
          medicine_name:snapshot.data().medicine_name,
          expiry_date:snapshot.data().expiry_date,
          purpose:snapshot.data().purpose,
          quantity:snapshot.data().quantity
        })
        console.log(snapshot.data())
        console.log(snapshot.data().medicine_name)
        console.log(snapshot.data().expiry_date)
        console.log(snapshot.data().purpose)
        console.log(snapshot.data().quantity)
        
      })
      this.setState({
        isLoaded: true,
        medicine : medicines
      })
    })
  }
 
  render(){
    if(this.state.isLoaded){
    return(
      <View style = {styles.container}>
        <FlatList 
        data = {this.state.medicine}
        keyExtractor = {(item,index)=>item.id}
        renderItem={({item})=>{
          return(
            <View style = {{backgroundColor:'grey',marginTop:20,marginHorizontal:20,paddingVertical:10,borderRadius:8,flexDirection:'row',
            justifyContent: 'space-between'
            }}>
          <View>
          <Text style = {{fontSize:18,fontWeight: 'bold'}}>{item.medicine_name}</Text>
          <Text style = {{marginTop:5}}>{item.expiry_date}</Text>
          <Text style = {{marginTop:5}}>{item.purpose}</Text>
          <Text style = {{marginTop:5}}>{item.quantity}</Text>
          </View>
          <View style = {{flexDirection:'row'}}>
          <TouchableOpacity onPress={()=>{
           // alert(item.id)
           var user = firebase.auth().currentUser.uid
         db.collection('medicine_data')
         //console.log(user)
          .doc(user)
          .collection('data')
          .doc(item.id)
          .delete()

          //remove from state

          var medicines = this.state.medicine
          medicines = medicines.filter(c=>c.id !== item.id)

          this.setState({
            medicine : medicines
          })
          }}>
            <MaterialIcons 
            name = "delete"
            size = {28}
            color = "red"
            />

          </TouchableOpacity>
          
          <TouchableOpacity style = {{marginEnd:20}} onPress={()=>{
              var user = firebase.auth().currentUser.uid
            db.collection('medicine_data')
            //console.log(user)
             .doc(user)
             .collection('data')
             .doc(item.id).update({
                 'quantity': firebase.firestore.FieldValue.increment(1)
             })
          }}>
         <AntDesign name="pluscircle" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style = {{marginEnd:20}} onPress={()=>{
              var user = firebase.auth().currentUser.uid
            db.collection('medicine_data')
            //console.log(user)
             .doc(user)
             .collection('data')
             .doc(item.id).update({
                 'quantity': firebase.firestore.FieldValue.increment(-1)
             })
          }}>
         <AntDesign name="minuscircle" size={24} color="black" />
          </TouchableOpacity>

          </View>
          </View>
          
          )
        }}
        
        />
       
      
        
        <TouchableOpacity  style = {{position:'absolute', right:10,marginBottom:20}}
        onPress  = {()=>{
          firebase.auth().signOut()
          this.props.navigation.navigate('Login')
        }}>
          
          <MaterialCommunityIcons name="logout" size={24} color="black" />
        </TouchableOpacity>
        
      </View>
    )
      }
      else{
        return(
          <View style ={styles.container}>
            <ActivityIndicator size = 'large'/>

            <Text>Loading......</Text>
          </View>
        )
      }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  fab:{
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 16
  }
});