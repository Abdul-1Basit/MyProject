import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Svg,G,Line,Circle,Path} from 'react-native-svg';
import {createResponder} from 'react-native-gesture-responder';
import PracticeScreen from '../Folder/PracticeScreen'
class NorGate extends Component {
  constructor(props) {
    super(props);
    this.state={
      i:0,
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
                  setVisiblee:false,

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
  tap:false
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
this.previousXVal=200+85;
this.previousYVal=350+30;
}
componentWillMount() {
 // this.cc()
  this.props.firstlyAssign(this.previousXVal,this.previousYVal,this.state.outputColor);
 // this.changeColor();
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
    onResponderRelease: (evt, gestureState) => {
      if(this.tap){
        this.props.deleteOutput(this.previousXVal,this.previousYVal,this.state.outputColor,this.state.StartX+80,this.state.StartY+30);
        this.previousXVal=this.state.StartX+80;
        this.previousYVal=this.state.StartY+30;
      }
      if(gestureState.doubleTapUp){
        this.setState({
          setVisiblee:true
        }
        )
      }
    },
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
      if(this.state.inputtap)
      {
       this.setState({
        input1EndpointX:gestureState.moveX,
        input1EndpointY:gestureState.moveY
       })
      }
      
    },
    onResponderTerminationRequest: (evt, gestureState) => true,
    onResponderRelease: (evt, gestureState) => {
      if(this.state.inputtap){this.func()}
//      this.changeColor()

    },
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
        input2EndpointX:gestureState.moveX,
        input2EndpointY:gestureState.moveY
       })
      }
      
    },
    onResponderTerminationRequest: (evt, gestureState) => true,
    onResponderRelease: (evt, gestureState) => {
      if(this.state.input2tap){this.func2()}
      //this.changeColor()

    },
    onResponderTerminate: (evt, gestureState) => {},
    
    onResponderSingleTapConfirmed: (evt, gestureState) => {
      this.input2.tap=this.state.input2tap;
       this.setState({
         input2tap:this.input2.tap?false:true
       })
        console.log('and gate input1',this.state.input2tap)
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
  if(this.state.inputtap)
  {
    console.log('checking Input for NOr Gates input 1');
    
    this.inputByGates=this.props.GateOutputs;
    for (let i = 0; i <this.props.Inputs.length; i+=3) {
      
    this.a=this.props.Inputs[i];
    this.b=this.props.Inputs[i+1];
    this.c=this.state.input1EndpointX;
    this.d=this.state.input1EndpointY;
    if((this.a-this.c<11 && this.a-this.c>-11)&&(this.b-this.d<11&&this.b-this.d>-11))
     {
      console.log('MAtched')
      this.OCColor=(this.props.Inputs[i+2]=='black'&&this.state.input2Color=='black')?'red':'black'
      this.setState({inputColor:this.props.Inputs[i+2],
                    outputColor:this.OCColor})
      
      this.props.deleteOutput(this.previousXVal,this.previousYVal,this.OCColor,this.state.StartX+85,this.state.StartY+30);
      this.previousXVal=this.state.StartX+85;
      this.previousYVal=this.state.StartY+30;
      console.log('OCCOlor',this.OCColor,'output',this.state.outputColor)
      
      console.log('recieved vale ',this.props.Inputs[i+2],this.state.inputColor,this.state.input2Color,this.state.outputColor)
      return;
     }
    
    }
    for (let i = 0; i <this.inputByGates.length; i+=3) {
      
      this.a=this.inputByGates[i];
      this.b=this.inputByGates[i+1];
      this.c=this.state.input1EndpointX;
      this.d=this.state.input1EndpointY;
      if((this.a-this.c<11 && this.a-this.c>-11)&&(this.b-this.d<11&&this.b-this.d>-11))
       {
        console.log('MAtched with a gate outputtt')
        this.OCColor=(this.inputByGates[i+2]=='black'&&this.state.input2Color=='black')?'red':'black'
        this.setState({inputColor:this.inputByGates[i+2],
                      outputColor:this.OCColor})
        
        this.props.deleteOutput(this.previousXVal,this.previousYVal,this.OCColor,this.state.StartX+85,this.state.StartY+30);
        this.previousXVal=this.state.StartX+85;
        this.previousYVal=this.state.StartY+30;
        
        console.log('OCCOlor',this.OCColor,'output',this.state.outputColor)
        console.log('recieved vale ',this.inputByGates[i+2],this.state.inputColor,this.state.input2Color,this.state.outputColor)
   
        return;
       }
      
      }
          
  }
}
func2=()=>{
  if(this.state.input2tap)
  {
    console.log('checking Input for NOr Gates input 2');
    
    this.inputByGates=this.props.GateOutputs;
    for (let i = 0; i <this.props.Inputs.length; i+=3) {
      
    this.a=this.props.Inputs[i];
    this.b=this.props.Inputs[i+1];
    this.c=this.state.input2EndpointX;
    this.d=this.state.input2EndpointY;
    if((this.a-this.c<11 && this.a-this.c>-11)&&(this.b-this.d<11&&this.b-this.d>-11))
     {
      console.log('MAtched input 2')
      this.OCColor=(this.props.Inputs[i+2]=='black'&&this.state.inputColor=='black')?'red':'black'
      this.setState({input2Color:this.props.Inputs[i+2],
                    outputColor:this.OCColor})
      
      this.props.deleteOutput(this.previousXVal,this.previousYVal,this.OCColor,this.state.StartX+85,this.state.StartY+30);
      this.previousXVal=this.state.StartX+85;
      this.previousYVal=this.state.StartY+30;
      
      console.log('OCCOlor',this.OCColor,'output',this.state.outputColor)
      console.log('recieved vale ',this.props.Inputs[i+2],this.state.inputColor,this.state.input2Color,this.state.outputColor)
   
      return;
     }
    
    }
    for (let i = 0; i <this.inputByGates.length; i+=3) {
    
      this.a=this.inputByGates[i];
      this.b=this.inputByGates[i+1];
      this.c=this.state.input2EndpointX;
      this.d=this.state.input2EndpointY;
      if((this.a-this.c<11 && this.a-this.c>-11)&&(this.b-this.d<11&&this.b-this.d>-11))
       {
        console.log('MAtched input 2 with a gate outputtt')
        this.OCColor=(this.inputByGates[i+2]=='black'&&this.state.inputColor=='black')?'red':'black'
        this.setState({input2Color:this.inputByGates[i+2],
                      outputColor:this.OCColor})
        
        this.props.deleteOutput(this.previousXVal,this.previousYVal,this.OCColor,this.state.StartX+85,this.state.StartY+30);
        this.previousXVal=this.state.StartX+85;
        this.previousYVal=this.state.StartY+30;
        
        console.log('OCCOlor',this.OCColor,'output',this.state.outputColor)
        console.log('recieved vale ',this.inputByGates[i+2],this.state.inputColor,this.state.input2Color,this.state.outputColor)
   
        return;
       }
      
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
  if(this.state.inputtap){
    return(
      <G>
        <Line x1={this.state.input1StartpointX} y1={this.state.input1StartpointY} x2={this.state.input1EndpointX} y2={this.state.input1EndpointY} stroke="red" strokeWidth="2"/>
      </G>

    )
  }
}
inputConnection2(){
  //console.log('in input Connection2')
  if(this.state.input2tap){
    return(
      <G>
        <Line x1={this.state.input2StartpointX} y1={this.state.input2StartpointY} x2={this.state.input2EndpointX} y2={this.state.input2EndpointY} stroke="red" strokeWidth="2"/>
      </G>

    )
  }
}

outputConnection(){
  //console.log('in output Connection Nor')
  //console.log(this.tapOutput,'value is ')
  if(this.tapOutput){
    return(
      <G>
        <Line x1={this.state.OutputStartpointX} y1={this.state.OutputStartpointY} x2={this.state.OutputEndpointX} y2={this.state.OutputEndpointY} stroke="red" strokeWidth="2"/>
      </G>

    )
  }
}
dlt=()=>{
  
}
cc=()=>{setInterval(() => {
  console.log(this.state.i)
  this.func();
  this.func2();

this.o=this.state.i+5;
this.setState({
   i:this.o
})
//
}, 3000*this.state.i);
}
showMenu=()=>{
  if(this.state.setVisiblee){
   
    console.log('TRUEEEEEE')
     return(
       <G>
         <PracticeScreen X={this.state.startX} Y={this.state.startY} dltGate={this.dlt.bind(this)}/>
 
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
          <Circle cx={this.state.StartX-30} cy={this.state.StartY+15} r="12" fill={this.state.inputColor} />
          {this.inputConnection()}
          </G>
         
          <Circle cx={this.state.StartX+60} cy={this.state.StartY+30} r="7" fill="black" />
       
       <G {...this.gestureResponderInput2}>
          <Circle cx={this.state.StartX-30} cy={this.state.StartY+45} r="12" fill={this.state.input2Color} />
          </G>
          {this.inputConnection2()}
       <G {...this.gestureResponderOutput}>
          <Circle cx={this.state.StartX+85} cy={this.state.StartY+30} r="12" fill={this.state.outputColor} />
        
          </G>
      {this.showMenu()}
          {this.outputConnection()}

         </G>   );
  }
}

export default NorGate;
