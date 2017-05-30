import React, { Component } from 'react';
import {View,StyleSheet,StatusBar,AsyncStorage} from 'react-native';
import { Badge,Text,Icon } from 'react-native-elements';
import { MaterialDialog } from 'react-native-material-dialog';
import{NavigationActions} from 'react-navigation';
const styles = StyleSheet.create({

});


const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Login'})
  ]
})
class logoutIcon extends React.Component{

async logout() {
await AsyncStorage.clear();
this.props.navigation.dispatch(resetAction);
}


render(){
return (
<View>
<StatusBar backgroundColor="#03A9F4" barStyle="light-content" />
<Icon name='sign-out' type='font-awesome' color='#517fa4' onPress={() => this.logout()}size={30} raised underlayColor='transparent' style={{marginLeft:20}}/>
</View>
);
};
}

export default logoutIcon
