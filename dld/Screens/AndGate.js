import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
                      ].join(' '),
                      pathData2:
                      ["M",185+30,250, "Q",185+60,250+30,
                          185+30,250+60].join(' '),
            
                        inputpointX:185-30,
                        inputpointY:250+15,
                        inputendPointX:185-30,
                        inputendPointY:250+15,
                        inputtap:false,
                        input2pointX:185-30,
                        input2pointY:250+45,
                        input2endPointX:185-30,
                        input2endPointY:250+45,
                        input2tap:false,
                        
                      outputpointX:185+80,
                      outputpointY:250+30,
                      outputendPointX:185+80,
                      outputendPointY:250+3,
                      outputtap:false,
                }
this.tap=false;
  this.input1={
      color:'black',
      pointX:this.state.StartX-30,
      pointY:this.state.StartY+15,
      endPointX:0,
      endPointY:0,
      tap:false
  } 
  this.input2={
    color:'red',
    pointX:this.state.StartX,
    pointY:this.state.StartY,
    endPointX:0,
    endPointY:0,tap:false
}
this.output={
    color:'red',
    tap:false
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
      // console.log('in move')
        if(this.tap)
          {
            this.setState({
                StartX:gestureState.moveX,
                StartY:gestureState.moveY,
                pathData:["M",gestureState.moveX,gestureState.moveY,
                "L",gestureState.moveX,gestureState.moveY+60,
                "M",gestureState.moveX,gestureState.moveY+60,
                "L",gestureState.moveX+30,gestureState.moveY+60,
                "M",gestureState.moveX,gestureState.moveY,
                "L",gestureState.moveX+30,gestureState.moveY,
            ].join(' '),
            pathData2:
            ["M",gestureState.moveX+30,gestureState.moveY, "Q",gestureState.moveX+60,gestureState.moveY+30,
            gestureState.moveX+30,gestureState.moveY+60].join(' '),
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
        console.log("value of this.tap ",this.tap);
        console.log("singletapupconfirmed",gestureState.singleTapUp);
        
       //   console.log(gestureState.doubleTapUp,"double tap")
      },
      /*
      moveThreshold: 2,
      debug: false
      */
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
            console.log('start valye',this.state.inputpointX)
            console.log('end point',this.state.inputpointY)
            console.log("input1.endpointx",this.state.inputendPointX)
            console.log("input1.endpointY",this.state.inputendPointY)
            

      },
      onResponderTerminationRequest: (evt, gestureState) => true,
      onResponderRelease: (evt, gestureState) => {},
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
        this.input1.tap=this.state.inputtap;
       this.setState({
         inputtap:this.input1.tap?false:true
       })
        console.log('and gate input1',this.state.inputtap)
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
            console.log('start valye',this.state.input2pointX)
            console.log('end point',this.state.input2pointY)
            console.log("input2.endpointx",this.state.input2endPointX)
            console.log("input2.endpointY",this.state.input2endPointY)
            

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
            console.log('start valye',this.state.outputpointX)
            console.log('end point',this.state.outputpointY)
            console.log("output.endpointx",this.state.outputendPointX)
            console.log("output.endpointY",this.state.outputendPointY)
            

      },
      onResponderTerminationRequest: (evt, gestureState) => true,
      onResponderRelease: (evt, gestureState) => {},
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
        this.output.tap=this.state.outputtap;
       this.setState({
         outputtap:this.output.tap?false:true
       })
        console.log('and gate output',this.state.outputtap)
      },
      
      moveThreshold: 2,
      debug: false
    });
  }
  func=()=>{
        
    if((this.input1.color=='red')||(this.input2.color=='red'))
    {
      this.output.color='red';
    }
  }
  inputConnection=()=>{
    console.log('in input connection',this.state.inputtap)
    if(this.state.inputtap)
    {
      console.log('IN IFF')
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
      console.log('IN input2')
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
      console.log('IN Output')
      return(
        <G>
          
           <Line x1={this.state.outputpointX} y1={this.state.outputpointY} x2={this.state.outputendPointX} y2={this.state.outputendPointY} stroke="red" strokeWidth="2" />
        </G>
      )
    }
  }

  render() {
    return (
    <G >{this.func()}
        <G {...this.gestureResponder} >
          <Path d={this.state.pathData} stroke="black" strokeWidth="2"  fill='none'/>
          <Path d={this.state.pathData2} stroke="black" strokeWidth="2"  fill='none'/>
          
          </G>
          <Line x1={this.state.StartX-1} y1={this.state.StartY+15} x2={this.state.StartX-30} y2={this.state.StartY+15} stroke="red" strokeWidth="2" />
          <Line x1={this.state.StartX-1} y1={this.state.StartY+45} x2={this.state.StartX-30} y2={this.state.StartY+45} stroke="red" strokeWidth="2" />
          <Line x1={this.state.StartX+45} y1={this.state.StartY+30} x2={this.state.StartX+80} y2={this.state.StartY+30} stroke="red" strokeWidth="2" />
         
          <G {...this.gestureResponderInput1}>
                      <Circle cx={this.state.StartX-30} cy={this.state.StartY+15} r="12" fill={this.input1.color} />
    
                      </G>
                      <G {...this.gestureResponderInput2}>
          <Circle cx={this.state.StartX-30} cy={this.state.StartY+45} r="12" fill={this.input2.color} />
          </G>
          <G {...this.gestureResponderOutput}>
          <Circle cx={this.state.StartX+80} cy={this.state.StartY+30} r="12" fill={this.output.color} />
          </G>
          {this.inputConnection()}
          {this.inputConnection2()}
          {this.outputConnection()}
         </G>
    );
  }
}

export default AndGate;
