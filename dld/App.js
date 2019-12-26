import React, { Component } from 'react';
import { Platform, StyleSheet, Text,Image, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import NewCircuit from './Screens/NewCircuit'
import HomeScreen from './Screens/HomeScreen'
import Tutorials from './Screens/Tutorials'
import Practice from './Screens/Practice'
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  NewCircuit: {screen: NewCircuit},
  Tutorials:{screen: Tutorials},
  Practice:{screen:Practice}
});

const App = createAppContainer(MainNavigator);

export default App;

