import React, { Component } from 'react';
import { View,  TouchableOpacity } from 'react-native';
import { Path,G,Text,Svg,Line,Circle } from 'react-native-svg';
import {createResponder} from 'react-native-gesture-responder';
class DFlipFlop extends Component {
  constructor(props) {
    super(props);
    this.state={
             i:0,
            StartX:185,
            StartY:250,
            pathData:["M",185,250,
                      "L",185+50,250,
                      "L",185+50,250+50,
                      "L",185,250+50,
                      "L",185,250,
                      ].join(' '),
    
                        inputpointX:185-15,
                        inputpointY:250+15,
                        inputendPointX:185-15,
                        inputendPointY:250+15,
                        inputtap:false,
                        inputColor:'black',
                        input2pointX:185-15,
                        input2pointY:250+45,
                        input2endPointX:185-15,
                        input2endPointY:250+45,
                        input2tap:false,
                        input2Color:'black',
                        
                      outputpointX:185+67,
                      outputpointY:250+15,
                      outputendPointX:185+67,
                      outputendPointY:250+15,
                      outputtap:false,
                      outputColor:'black'
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

this.previousXVal=185+67;
this.previousYVal=250+15;
}
componentWillMount() {
    this.clockCycle();
    
  
  this.props.firstlyAssign(this.previousXVal,this.previousYVal,this.state.outputColor);
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
                "L",gestureState.moveX+50,gestureState.moveY,
                "L",gestureState.moveX+50,gestureState.moveY+50,
                "L",gestureState.moveX,gestureState.moveY+50,
                "L",gestureState.moveX,gestureState.moveY,
            ].join(' '),
         
            inputpointX:gestureState.moveX-15,
            inputpointY:gestureState.moveY+15,
            input2pointX:gestureState.moveX-15,
            input2pointY:gestureState.moveY+45,
            outputpointX:gestureState.moveX+67,
            outputpointY:gestureState.moveY+15,
          
              })
          }
      },
      onResponderTerminationRequest: (evt, gestureState) => true,
      onResponderRelease: (evt, gestureState) => {
      //  this.changeOutput()
      if(this.tap){
        this.props.deleteOutput(this.previousXVal,this.previousYVal,this.state.outputColor,this.state.StartX+67,this.state.StartY+15);
        this.previousXVal=this.state.StartX+67;
        this.previousYVal=this.state.StartY+15;
     
      }
      },
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
        //  console.log(this.state.inputendPointX)
        }
            

      },
      onResponderTerminationRequest: (evt, gestureState) => true,
      onResponderRelease: (evt, gestureState) => {
      
  if(this.state.inputtap){
    this.func()
  }
  //this.changeOutput()
      
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
                input2endPointX:gestureState.moveX,
                input2endPointY:gestureState.moveY,
              })

            }
      //      console.log('start valye',this.state.input2pointX)
        //    console.log('end point',this.state.input2pointY)
         //   console.log("input2.endpointx",this.state.input2endPointX)
          //  console.log("input2.endpointY",this.state.input2endPointY)
            

      },
      onResponderTerminationRequest: (evt, gestureState) => true,
      onResponderRelease: (evt, gestureState) => {
            
  if(this.state.input2tap){this.func2()}
     },
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
      onResponderRelease: (evt, gestureState) => {
        this.changeOutput()
      },
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
changeOutput=()=>{
  this.col1=this.state.inputColor;
  this.col2=this.state.input2Color;
  if(this.col1=='red' && this.col2=='red')
  {
    this.setState({
      outputColor:'red'
    })
  }
}

