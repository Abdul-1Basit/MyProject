import React, { Component } from 'react';
import { View, Text,Animated } from 'react-native';
import {Svg,Path,Circle,G,Line,Defs} from 'react-native-svg';
import {createResponder} from 'react-native-gesture-responder';
import { InputGroup, Thumbnail } from 'native-base';

class NotGate extends Component {
  constructor(props) {
    super(props);
    this.input={
      color:'black',
     
      tap:false
    }
    this.output={
            color:'red',
           tap:false, 
          }
    
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
            inputStartPointX:170-10*2,
            inputStartPointY:70+30,
            inputEndPointX:170-10*2,
            inputEndPointY:70+30, 
            inputtap:false,
            inputcolor:'black',
            outputStartPointX:170+13*4,
            outputStartPointY:70+30,
            outputEndPointX:170+13*4,
            outputEndPointY:70+30,
            outputcolor:'red' ,
            outputtap:false

      }
    
this.tap=false;
     // this.logiColor='black';
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
                    ].join(" "),
                    inputStartPointX:gestureState.moveX-10*2,
                    inputStartPointY:gestureState.moveY+30,
                    outputStartPointX:gestureState.moveX+13*4,
                    outputStartPointY:gestureState.moveY+30,
               })
      }
    },
    onResponderTerminationRequest: (evt, gestureState) => true,
    onResponderRelease: (evt, gestureState) => {
        /*this.input.color=this.state.inputcolor;
        if(this.input.color=='black'){
          this.output.color='red'
        }
        else if(this.input.color=='red')
        {
          this.output.color='black'
        }
        this.setState({
          outputcolor:this.output.color,
        })
        */
     /* console.log('OUTPUTCOLOR',this.output.color)
      this.output.color=(this.input.color=='red')?'black':'red';
      console.log('OUTPUTCOLOR',this.output.color)
      */ 
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
  console.log('componentwillmount mei')
  this.gestureResponder1= createResponder({
    onStartShouldSetResponder: (evt, gestureState) => true,
    onStartShouldSetResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetResponder: (evt, gestureState) => true,
    onMoveShouldSetResponderCapture: (evt, gestureState) => true,
    onResponderGrant: (evt, gestureState) => {
      console.log('inGrannt of not input')
    },
    onResponderMove: (evt, gestureState) => {
    if(this.state.inputtap){ 
      
      this.input.color=this.state.inputcolor;
       this.setState(
        {
          
          outputcolor:(this.input.color==='red')?'black':'red',
          inputEndPointX:gestureState.moveX,
          inputEndPointY:gestureState.moveY
        } 
      )
      if(this.checkOnInputValue(this.props.OnInputXValue,this.props.OnInputYValue))
      {
        console.log('InputValue matched','old value of state inputcolor',this.state.inputcolor)
         this.setState({
            inputcolor:'red',
            outputcolor:'black'
          })
        console.log('newvalue of states input and output color',this.state.inputcolor,this.state.outputcolor)
        
      }
      else{
        this.setState({
          inputcolor:'black',
          outputcolor:'red'
        })
      }
        
    }
 //     console.log('value of inputstartpoint',this.state.inputStartPointX)
  //    console.log('value of start y',this.state.inputStartPointY)
   //   console.log('value of endx',this.state.inputEndPointX)
    //  console.log('value of endy',this.state.inputEndPointY)
    },
    onResponderTerminationRequest: (evt, gestureState) => true,
    onResponderRelease: (evt, gestureState) => {
     
      /*console.log('OUTPUTCOLOR',this.output.color)
      this.output.color=(this.input.color=='red')?'black':'red';
      console.log('OUTPUTCOLOR',this.output.color)
     */ /* this.input.color=this.state.inputcolor;
      if(this.input.color=='black'){
        this.output.color='red'
      }
      else if(this.input.color=='red')
      {
        this.output.color='black'
      }
      this.setState({
        outputcolor:this.output.color,
      })*/

    },
    onResponderTerminate: (evt, gestureState) => {},
    
    onResponderSingleTapConfirmed: (evt, gestureState) => {
      this.input.tap=(this.state.inputtap)?false:true;
      this.setState({
        inputtap:this.input.tap
      })
      console.log('Not gate input set to',this.state.inputtap)
    },
    
    moveThreshold: 2,
    debug: false
  }); 
  this.gestureResponder2= createResponder({
    onStartShouldSetResponder: (evt, gestureState) => true,
    onStartShouldSetResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetResponder: (evt, gestureState) => true,
    onMoveShouldSetResponderCapture: (evt, gestureState) => true,
    onResponderGrant: (evt, gestureState) => {
      console.log('inGrannt of not output')
    },
    onResponderMove: (evt, gestureState) => {
     if(this.output.tap){
      this.input.color=this.state.inputcolor;
      
      this.setState(
        {
          outputcolor:(this.input.color==='red')?'black':'red',
          outputEndPointX:gestureState.moveX,
          outputEndPointY:gestureState.moveY
        }
      )
        
    }
    //  console.log('value of inputstartpoint',this.state.outputStartPointX)
     // console.log('value of start y',this.state.outputStartPointY)
      //console.log('value of endx',this.state.outputEndPointX)
      //console.log('value of endy',this.state.outputEndPointY)
    },
    onResponderTerminationRequest: (evt, gestureState) => true,
    onResponderRelease: (evt, gestureState) => {
    /*  this.input.color=this.state.inputcolor;
      if(this.input.color=='black'){
        this.output.color='red'
      }
      else if(this.input.color=='red')
      {
        this.output.color='black'
      }
      this.setState({
        outputcolor:this.output.color,
      })
*/
/*
console.log('OUTPUTCOLOR',this.output.color)
this.output.color=(this.input.color=='red')?'black':'red';
console.log('OUTPUTCOLOR',this.output.color)
    */  
   if(this.output.tap){
    this.props.AssignOutput(this.state.outputEndPointX,this.state.outputEndPointY,this.state.outputcolor)
   console.log('calling output fucntion')
   }
   },
    onResponderTerminate: (evt, gestureState) => {},
    
    onResponderSingleTapConfirmed: (evt, gestureState) => {
      this.output.tap=(this.output.tap)?false:true;
      console.log('Not gate output set to',this.output.tap)
    },
    
    moveThreshold: 2,
    debug: false
  });
  
  //this.output.color=(this.input.color=='black')?'red':'black';
}

