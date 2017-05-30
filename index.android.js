import React, { Component } from 'react';
import {
  AppRegistry,Text,Image,StyleSheet,View,AsyncStorage
} from 'react-native';
import {Badge,Button,Icon} from 'react-native-elements'
import Login from './src/screens/login'
import { StackNavigator,TabNavigator,DrawerNavigator,NavigationActions } from 'react-navigation';
import Tab1 from './src/screens/tabs/tab1';
import Tab2 from './src/screens/tabs/tab2';
import Tab3 from './src/screens/tabs/tab3';
import Tab4 from './src/screens/tabs/tab4';
import CoinBadge from './src/snippets/coinBadge';
import LogoutIcon from './src/snippets/logoutIcon';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Dashboard'})
  ]
})


class instagramfollowers extends Component {
static navigationOptions = {header: null};

async componentWillMount(){ 
const value = await AsyncStorage.getItem('apiKey'); //Check if apiKey is set or not
     if(value !== null){
        this.props.navigation.dispatch(resetAction);
   } 
}



 render(){
     return (
      <Login navigation={this.props.navigation}/>
     )
  }
}



//////////////////////////// NAVIGATION START ////////////////////////////
export const Maintabs = TabNavigator({
  getcoins: {
    screen: Tab1,

     navigationOptions:({ navigation,props }) => ({
      title:null,
      headerLeft: <LogoutIcon navigation={navigation} />,
      headerRight: <CoinBadge  /> ,
      headerStyle:{
      backgroundColor:'#03A9F4',
    },
      tabBarLabel: 'tab1',
      tabBarIcon: ({ tintColor }) => (
      <Image
      source={require('./img/fa-star.png')}
      style={[styles.icon, {tintColor: tintColor}]}
      />),
    }),
  },
  reedem: {
    screen: Tab2,
    navigationOptions:({ navigation }) => ({
      tabBarLabel: 'tab2',
      title:null,
      headerLeft:<LogoutIcon  navigation={navigation} />,
      headerRight:<CoinBadge />,
      headerStyle:{
      backgroundColor:'#03A9F4',
      },
      tabBarIcon: ({ tintColor }) => (
      <Image
      source={require('./img/fa-star.png')}
      style={[styles.icon, {tintColor: tintColor}]}
      />),
    }),
  },
   freecoins: {
    screen: Tab3,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'tab3 ',
      title:null,
      headerLeft:  <LogoutIcon navigation={navigation} />,
      headerRight:<CoinBadge/> ,
      headerStyle:{
      backgroundColor:'#03A9F4',
      },
      tabBarIcon: ({ tintColor }) => (
      <Image
      source={require('./img/fa-star.png')}
      style={[styles.icon, {tintColor: tintColor}]}
      />),
    }),
  },
   buycoins: {
    screen: Tab4,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'tab4',
      title:null,
      headerLeft: <LogoutIcon navigation={navigation}/>,
      headerRight:<CoinBadge/> ,
      headerStyle:{
      backgroundColor:'#03A9F4',
      },
      tabBarIcon: ({ tintColor }) => (
      <Image
      source={require('./img/fa-star.png')}
      style={[styles.icon, {tintColor: tintColor}]}
      />),
    }),
  },
},{
  tabBarPosition: 'bottom',
  tabBarOptions: {
     labelStyle: {
      fontSize: 9,
    },
    activeTintColor:'#2196F3',
    showIcon:true,
    inactiveTintColor:'#7abbef',
    activeBackgroundColor: 'blue',
    indicatorStyle: {
      borderBottomColor: '#2196F3',
      borderBottomWidth: 2,
    },style:{
      backgroundColor:'white',
      borderTopWidth: 2,
      borderTopColor: '#cecece',
    },
  },
},{
});
export const Root = StackNavigator({
  Login: { screen: instagramfollowers},
  Dashboard: {screen: Maintabs},
  },{}
);

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

class App extends Component {
  render() {
    const store = createStore(reducers, {}, compose(applyMiddleware(ReduxThunk)));
    
    return(
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
//////////////////////////// NAVIGATION END ////////////////////////////
AppRegistry.registerComponent('instagramfollowers', () => App);
