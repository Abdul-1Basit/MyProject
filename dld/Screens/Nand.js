import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Path,G,Svg,Line,Circle } from 'react-native-svg';
import {createResponder} from 'react-native-gesture-responder';
class NandGate extends Component {
  constructor(props) {
    super(props);
    this.state={
            StartX:50,
            StartY:250
    }
    this.startx=50;
    this.starty=50;
    this.pathData=["M",this.state.StartX,this.state.StartY,
    "L",this.state.StartX,this.state.StartY+60,
    "M",this.state.StartX,this.state.StartY+60,
    "L",this.state.StartX+30,this.state.StartY+60,
    "M",this.state.StartX,this.state.StartY,
    "L",this.state.StartX+30,this.state.StartY,
    "M",this.state.StartX+30,this.state.StartY, "Q",this.state.StartX+60,this.state.StartY+30,
this.state.StartX+30,this.state.StartY+60
    
    /* "M",this.startx,this.starty+15,
    "L",this.startx-30,this.starty+15,
    "M",this.startx,this.starty+45,
    "L",this.startx-30,this.starty+45,
   */
 /* 'M',this.state.StartX,this.state.StartY+60,
   'C',this.state.StartX+5,this.state.StartY+60,
   this.state.StartX+10,this.state.StartY+60,
   'M',this.state.StartX+10,this.state.StartY+60,
   'C',this.state.StartX+10,this.state.StartY+60,
   this.state.StartX+15,this.state.StartY+50,
   'M',this.state.StartX+30,this.state.StartY+30,
   
   'C',this.state.StartX+30,this.state.StartY+30,
   this.state.StartX+15,this.state.StartY+10,
   this.state.StartX+10,this.state.StartY,
   'M',this.state.StartX+5,this.state.StartY,
   'C',this.state.StartX+5,this.state.StartY,
   this.state.StartX,this.state.StartY,
*/

].join(' ');
this.pp2=[    "M",this.state.StartX+30,this.state.StartY, "Q",this.state.StartX+60,this.state.StartY+30,
this.state.StartX+30,this.state.StartY+60].join(' ');
  this.input1={
      color:'black',
      pointX:this.state.StartX,
      pointY:this.state.StartY,
  } 
  this.input2={
    color:'black',
    pointX:this.state.StartX,
    pointY:this.state.StartY,
}
this.output={
    color:'black',
    pointX:this.state.StartX,
    pointY:this.state.StartY,
}
}
componentWillMount() {
    this.gestureResponder = createResponder({
      onStartShouldSetResponder: (evt, gestureState) => true,
      onStartShouldSetResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetResponder: (evt, gestureState) => true,
      onMoveShouldSetResponderCapture: (evt, gestureState) => true,
      onResponderGrant: (evt, gestureState) => {},
      onResponderMove: (evt, gestureState) => {},
      onResponderTerminationRequest: (evt, gestureState) => true,
      onResponderRelease: (evt, gestureState) => {},
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
          console.log('tap')
          console.log(gestureState.singleTapUp)
       //   console.log(gestureState.doubleTapUp,"double tap")
      },
      
      moveThreshold: 2,
      debug: false
    });
  }

  render() {
    return (
    <G>
        <G {...this.gestureResponder} >
          <Path d={this.pathData} stroke="black" strokeWidth="2"  fill='none'/>
         </G>
          <Line x1={this.state.StartX-1} y1={this.state.StartY+15} x2={this.state.StartX-30} y2={this.state.StartY+15} stroke="red" strokeWidth="2" />
          <Line x1={this.state.StartX-1} y1={this.state.StartY+45} x2={this.state.StartX-30} y2={this.state.StartY+45} stroke="red" strokeWidth="2" />
          <Line x1={this.state.StartX+45} y1={this.state.StartY+30} x2={this.state.StartX+80} y2={this.state.StartY+30} stroke="red" strokeWidth="2" />
          <Circle cx={this.state.StartX-30} cy={this.state.StartY+15} r="10" fill={this.input1.color} />
         
          <Circle cx={this.state.StartX+50} cy={this.state.StartY+30} r="7" fill="black" />
          <Circle cx={this.state.StartX-30} cy={this.state.StartY+45} r="10" fill={this.input2.color} />
          <Circle cx={this.state.StartX+80} cy={this.state.StartY+30} r="10" fill={this.output.color} />
        
         </G>
    );
  }
}

export default NandGate;
