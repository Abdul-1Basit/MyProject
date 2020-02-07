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
import { TouchableOpacity } from 'react-native-gesture-handler';
  
 class DropDownItems extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      startingValueOfDropDown:150
    }
  }
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
      <G>
          <Rect
            x={60}
            y={this.props.yVal}
            width="100"
            height="10"
            stroke="grey"
            strokeWidth="3"
            fill="#FFFCFC"
          />
<Text x={160} y={this.props.yVal+24} stroke="black" fontSize="10"
    fontWeight="bold" fill="#33FFF7" textAnchor="middle">
      {this.props.gateName}
    </Text>
     
   
    </G> 
    
        </G>
      );
    }
  }
  export default  DropDownItems;