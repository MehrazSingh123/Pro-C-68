import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

//Imported Screens
import fb from './screens/fb';
import ins from './screens/ins';

//Imported TabNavigation
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component {
  render() {
    return (
       <AppContainer/>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen: fb},
  Instagram: {screen: ins},
});

const AppContainer = createAppContainer(TabNavigator); 
