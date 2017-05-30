import React, { Component } from 'react';
import { StyleSheet, Text,View,ScrollView,TouchableHighlight,Image,Linking,ToastAndroid} from 'react-native';
import {Card,Button} from 'react-native-elements'


class tab3 extends React.Component{
  render(){
  return (
    <View>
      <Card title='Card 3' >
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


export default tab3
