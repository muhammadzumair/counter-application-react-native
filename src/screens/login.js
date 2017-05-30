import React, { Component } from 'react';
import {StyleSheet,View,ScrollView,ActivityIndicator,Alert,StatusBar,Image,Animated,AsyncStorage} from 'react-native';
import {Button,Text,FormLabel, FormInput,Card} from 'react-native-elements'
import{NavigationActions} from 'react-navigation'
import {MaterialDialog} from 'react-native-material-dialog';


const styles = StyleSheet.create({
wrapper:{
flex:1,
flexDirection:'column',
},

loginWrapper:{
flex:1,
flexDirection:'column',
maxHeight:400,
height:350,
left:0,

},

footerWrapper:{
flex:1,
flexDirection:'column',
maxHeight:230,
alignItems:'center'
},

footerText:{
marginTop:5
} 
  
  
});

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Dashboard'})
  ]
})


class login extends React.Component{
constructor(){
  super();
   
}

async loginFnc(){
try {
await AsyncStorage.setItem('apiKey', '1');
this.props.navigation.dispatch(resetAction)
} catch (error) {
Alert.alert('Error','Please retry to login.'+error);
return;
}
}


 render(){
  return (
    <View style={styles.wrapper}>
      <ScrollView>
      <StatusBar backgroundColor="#E9E9EF" barStyle="light-content" />
      <View style={{alignItems:'center',marginTop:30}}>
       </View>
       <View style={styles.loginWrapper}>
          <Card title='Card 1' >
           <Button
           buttonStyle={{backgroundColor:'#429ef4',height:50, borderRadius:10,marginTop:30}}
           onPress={() => this.loginFnc()}
           title="dispatch(action)"/>
          </Card>
        </View>
         </ScrollView>
    </View>
  );
}
};

export default login
