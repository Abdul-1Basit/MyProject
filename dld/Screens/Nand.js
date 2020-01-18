import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Path,G,Svg,Line,Circle } from 'react-native-svg';
import {createResponder} from 'react-native-gesture-responder';
class NandGate extends Component {
  constructor(props) {
    super(props);
    this.state={
            StartX:50,
            StartY:250,
            pathData:["M",50,250,
                      "L",50,250+60,
                      "M",50,250+60,
                      "L",50+30,250+60,
                      "M",50,250,
                      "L",50+30,250,
                      "M",50+30,250, "Q",50+60,250+30,  
                      50+30,250+60
                      ].join(' '),
                      inputpointX:50-30,
                      inputpointY:250+15,
                      inputendPointX:50-30,
                      inputendPointY:250+15,
                      inputtap:false,
                      input2pointX:50+50,
                      input2pointY:250+30,
                      input2endPointX:50+50,
                      input2endPointY:250+30,
                      input2tap:false,
                      
                    outputpointX:50+80,
                    outputpointY:250+30,
                    outputendPointX:50+80,
                    outputendPointY:250+3,
                    outputtap:false,
               }
               this.tap=false;
               this.input
  this.input1={
      color:'black',
      pointX:this.state.StartX,
      pointY:this.state.StartY,
      tap:false,
  } 
  this.input2={
    color:'black',
    pointX:this.state.StartX,
    pointY:this.state.StartY,
    tap:false
}
this.output={
    color:'black',
    pointX:this.state.StartX,
    pointY:this.state.StartY,
    tap:false
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
        if(this.tap){
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
                      ].join(' '),
                      inputpointX:gestureState.moveX-30,
                      inputpointY:gestureState.moveY+15,
                      input2pointX:gestureState.moveX-30,
                      input2pointY:gestureState.moveY+45,
                      outputpointX:gestureState.moveX+80,
                      outputpointY:gestureState.moveY+30,
          })
         
        }
      },
      onResponderTerminationRequest: (evt, gestureState) => true,
      onResponderRelease: (evt, gestureState) => {},
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
        
        this.tap=(this.tap)?false:true;
        console.log('Nand Gate ',this.tap)
        //   console.log(gestureState.doubleTapUp,"double tap")
      },
      
      moveThreshold: 2,
      debug: false
    });
    this.gestureResponderInput1= createResponder({
      onStartShouldSetResponder: (evt, gestureState) => true,
      onStartShouldSetResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetResponder: (evt, gestureState) => true,
      onMoveShouldSetResponderCapture: (evt, gestureState) => true,
      onResponderGrant: (evt, gestureState) => {},
      onResponderMove: (evt, gestureState) => {
            if(this.state.inputtap)
            {
              this.setState({
                inputendPointX:gestureState.moveX,
                inputendPointY:gestureState.moveY,
              })

            }
            

      },
      onResponderTerminationRequest: (evt, gestureState) => true,
      onResponderRelease: (evt, gestureState) => {},
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
        this.input1.tap=this.state.inputtap;
       this.setState({
         inputtap:this.input1.tap?false:true
       })
        console.log('Nand gate input1',this.state.inputtap)
      },
      
      moveThreshold: 2,
      debug: false
    });
    this.gestureResponderInput2= createResponder({
      onStartShouldSetResponder: (evt, gestureState) => true,
      onStartShouldSetResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetResponder: (evt, gestureState) => true,
      onMoveShouldSetResponderCapture: (evt, gestureState) => true,
      onResponderGrant: (evt, gestureState) => {},
      onResponderMove: (evt, gestureState) => {
            if(this.state.input2tap)
            {
              this.setState({
                input2endPointX:gestureState.moveX,
                input2endPointY:gestureState.moveY,
              })

            }
           

      },
      onResponderTerminationRequest: (evt, gestureState) => true,
      onResponderRelease: (evt, gestureState) => {},
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
        this.input2.tap=this.state.input2tap;
       this.setState({
         input2tap:this.input2.tap?false:true
       })
        console.log('and gate input21',this.state.input2tap)
      },
      
      moveThreshold: 2,
      debug: false
    });
    this.gestureResponderOutput= createResponder({
      onStartShouldSetResponder: (evt, gestureState) => true,
      onStartShouldSetResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetResponder: (evt, gestureState) => true,
      onMoveShouldSetResponderCapture: (evt, gestureState) => true,
      onResponderGrant: (evt, gestureState) => {},
      onResponderMove: (evt, gestureState) => {
            if(this.state.outputtap)
            {
              this.setState({
                outputendPointX:gestureState.moveX,
                outputendPointY:gestureState.moveY,
              })

            }
     
      },
      onResponderTerminationRequest: (evt, gestureState) => true,
      onResponderRelease: (evt, gestureState) => {},
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
        this.output.tap=this.state.outputtap;
       this.setState({
         outputtap:this.output.tap?false:true
       })
        console.log('Nand gate output',this.state.outputtap)
      },
      
      moveThreshold: 2,
      debug: false
    });
  }
  inputConnection=()=>{
    console.log('in input connection',this.state.inputtap)
    if(this.state.inputtap)
    {
      console.log('IN Nand Input line')
      return(
        <G>
          
           <Line x1={this.state.inputpointX} y1={this.state.inputpointY} x2={this.state.inputendPointX} y2={this.state.inputendPointY} stroke="red" strokeWidth="2" />
        </G>
      )
    }
  }
  inputConnection2=()=>{
    console.log('in input2 connection',this.state.input2tap)
    if(this.state.input2tap)
    {
      console.log('IN Nand input2 line')
      return(
        <G>
          
           <Line x1={this.state.input2pointX} y1={this.state.input2pointY} x2={this.state.input2endPointX} y2={this.state.input2endPointY} stroke="red" strokeWidth="2" />
        </G>
      )
    }
  }
  outputConnection=()=>{
    console.log('in output connection',this.state.outputtap)
    if(this.state.outputtap)
    {
      console.log('IN Nand Output')
      return(
        <G>
          
           <Line x1={this.state.outputpointX} y1={this.state.outputpointY} x2={this.state.outputendPointX} y2={this.state.outputendPointY} stroke="red" strokeWidth="2" />
        </G>
      )
    }
  }

  render() {
    return (
    <G>
        <G {...this.gestureResponder} >
          <Path d={this.state.pathData} stroke="black" strokeWidth="2"  fill='none'/>
        
          <Line x1={this.state.StartX-1} y1={this.state.StartY+15} x2={this.state.StartX-30} y2={this.state.StartY+15} stroke="red" strokeWidth="2" />
          <Line x1={this.state.StartX-1} y1={this.state.StartY+45} x2={this.state.StartX-30} y2={this.state.StartY+45} stroke="red" strokeWidth="2" />
          <Line x1={this.state.StartX+45} y1={this.state.StartY+30} x2={this.state.StartX+80} y2={this.state.StartY+30} stroke="red" strokeWidth="2" />
          </G>
          <G {...this.gestureResponderInput1}>
          <Circle cx={this.state.StartX-30} cy={this.state.StartY+15} r="10" fill={this.input1.color} />
          </G>
          {this.inputConnection()}
          <Circle cx={this.state.StartX+50} cy={this.state.StartY+30} r="7" fill="black" />
          <G {...this.gestureResponderInput2}>
          <Circle cx={this.state.StartX-30} cy={this.state.StartY+45} r="10" fill={this.input2.color} />
          </G>
          {this.inputConnection2()}
          <G {...this.gestureResponderOutput}>
          <Circle cx={this.state.StartX+80} cy={this.state.StartY+30} r="10" fill={this.output.color} />
          </G>
          {this.outputConnection()}
         </G>
    );
  }
}

export default NandGate;
