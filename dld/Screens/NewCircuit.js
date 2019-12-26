import React, { Component } from 'react';
import { View, Animated,Text } from 'react-native';
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
class NewCircuit extends Component {
  
  render() {
    return (
      <Svg width='100%' height='100%'>
<G>
<XorGate/>
</G>
<G>
  <XnorGate/>
</G>
<G>
  <Nand/>
</G>
<G>
  <AndGate/>
</G>
<G>
  <OrGate/>
</G>
<G>
  <NotGate/>
</G>
<G>
  <Nor/>
</G>
</Svg>
    );
  }
}

export default NewCircuit;
