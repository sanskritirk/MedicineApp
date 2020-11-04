import * as React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {Header,Icon,Badge} from 'react-native-elements';
import db from '../config';

export default class MyHeader extends React.Component{
    cons
    render(){
        return(
            <View style ={{flex:1}}>
            <Header 
            centerComponent={{text:this.props.title , style: { color: 'white', fontSize:20,fontWeight:"bold"}}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:0
    }
})