drawInputLine=()=>{
  if(this.state.inputtap){
   // console.log('IN IF TRUE')
    //console.log(this.props.OnInputXValue,this.props.OnInputYValue,this.state.inputEndPointX.toFixed(2),this.state.inputEndPointY.toFixed(2))
    console.log('not gate input is true')
    
   
     
    
  return(
    <Line x1={this.state.inputStartPointX} y1={this.state.inputStartPointY} x2={this.state.inputEndPointX} y2={this.state.inputEndPointY} stroke="red" strokeWidth="2" />
  )
}
}
drawOutputLine=()=>{
  if(this.output.tap){
    console.log('In NOtGate Output Line')
     return(
    <Line x1={this.state.outputStartPointX} y1={this.state.outputStartPointY} x2={this.state.outputEndPointX} y2={this.state.outputEndPointY} stroke="red" strokeWidth="2" />
  )
}
}
checkOnInputValue=(a,b)=>{
  console.log(a,b,this.state.inputEndPointX,this.state.inputEndPointY)
  if(((((a-this.state.inputEndPointX.toFixed(2))<7) &&((a-this.state.inputEndPointX.toFixed(2))>-7))||(((this.state.inputEndPointX.toFixed(2)-a)<7)&&((this.state.inputEndPointX.toFixed(2)-a)>-7)))||((((b-this.state.inputEndPointY.toFixed(2))<7) &&((b-this.state.inputEndPointY.toFixed(2))>-7))||((( this.state.inputEndPointY.toFixed(2)-b)>-7)&& ((this.state.inputEndPointY.toFixed(2)-b)<7))))
  {
    console.log((a-this.state.inputEndPointX.toFixed(2)))
    console.log((this.state.inputEndPointX.toFixed(2)-a))
    console.log((b-this.state.inputEndPointY.toFixed(2)))
    console.log((this.state.inputEndPointY.toFixed(2)-b))
    
   return true;
  
  
}
  return false;
}

  render() {
    return (
     <G>
       
   <G {...this.gestureResponder}> 
       <Path d={this.state.pathData}
                strokeWidth="3"/> 
                </G>
                <Line  x1={this.state.startX-10*2} y1={this.state.startY+15*2} x2={this.state.startX} y2={this.state.startY+15*2} stroke="black" strokeWidth="2"/>
                <Line  x1={this.state.startX+15*2} y1={this.state.startY+15*2} x2={this.state.startX+12*4} y2={this.state.startY+15*2} stroke="black" strokeWidth="2"/>
               
               <G  {...this.gestureResponder1}> 
                  <Circle cx={this.state.startX-10*2} cy={this.state.startY+15*2} r="12" fill={this.state.inputcolor} />  
                   </G>
          <Circle cx={this.state.startX+17*2} cy={this.state.startY+15*2} r="5" fill="black" />
          <G {...this.gestureResponder2}>
         
          <Circle cx={this.state.startX+13*4} cy={this.state.startY+15*2} r="12" fill={this.state.outputcolor} />
          </G>
          
        {this.drawInputLine()}
        {this.drawOutputLine()}
    </G>
      );
  }
}

export default NotGate;
