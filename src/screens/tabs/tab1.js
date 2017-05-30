import React, { Component } from 'react';
import { StyleSheet, Text,View,ScrollView,TouchableHighlight,Image,Linking,ToastAndroid} from 'react-native';
import {Card,Button} from 'react-native-elements'

class tab1 extends React.Component{
  constructor(props){
    super();
  }
 
  render(){
  return (
    <View style={{flex:1,flexDirection:'column',}}>
      <Card title='Card 1' >
         <Button 
           style={{justifyContent:'flex-start'}}
           buttonStyle={{backgroundColor:'#429ef4',height:50, borderRadius:3,marginLeft:5,marginTop:10}}
           containerViewStyle={{marginRight:0}}  
           title="Inc Coinbadge"
           onPress={() => null} />
       </Card>
    </View>
  );
};


}


export default tab1
