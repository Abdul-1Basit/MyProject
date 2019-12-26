import React, { Component } from 'react';
import { View, Text,Animated } from 'react-native';
import {Svg,Path,Circle,G,Line,Defs} from 'react-native-svg';
import {createResponder} from 'react-native-gesture-responder';

class NotGate extends Component {
  constructor(props) {
    super(props);
      this.state={
            startX:170,
            startY:70,
            pathData:["M",170,70,
            "L",170,70+30*2,
            "L",170+15*2,70+15*2,
            "L",170,70,
             "M",170-15*2,70+15*2,
             "L",170,70+15*2,
            ].join(" "),     
      }
    this.StartPointX=this.state.startX;
      this.StartPointY=this.state.startY;
this.tap=false;
this.input={
        color:'black'
      }
this.output={
        color:'red'
      }
}
componentWillMount() {
  
  this.gestureResponder = createResponder({
    onStartShouldSetResponder: (evt, gestureState) => true,
    onStartShouldSetResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetResponder: (evt, gestureState) => true,
    onMoveShouldSetResponderCapture: (evt, gestureState) => true,
    onResponderGrant: (evt, gestureState) => {
},
    onResponderMove: (evt, gestureState) => {
     
      if(this.tap){
        this.setState({

          startX:gestureState.moveX,
          startY:gestureState.moveY,
          pathData:["M",gestureState.moveX,gestureState.moveY,
"L",gestureState.moveX,gestureState.moveY+30*2,
"L",gestureState.moveX+15*2,gestureState.moveY+15*2,
"L",gestureState.moveX,gestureState.moveY,
 "M",gestureState.moveX-15*2,gestureState.moveY+15*2,
 "L",gestureState.moveX,gestureState.moveY+15*2,
].join(" ")
    
        })
      }
    },
    onResponderTerminationRequest: (evt, gestureState) => true,
    onResponderRelease: (evt, gestureState) => {
    },
    onResponderTerminate: (evt, gestureState) => {},
    
    onResponderSingleTapConfirmed: (evt, gestureState) => {
    

      this.tap=(this.tap)?false:true;
      console.log(this.tap);
    },
    /*
    moveThreshold: 2,
    debug: false
  */
  });
  this.output.color=(this.input.color=='black')?'red':'black';
}


  render() {
    return (
     <G {...this.gestureResponder}>
   <G > 
       <Path d={this.state.pathData}
                strokeWidth="3"/>
                <Line  x1={this.state.startX-10*2} y1={this.state.startY+15*2} x2={this.state.startX} y2={this.state.startY+15*2} stroke="black" strokeWidth="2"/>
                <Line  x1={this.state.startX+15*2} y1={this.state.startY+15*2} x2={this.state.startX+12*4} y2={this.state.startY+15*2} stroke="black" strokeWidth="2"/>
                </G>
                  <Circle cx={this.state.startX-10*2} cy={this.state.startY+15*2} r="11" fill={this.input.color} />
         
          <Circle cx={this.state.startX+17*2} cy={this.state.startY+15*2} r="5" fill="black" />
          <Circle cx={this.state.startX+13*4} cy={this.state.startY+15*2} r="11" fill={this.output.color} />
</G>
      );
  }
}

export default NotGate;
