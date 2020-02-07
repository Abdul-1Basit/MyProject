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
  import { View, StyleSheet,Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropDownItems from '../DropDownItems/DropDownItems';
  
 class SmallDropDown extends React.Component {
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
  showArrow=()=>{
    if(this.props.tra){
      return(
        <G> 
               <Line  x1={200} y1={40} x2={220} y2={50} stroke="black" strokeWidth="2"/>
               <Line  x1={220} y1={50} x2={240} y2={40} stroke="black" strokeWidth="2"/>
   
               
        </G>
      )
    }
  }
    render() {
      return (<G>
          <Rect
            x={this.props.xVal}
            y={this.props.yVal}
            width="100"
            height="20"
            stroke="black"
            strokeWidth="3"
            fill="#D9F4F9"
          />
<Text x={this.props.xVal+40} y={this.props.yVal+15} stroke="black" fontSize="15"
    fontWeight="bold" fill="#0792A7" textAnchor="middle">
      {this.props.gateName}
    </Text>
     
  
   
    </G> 
        
      );
    }
  }
  export default  SmallDropDown;