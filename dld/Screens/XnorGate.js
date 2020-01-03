import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Svg,G,Line,Circle,Path} from 'react-native-svg';
import {createResponder} from 'react-native-gesture-responder';
class XnorGate extends Component {
  constructor(props) {
    super(props);
    this.state={
        StartX:150,
        StartY:150,
      pathData:["M",150,150,
                  "Q",150+15,150+30,
                  150,150+60,
                  "M",150,150+60,
                  "L",150+30,150+60,
                  "M",150,150,
                  "L",150+30,150,
                  "M",150+30,150, "Q",150+80,150+30,
                  150+30,150+60,

                  "M",150-5,150, "Q",150+10,150+30,
                  150-5,150+60
                  ].join(' ')
                }
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
this.tap=false;


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

          StartX:gestureState.moveX,
          StartY:gestureState.moveY,
          pathData:["M",gestureState.moveX,gestureState.moveY,
          "Q",gestureState.moveX+15,gestureState.moveY+30,
          gestureState.moveX,gestureState.moveY+60,
          "M",gestureState.moveX,gestureState.moveY+60,
          "L",gestureState.moveX+30,gestureState.moveY+60,
          "M",gestureState.moveX,gestureState.moveY,
          "L",gestureState.moveX+30,gestureState.moveY,
          "M",gestureState.moveX+30,gestureState.moveY, "Q",gestureState.moveX+80,gestureState.moveY+30,
          gestureState.moveX+30,gestureState.moveY+60,
          
          "M",gestureState.moveX-5,gestureState.moveY, "Q",gestureState.moveX+10,gestureState.moveY+30,
          gestureState.moveX-5,gestureState.moveY+60
          ].join(' ')
    
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
 // this.output.color=(this.input.color=='black')?'red':'black';
}

  render() {
    return (
        <G>
        <G {...this.gestureResponder} >
          <Path d={this.state.pathData} stroke="black" strokeWidth="2"  fill='none'/>
         
          <Line x1={this.state.StartX+6} y1={this.state.StartY+15} x2={this.state.StartX-30} y2={this.state.StartY+15} stroke="red" strokeWidth="2" />
          <Line x1={this.state.StartX+6} y1={this.state.StartY+45} x2={this.state.StartX-30} y2={this.state.StartY+45} stroke="red" strokeWidth="2" />
          <Line x1={this.state.StartX+55} y1={this.state.StartY+30} x2={this.state.StartX+85} y2={this.state.StartY+30} stroke="red" strokeWidth="2" />
          </G>
          <Circle cx={this.state.StartX-30} cy={this.state.StartY+15} r="10" fill={this.input1.color} />
          <Circle cx={this.state.StartX+60} cy={this.state.StartY+30} r="7" fill="black" />
         
          <Circle cx={this.state.StartX-30} cy={this.state.StartY+45} r="10" fill={this.input2.color} />
          <Circle cx={this.state.StartX+85} cy={this.state.StartY+30} r="10" fill={this.output.color} />
        
         </G>   );
  }
}

export default XnorGate;
