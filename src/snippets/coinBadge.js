import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import { Badge,Text, } from 'react-native-elements'




class coinBadge extends React.Component{
constructor(){
super();
}



  render(){
  return (
   <View style={{marginRight:30,flexDirection:'row'}}>
       <Text onPress={() => null}style={{fontSize:19,color:'white',marginRight:10}}>0 </Text>
   </View> 
  );
  };
}


export default coinBadge;
