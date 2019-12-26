import React, { Component } from 'react';
import { View, Animated,Text } from 'react-native';
import {Svg,G} from 'react-native-svg';
import NotGate from './NotGate';
import Practice from './Practice'
class NewCircuit extends Component {
  
  render() {
    return (
<Svg height="100%" width="100%">
      <G>
      </G>
      <G>
        <NotGate/>
      </G>
      </Svg>
    );
  }
}

export default NewCircuit;
