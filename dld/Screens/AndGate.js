import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Path,G,Svg,Line,Circle } from 'react-native-svg';
import {createResponder} from 'react-native-gesture-responder';
class AndGate extends Component {
  constructor(props) {
    super(props);
    this.state={
            StartX:185,
            StartY:250,
            pathData:["M",185,250,
    "L",185,250+60,
    "M",185,250+60,
    "L",185+30,250+60,
    "M",185,250,
    "L",185+30,250,
    "M",185+30,250, "Q",185+60,250+30,
185+30,250+60
    ].join(' ')
    }
this.pp2=[    "M",this.state.StartX+30,this.state.StartY, "Q",this.state.StartX+60,this.state.StartY+30,
this.state.StartX+30,this.state.StartY+60].join(' ');
this.tap=false;
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
      onResponderMove: (evt, gestureState) => {
       console.log('in move')
        if(this.tap)
          {
              
            console.log('in if')
            this.setState({
                StartX:gestureState.moveX,
                StartY:gestureState.moveY,
                pathData:["M",gestureState.moveX,gestureState.moveY,
                "L",gestureState.moveX,gestureState.moveY+60,
                "M",gestureState.moveX,gestureState.moveY+60,
                "L",gestureState.moveX+30,gestureState.moveY+60,
                "M",gestureState.moveX,gestureState.moveY,
                "L",gestureState.moveX+30,gestureState.moveY,
                "M",gestureState.moveX+30,gestureState.moveY, "Q",gestureState.moveX+60,gestureState.moveY+30,
                gestureState.moveX+30,gestureState.moveY+60
            ].join(' ')
          
              })
          }
      },
      onResponderTerminationRequest: (evt, gestureState) => true,
      onResponderRelease: (evt, gestureState) => {},
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {

        this.tap=(this.tap)?false:true;
        console.log(this.tap);
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
          <Path d={this.state.pathData} stroke="black" strokeWidth="2"  fill='none'/>
         </G>
          <Line x1={this.state.StartX-1} y1={this.state.StartY+15} x2={this.state.StartX-30} y2={this.state.StartY+15} stroke="red" strokeWidth="2" />
          <Line x1={this.state.StartX-1} y1={this.state.StartY+45} x2={this.state.StartX-30} y2={this.state.StartY+45} stroke="red" strokeWidth="2" />
          <Line x1={this.state.StartX+45} y1={this.state.StartY+30} x2={this.state.StartX+80} y2={this.state.StartY+30} stroke="red" strokeWidth="2" />
          <Circle cx={this.state.StartX-30} cy={this.state.StartY+15} r="10" fill={this.input1.color} />
         
          <Circle cx={this.state.StartX-30} cy={this.state.StartY+45} r="10" fill={this.input2.color} />
          <Circle cx={this.state.StartX+80} cy={this.state.StartY+30} r="10" fill={this.output.color} />
        
         </G>
    );
  }
}

export default AndGate;
