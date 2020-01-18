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
        input1EndpointX:200,
        input1EndpointY:350,
        inputtap:false,
        inputColor:'black',
        input2StartpointX:200-30,
        input2StartpointY:350+45,
        input2EndpointX:200,
        input2EndpointY:350,
        input2tap:false,
        input2Color:'black',
        OutputStartpointX:200+85,
        OutputStartpointY:350+30,
        OutputEndpointX:200+85,
        OutputEndpointY:350+30,
        outputColor:'red',
                  outputtap:false,

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
  this.changeColor();
  this.gestureResponder = createResponder({
    onStartShouldSetResponder: (evt, gestureState) => true,
    onStartShouldSetResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetResponder: (evt, gestureState) => true,
    onMoveShouldSetResponderCapture: (evt, gestureState) => true,
    onResponderGrant: (evt, gestureState) => {},
    onResponderMove: (evt, gestureState) => {
    //   console.log('in grant')
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
        
        input2StartpointX:gestureState.moveX-30,
        input2StartpointY:gestureState.moveY+45,
        OutputStartpointX:gestureState.moveX+80,
        OutputStartpointY:gestureState.moveY+30,
        
                 
                       
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
      
    },
    onResponderTerminationRequest: (evt, gestureState) => true,
    onResponderRelease: (evt, gestureState) => {
      if(this.tapInput1){this.func()}
      this.changeColor()

    },
    onResponderTerminate: (evt, gestureState) => {},
    
    onResponderSingleTapConfirmed: (evt, gestureState) => {
      this.tapInput1=(this.tapInput1)? false:true;
      console.log('Nor gate Input1',this.tapInput1);
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
      if(this.tapInput2)
      {
       this.setState({
        input2EndpointX:gestureState.moveX,
        input2EndpointY:gestureState.moveY
       })
      }
      
    },
    onResponderTerminationRequest: (evt, gestureState) => true,
    onResponderRelease: (evt, gestureState) => {
      if(this.tapInput2){this.func2()}
      this.changeColor()

    },
    onResponderTerminate: (evt, gestureState) => {},
    
    onResponderSingleTapConfirmed: (evt, gestureState) => {
      this.tapInput2=(this.tapInput2)? false:true;
      console.log('Nor gate Input2',this.tapInput2);
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
      if(this.tapOutput)
      {
       this.setState({
      OutputEndpointX:gestureState.moveX,
      OutputEndpointY:gestureState.moveY
       })
      }
      
    },
    onResponderTerminationRequest: (evt, gestureState) => true,
    onResponderRelease: (evt, gestureState) => {
     

    },
    onResponderTerminate: (evt, gestureState) => {},
    
    onResponderSingleTapConfirmed: (evt, gestureState) => {
      this.tapOutput=(this.tapOutput)?false:true;
      console.log('Nor gate tapOutput',this.tapOutput);
    },
    
    moveThreshold: 2,
    debug: false
  });
}
func=()=>{
  console.log('infunc')
  if(this.tapInput1)
  {
    console.log('in input1')
    for (let i = 0; i <this.props.Inputs.length; i+=3) {
      
    this.a=this.props.Inputs[i];
    this.b=this.props.Inputs[i+1];
    this.c=this.state.input1EndpointX
    this.d=this.state.input2EndPointY;
    if((this.a-this.c<6 && this.a-this.c>-6)||(this.b-this.d<6 &&this.b-this.d>-6))
     {
      console.log('MAtched')
      this.setState({inputColor:this.props.Inputs[i+2]})
     }
     console.log(this.a,this.b,this.c,this.d,'for loop')
    }
          
      }
}
func2=()=>{
  
  console.log('infunc')
  if(this.tapInput2)
  {
    console.log('in input1')
    for (let i = 0; i <this.props.Inputs.length; i+=3) {
      
    this.a=this.props.Inputs[i];
    this.b=this.props.Inputs[i+1];
    this.c=this.state.input2EndpointX
    this.d=this.state.input2EndPointY;
    if((this.a-this.c<6 && this.a-this.c>-6)||(this.b-this.d<6 &&this.b-this.d>-6))
     {
      console.log('MAtched')
      this.setState({input2Color:this.props.Inputs[i+2]})
     }
     console.log(this.a,this.b,this.c,this.d,'for loop')
    }
          
      
}
}
changeColor=()=>{
this.col1=this.state.inputColor;
this.col2=this.state.input2Color;
if((this.col1=='black' && this.col2=='black'))
{
  this.setState({
    outputColor:'red'
  })
}
else{
  this.setState({
    outputColor:'black'
  })
}
}
inputConnection(){
 // console.log('in input Connection')
  if(this.tapInput1){
    return(
      <G>
        <Line x1={this.state.input1StartpointX} y1={this.state.input1StartpointY} x2={this.state.input1EndpointX} y2={this.state.input1EndpointY} stroke="red" strokeWidth="2"/>
      </G>

    )
  }
}
inputConnection2(){
  //console.log('in input Connection2')
  if(this.tapInput2){
    return(
      <G>
        <Line x1={this.state.input2StartpointX} y1={this.state.input2StartpointY} x2={this.state.input2EndpointX} y2={this.state.input2EndpointY} stroke="red" strokeWidth="2"/>
      </G>

    )
  }
}

outputConnection(){
  console.log('in output Connection Nor')
  console.log(this.tapOutput,'value is ')
  if(this.tapOutput){
    return(
      <G>
        <Line x1={this.state.OutputStartpointX} y1={this.state.OutputStartpointY} x2={this.state.OutputEndpointX} y2={this.state.OutputEndpointY} stroke="red" strokeWidth="2"/>
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
          <Circle cx={this.state.StartX-30} cy={this.state.StartY+15} r="11" fill={this.state.inputColor} />
          {this.inputConnection()}
          </G>
         
          <Circle cx={this.state.StartX+60} cy={this.state.StartY+30} r="7" fill="black" />
       
       <G {...this.gestureResponderInput2}>
          <Circle cx={this.state.StartX-30} cy={this.state.StartY+45} r="11" fill={this.state.input2Color} />
          </G>
          {this.inputConnection2()}
       <G {...this.gestureResponderOutput}>
          <Circle cx={this.state.StartX+85} cy={this.state.StartY+30} r="11" fill={this.state.outputColor} />
        
          </G>

          {this.outputConnection()}

         </G>   );
  }
}

export default NorGate;
