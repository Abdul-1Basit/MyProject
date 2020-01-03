import React, { Component } from 'react';
import { View, Animated,StatusBar,Modal ,Button} from 'react-native';
import {Svg,G} from 'react-native-svg';
import NotGate from './NotGate';
import Practice from './Practice'
import Nand from './Nand'
import XorGate from './XorGate'
import Nor from './Nor'
import XnorGate from './XnorGate'
import AndGate from './AndGate';
import OrGate from './OrGate';
import {createResponder} from 'react-native-gesture-responder';

import { AppLoading } from 'expo';
import { Container, Header, Title, Content, Icon, Left, Body, Text ,Right} from "native-base";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import NorGate from './Nor';
import OnInput from './OnInput'
import Offtput from './OffInput'

import Output from './Output'
const component1 = () => <G><OrGate/></G>
  const component2 = () => <G><NotGate/></G>
  const component3 = () => <G><Nand/></G>


class NewCircuit extends Component {
  constructor(props) {
    super(props);
    this.state = {

      isReady: false,
      visibility:false,
      OninputX:0,
      OninputY:0,
      OffinputX:0,
      OffinputY:0,
      OutputX:0,
      OutputY:0,
      OutputCol:'',
    };
    this.tp;
  }
  assignOnInputLocation=(a,b)=>{
   
   
    this.setState({
      OninputX:a.toFixed(2),
      OninputY:b.toFixed(2),
    })
    console.log('recieved value',a,' ',b)
  
    console.log('after changing inputvaluess',this.state.OninputX,' ',this.state.OninputY)
 
  }
  assignOutputLocation=(a,b,c)=>{
    this.setState({
      OutputX:a,
      OutputY:b,
      OutputCol:c
    })
  }
  render() {/*
    if (!this.state.isReady) {
      return <AppLoading />;
    }
*/
    return (<Animated.View>
      <Svg width='100%' height='100%'>

            <G>
              <Nor/>
              <XnorGate/>
              <AndGate/>
              <OrGate/>
              <NotGate/>
              <XorGate/>
              <Nand/>
        
       <XorGate/>
       </G>
  </Svg>
</Animated.View>
    );
  }
}

export default NewCircuit;
