import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Svg,G,Line,Circle,Path} from 'react-native-svg';
import {createResponder} from 'react-native-gesture-responder';
class NorGate extends Component {
  constructor(props) {
    super(props);
    this.state={
        StartX:200,
        StartY:350,
        pathData:["M",200,350,
                  "Q",200+15,350+30,
                  200,350+60,
                  "M",200,350+60,
                  "L",200+30,350+60,
                  "M",200,350,
                  "L",200+30,350,
                  "M",200+30,350, "Q",200+80,350+30,
                  200+30,350+60
                  ].join(' '),
        input1StartpointX:200-30,
        input1StartpointY:350+15,
        input1EndpointX:0,
        input1EndpointY:0


}
this.tap=false;
this.tapInput1=false;
this.tapInput2=false;
this.tapOutput=false;
this.input1={
  color:'black',
  pointX:this.state.StartX-30,
  pointY:this.state.StartY+15,
  endPointX:0,
  endPointY:0,
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
  //      console.log('in grant')
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
                      gestureState.moveX+30,gestureState.moveY+60
                      ].join(' '),
                      
        input1StartpointX:gestureState.moveX-30,
        input1StartpointY:gestureState.moveY+15,
                 
                       
                    })
                        }
  },
    onResponderTerminationRequest: (evt, gestureState) => true,
    onResponderRelease: (evt, gestureState) => {},
    onResponderTerminate: (evt, gestureState) => {},
    
    onResponderSingleTapConfirmed: (evt, gestureState) => {
      this.tap=(this.tap)?false:true;
      console.log('value of Nor Gate ',this.tap);
    },
    
    moveThreshold: 2,
    debug: false
  });
  this.gestureResponderInput1 = createResponder({
    onStartShouldSetResponder: (evt, gestureState) => true,
    onStartShouldSetResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetResponder: (evt, gestureState) => true,
    onMoveShouldSetResponderCapture: (evt, gestureState) => true,
    onResponderGrant: (evt, gestureState) => {},
    onResponderMove: (evt, gestureState) => {
      if(this.tapInput1)
      {
       this.setState({
        input1EndpointX:gestureState.moveX,
        input1EndpointY:gestureState.moveY
       })
      }
      console.log('gesturestate values',gestureState.moveX)
      console.log('gesturestate values',gestureState.moveY)
      
      console.log('input start value',this.input1.pointX)
      
      console.log('input start value',this.input1.pointY)
      console.log('input endpoint X',this.state.input1EndpointX)
      console.log('input endpoint Y',this.state.input1EndpointY)
      
    },
    onResponderTerminationRequest: (evt, gestureState) => true,
    onResponderRelease: (evt, gestureState) => {
     

    },
    onResponderTerminate: (evt, gestureState) => {},
    
    onResponderSingleTapConfirmed: (evt, gestureState) => {
      this.tapInput1=(this.tapInput1)? false:true;
      console.log('Nor gate Input1',this.tapInput1);
    },
    
    moveThreshold: 2,
    debug: false
  });
}
inputConnection(){
  console.log('in input Connection')
  if(this.tapInput1){
    return(
      <G>
        <Line x1={this.state.input1StartpointX} y1={this.state.input1StartpointY} x2={this.state.input1EndpointX} y2={this.state.input1StartpointY} stroke="red" strokeWidth="2"/>
      </G>

    )
  }
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
         
         <G {...this.gestureResponderInput1}>
          <Circle cx={this.state.StartX-30} cy={this.state.StartY+15} r="11" fill={this.input1.color} />
          {this.inputConnection()}
          </G>
          <Circle cx={this.state.StartX+60} cy={this.state.StartY+30} r="7" fill="black" />
        
          <Circle cx={this.state.StartX-30} cy={this.state.StartY+45} r="11" fill={this.input2.color} />
          <Circle cx={this.state.StartX+85} cy={this.state.StartY+30} r="11" fill={this.output.color} />
        
          
         </G>   );
  }
}

export default NorGate;
