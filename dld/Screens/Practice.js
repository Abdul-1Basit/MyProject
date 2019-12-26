import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';
  
import {createResponder} from 'react-native-gesture-responder';
  
  /* Use this if you are using Expo
  import * as Svg from 'react-native-svg';
  const { Circle, Rect } = Svg;
  */
  
  import React from 'react';
  import { View, StyleSheet } from 'react-native';
  
 class Practice extends React.Component {

  componentWillMount() {
    this.gestureResponder = createResponder({
      onStartShouldSetResponder: (evt, gestureState) => true,
      onStartShouldSetResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetResponder: (evt, gestureState) => true,
      onMoveShouldSetResponderCapture: (evt, gestureState) => true,
      onResponderGrant: (evt, gestureState) => {
        console.log('in grant')
      },
      onResponderMove: (evt, gestureState) => {
        console.log('in move')
      },
      onResponderTerminationRequest: (evt, gestureState) => true,
      onResponderRelease: (evt, gestureState) => {
        console.log('in release')
      },
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
        console.log('in Tapui')
      },
      
      moveThreshold: 2,
      debug: false
    });
  }
    render() {
      return (
    <G {...this.gestureResponder}>
            <Circle
              cx="50"
              cy="50"
              r="45"
              stroke="blue"
              strokeWidth="2.5"
              fill="green"
            />
            <Rect
              x="15"
              y="15"
              width="70"
              height="70"
              stroke="red"
              strokeWidth="2"
              fill="yellow"
            />
        </G>
      );
    }
  }
  export default  Practice;