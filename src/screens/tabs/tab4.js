import React, { Component } from 'react';
import {StyleSheet, Text,View,ScrollView, } from 'react-native';
import {Button,Card} from 'react-native-elements'


class tab4 extends React.Component{
  render(){
  return (
    <View>
      <Card title='Card 4' >
           <Button 
           style={{justifyContent:'flex-start'}}
           buttonStyle={{backgroundColor:'#429ef4',height:50, borderRadius:3,marginLeft:5,marginTop:10}}
           containerViewStyle={{marginRight:0}}  
           title="Dec Coinbadge"
           onPress={() => null} />
       </Card>
    </View>
  );
  };
}


export default tab4
