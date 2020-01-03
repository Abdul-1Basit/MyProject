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
    <G >
            <Circle
              cx="69"
              cy="69"
              r="4"
              stroke="blue"
              strokeWidth="2"
              fill="green"
            />
                  <Line  x1={72.5} y1={72.5} x2={250} y2={250} stroke="black" strokeWidth="2"/>
          
        </G>
      );
    }
  }
  export default  Practice;