func=()=>{
  if(this.state.inputtap)
  {
    console.log('checking Input for And Gates input 1');
    
    this.inputByGates=this.props.GateOutputs;
    for (let i = 0; i <this.props.Inputs.length; i+=3) {
      
    this.a=this.props.Inputs[i];
    this.b=this.props.Inputs[i+1];
    this.c=this.state.inputendPointX;
    this.d=this.state.inputendPointY;
    if((this.a-this.c<11 && this.a-this.c>-11)&&(this.b-this.d<11&&this.b-this.d>-11))
     {
      console.log('MAtched')
      this.OCColor=(this.props.Inputs[i+2]=='red'&&this.state.input2Color=='red')?'red':'black'
      this.setState({inputColor:this.props.Inputs[i+2],
                    outputColor:this.OCColor})
      
      this.props.deleteOutput(this.previousXVal,this.previousYVal,this.OCColor,this.state.StartX+67,this.state.StartY+15);
      this.previousXVal=this.state.StartX+67;
      this.previousYVal=this.state.StartY+15;
      console.log('OCCOlor',this.OCColor,'output',this.state.outputColor)
      
      console.log('recieved vale ',this.props.Inputs[i+2],this.state.inputColor,this.state.input2Color,this.state.outputColor)
      return;
     }
    
    }
    for (let i = 0; i <this.inputByGates.length; i+=3) {
      
      this.a=this.inputByGates[i];
      this.b=this.inputByGates[i+1];
      this.c=this.state.inputendPointX;
      this.d=this.state.inputendPointY;
      if((this.a-this.c<11 && this.a-this.c>-11)&&(this.b-this.d<11&&this.b-this.d>-11))
       {
        console.log('MAtched with a gate outputtt')
        this.OCColor=(this.inputByGates[i+2]=='red'&&this.state.input2Color=='red')?'red':'black'
        this.setState({inputColor:this.inputByGates[i+2],
                      outputColor:this.OCColor})
        
        this.props.deleteOutput(this.previousXVal,this.previousYVal,this.OCColor,this.state.StartX+67,this.state.StartY+15);
        this.previousXVal=this.state.StartX+67;
        this.previousYVal=this.state.StartY+15;
        
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
    console.log('checking Input for And Gates input 2');
    
    this.inputByGates=this.props.GateOutputs;
    for (let i = 0; i <this.props.Inputs.length; i+=3) {
      
    this.a=this.props.Inputs[i];
    this.b=this.props.Inputs[i+1];
    this.c=this.state.input2endPointX;
    this.d=this.state.input2endPointY;
    if((this.a-this.c<11 && this.a-this.c>-11)&&(this.b-this.d<11&&this.b-this.d>-11))
     {
      console.log('MAtched input 2')
      this.OCColor=(this.props.Inputs[i+2]=='red'&&this.state.inputColor=='red')?'red':'black'
      this.setState({input2Color:this.props.Inputs[i+2],
                    outputColor:this.OCColor})
      
      this.props.deleteOutput(this.previousXVal,this.previousYVal,this.OCColor,this.state.StartX+67,this.state.StartY+15);
      this.previousXVal=this.state.StartX+67;
      this.previousYVal=this.state.StartY+15;
      
      console.log('OCCOlor',this.OCColor,'output',this.state.outputColor)
      console.log('recieved vale ',this.props.Inputs[i+2],this.state.inputColor,this.state.input2Color,this.state.outputColor)
   
      return;
     }
    
    }
    for (let i = 0; i <this.inputByGates.length; i+=3) {
    
      this.a=this.inputByGates[i];
      this.b=this.inputByGates[i+1];
      this.c=this.state.input2endPointX;
      this.d=this.state.input2endPointY;
      if((this.a-this.c<11 && this.a-this.c>-11)&&(this.b-this.d<11&&this.b-this.d>-11))
       {
        console.log('MAtched input 2 with a gate outputtt')
        this.OCColor=(this.inputByGates[i+2]=='red'&&this.state.inputColor=='red')?'red':'black'
        this.setState({input2Color:this.inputByGates[i+2],
                      outputColor:this.OCColor})
        
        this.props.deleteOutput(this.previousXVal,this.previousYVal,this.OCColor,this.state.StartX+67,this.state.StartY+15);
        this.previousXVal=this.state.StartX+67;
        this.previousYVal=this.state.StartY+15;
        
        console.log('OCCOlor',this.OCColor,'output',this.state.outputColor)
        console.log('recieved vale ',this.inputByGates[i+2],this.state.inputColor,this.state.input2Color,this.state.outputColor)
   
        return;
       }
      
      }
          
  }
}
  inputConnection=()=>{
   //console.log('in input connection',this.state.inputtap)
    
    //  console.log(this.a,this.props.Inputs[0].a,this.b,this.props.Inputs[0].b)
      //console.log('IN IFF')
      if(this.state.inputtap){
        
      return(
        <G>
          
           <Line x1={this.state.inputpointX} y1={this.state.inputpointY} x2={this.state.inputendPointX} y2={this.state.inputendPointY} stroke="red" strokeWidth="2" />
        </G>
      )
    }}
  
  inputConnection2=()=>{
   // console.log('in input2 connection',this.state.input2tap)
    if(this.state.input2tap)
    {
    //  console.log('IN input2')
      return(
        <G>
          
           <Line x1={this.state.input2pointX} y1={this.state.input2pointY} x2={this.state.input2endPointX} y2={this.state.input2endPointY} stroke="red" strokeWidth="2" />
        </G>
      )
    }
  }
  outputConnection=()=>{
    //console.log('in output connection',this.state.outputtap)
    if(this.state.outputtap)
    {
  //    console.log('IN Output')
      return(
        <G>
          
           <Line x1={this.state.outputpointX} y1={this.state.outputpointY} x2={this.state.outputendPointX} y2={this.state.outputendPointY} stroke="red" strokeWidth="2" />
        </G>
      )
    }
  }
  clockCycle=()=>{
      
    setInterval(() => {
        console.log('calling a check func')
        this.ue=this.state.i;
        this.setState({
            i:this.ue+5
        })
        this.func()
        this.func2()
     //
      }, 3000*this.state.i);
    }

 
  render() {
    return (
    <G >
        <G {...this.gestureResponder} >
          <Path d={this.state.pathData} stroke="black" strokeWidth="2"  fill='none'/>
          <Text x={this.state.StartX+10} y={this.state.StartY+15} stroke="black" fontSize="15"
     fill="black" textAnchor="middle">
      D
    </Text>
    <Text x={this.state.StartX+43} y={this.state.StartY+30} stroke="black" fontSize="15"
     fill="black" textAnchor="middle">
        q
    </Text>
    <Line x1={this.state.StartX} y1={this.state.StartY+35} x2={this.state.StartX+10} y2={this.state.StartY+42} stroke="red" strokeWidth="2" />
          <Line x1={this.state.StartX+10} y1={this.state.StartY+42} x2={this.state.StartX} y2={this.state.StartY+49} stroke="red" strokeWidth="2" />
         

          </G>
          <Line x1={this.state.StartX-1} y1={this.state.StartY+15} x2={this.state.StartX-15} y2={this.state.StartY+15} stroke="red" strokeWidth="2" />
          <Line x1={this.state.StartX-1} y1={this.state.StartY+45} x2={this.state.StartX-15} y2={this.state.StartY+45} stroke="red" strokeWidth="2" />
          <Line x1={this.state.StartX+50} y1={this.state.StartY+15} x2={this.state.StartX+65} y2={this.state.StartY+15} stroke="red" strokeWidth="2" />
         
          <G {...this.gestureResponderInput1}>
                      <Circle cx={this.state.StartX-15} cy={this.state.StartY+15} r="11" fill={this.state.inputColor} />
    
                      </G>
                      <G {...this.gestureResponderInput2}>
          <Circle cx={this.state.StartX-15} cy={this.state.StartY+45} r="11" fill={this.state.input2Color} />
          </G>
          <G {...this.gestureResponderOutput}>
          <Circle cx={this.state.StartX+67} cy={this.state.StartY+15} r="11" fill={this.state.outputColor} />
          </G>
          {this.inputConnection()}
          {this.inputConnection2()}
          {this.outputConnection()}
       
         </G>
    
    );
  }
}

export default DFlipFlop;
