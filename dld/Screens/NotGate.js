import React, { Component } from 'react';
import { View, Text,Animated } from 'react-native';
import {Svg,Path,Circle,G,Line,Defs} from 'react-native-svg';
import {createResponder} from 'react-native-gesture-responder';
import { InputGroup, Thumbnail } from 'native-base';
import PracticeScreen from '../Folder/PracticeScreen'
import MAndGate from './MAndGate'
class NotGate extends Component {
  constructor(props) {
    super(props);
    this.input={
  tap:false
    }
    this.output={
            color:'red',
           tap:false, 
          }
    
    this.state={
            i:1,
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
            outputtap:false,
            showSmallMenu:false,
            showData:true,

      }
      this.previousXVal=170+13*4;
      this.previousYVal=70+15*2
    
this.tap=false;
     // this.logiColor='black';
}
componentWillMount() {
 // this.cc();
  this.props.firstlyAssign(this.previousXVal,this.previousYVal,this.state.outputcolor);
  //this.changeGateOutput();
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
     if(this.tap){  
        this.props.deleteOutput(this.previousXVal,this.previousYVal,this.state.outputcolor,this.state.startX+13*4,this.state.startY+30);
      this.previousXVal=this.state.startX+13*4;
      this.previousYVal=this.state.startY+30;
      console.log('gesture release output is ',this.state.outputcolor)
      if(gestureState.doubleTapUp){
        console.log('double tapp of not gate')
          this.setState({
            showSmallMenu:true
          })
      }
     }
        /*
        //gate output maping
         if(this.tap){
        this.props.del(this.sx,this.sy,this.state.inputcolor,this.state.startX,this.state.startY)
   
      }
      //----------yahan t
        this.input.color=this.state.inputcolor;
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
  //console.log('componentwillmount mei')
  this.gestureResponder1= createResponder({
    onStartShouldSetResponder: (evt, gestureState) => true,
    onStartShouldSetResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetResponder: (evt, gestureState) => true,
    onMoveShouldSetResponderCapture: (evt, gestureState) => true,
    onResponderGrant: (evt, gestureState) => {
     // console.log('inGrannt of not input')
    },
    onResponderMove: (evt, gestureState) => {
    if(this.state.inputtap){ 
    //  this.input.color=this.state.inputcolor;
       this.setState(
        {
          
          inputEndPointX:gestureState.moveX,
          inputEndPointY:gestureState.moveY
        } 
      )
     /* if(this.checkOnInputValue(this.props.OnInputXValue,this.props.OnInputYValue))
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
      }*/
        
    }
 //     console.log('value of inputstartpoint',this.state.inputStartPointX)
  //    console.log('value of start y',this.state.inputStartPointY)
   //   console.log('value of endx',this.state.inputEndPointX)
    //  console.log('value of endy',this.state.inputEndPointY)
    },
    onResponderTerminationRequest: (evt, gestureState) => true,
    onResponderRelease: (evt, gestureState) => {
     if(this.state.inputtap){
       
      this.checkInput();
      
     /*
     //code for maping gate output in state
            this.props.del(this.sx,this.sy,this.state.inputcolor,this.state.startX,this.state.startY)
   
     */
     }
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
     // this.changeGateOutput();
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
     // console.log('inGrannt of not output')
    },
    onResponderMove: (evt, gestureState) => {
     if(this.state.outputtap){
    //  this.input.color=this.state.inputcolor;
      
      this.setState(
        {
        //  outputcolor:(this.input.color==='red')?'black':'red',
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
  /* if(this.output.tap){
    this.props.AssignOutput(this.state.outputEndPointX,this.state.outputEndPointY,this.state.outputcolor)
   console.log('calling output fucntion')
   }*/
   },
    onResponderTerminate: (evt, gestureState) => {},
    
    onResponderSingleTapConfirmed: (evt, gestureState) => {
      this.output.tap=(this.state.outputtap)?false:true;
      this.setState({
        outputtap:this.output.tap
      })
      console.log('Not gate output set to',this.state.outputtap)
    },
    
    moveThreshold: 2,
    debug: false
  });
  
  //this.output.color=(this.input.color=='black')?'red':'black';
}
cc=()=>{setInterval(() => {
  console.log(this.state.i)
  this.checkInput();

this.o=this.state.i+5;
this.setState({
   i:this.o
})
//
}, 3000*this.state.i);
}
dlt=()=>{}
drawMenu=()=>{
  if(this.state.showSmallMenu){
   
   console.log('TRUEEEEEE')
    return(
      <G>
        <PracticeScreen X={this.state.startX} Y={this.state.startY} dltGate={this.dlt.bind(this)}/>

      </G>
    )
  }
}
checkInput=()=>{
  console.log('checking input connection')
  if(this.state.inputtap)
  {
    this.inputArray=this.props.Inputs;
    this.inputByGates=this.props.GateOutputs;
  //  console.log('in for loop not gate input check')
    for (let i = 0; i <this.inputArray.length; i+=3) {
      
    this.a=this.inputArray[i].toFixed(2);
    this.b=this.inputArray[i+1].toFixed(2);
    this.c=this.state.inputEndPointX.toFixed(2);
    this.d=this.state.inputEndPointY.toFixed(2);
    if((this.a-this.c<11 && this.a-this.c>-11)&&(this.b-this.d<11 &&this.b-this.d>-11))
     {
      console.log('MAtched')
    this.tcol=(this.inputArray[i+2]==='red')?'black':'red';

    
      this.setState({
        inputcolor:this.inputArray[i+2],
        outputcolor:this.tcol,
      }) 
      console.log('ASSIGNING NEW LOCATION OF GATE OUTPUT')
      this.props.deleteOutput(this.previousXVal,this.previousYVal,this.tcol,this.state.startX+13*4,this.state.startY+30);
      this.previousXVal=this.state.startX+13*4;
      this.previousYVal=this.state.startY+30;
     console.log('=====>',this.previousXVal,this.previousYVal,this.tcol,'stateopt',this.state.outputcolor,this.state.startX+13*4,this.state.startY+30)
      return;
     }
    
    }
    for (let i = 0; i <this.inputByGates.length; i+=3) {
      
      this.a=this.inputByGates[i].toFixed(2);
      this.b=this.inputByGates[i+1].toFixed(2);
      this.c=this.state.inputEndPointX.toFixed(2);
      this.d=this.state.inputEndPointY.toFixed(2);
      if((this.a-this.c<11 && this.a-this.c>-11)&&(this.b-this.d<11 &&this.b-this.d>-11))
       {
        console.log('MAtched')
      this.tcol=(this.inputByGates[i+2]==='red')?'black':'red';
  
      
        this.setState({
          inputcolor:this.inputByGates[i+2],
          outputcolor:this.tcol,
        }) 
        console.log('Asgng Gate Output To this gates input')
        this.props.deleteOutput(this.previousXVal,this.previousYVal,this.tcol,this.state.startX+13*4,this.state.startY+30);
        this.previousXVal=this.state.startX+13*4;
        this.previousYVal=this.state.startY+30;
        // console.log(this.a,this.b,this.c,this.d)
        return;
       }
      
      }
      

      
}
}
drawInputLine=()=>{
  if(this.state.inputtap){
   // console.log('IN IF TRUE')
    //console.log(this.props.OnInputXValue,this.props.OnInputYValue,this.state.inputEndPointX.toFixed(2),this.state.inputEndPointY.toFixed(2))
 //   console.log('not gate input is true')
    
   
  return(
    <Line x1={this.state.inputStartPointX} y1={this.state.inputStartPointY} x2={this.state.inputEndPointX} y2={this.state.inputEndPointY} stroke="red" strokeWidth="2" />
  )
}
}
changeGateOutput=()=>{
  if(this.state.inputtap){
  this.col=this.state.inputcolor;
  this.setState({
    outputcolor:(this.col==='red')?'black':'red'
  })
  
  console.log('changefunction',this.col,'stateinput color',this.state.inputcolor,this.state.outputcolor)
  this.assignOutputLocationtoState();
  
  }
}
assignOutputLocationtoState=()=>{
  console.log('changing outputvalues')
  this.props.deleteOutput(this.previousXVal,this.previousYVal,this.state.outputcolor,this.state.startX+13*4,this.state.startY+30);
  this.previousXVal=this.state.startX;
  this.previousYVal=this.state.startY;
}

drawOutputLine=()=>{
  if(this.state.outputtap){
   // console.log('In NOtGate Output Line')
     return(
    <Line x1={this.state.outputStartPointX} y1={this.state.outputStartPointY} x2={this.state.outputEndPointX} y2={this.state.outputEndPointY} stroke="red" strokeWidth="2" />
  )
}
}


  render() {
    return (
     <G>
       
   <G {...this.gestureResponder}> 
       <Path d={this.state.pathData}
                strokeWidth="3"/> 
                </G>
                <G>  
       <Line  x1={this.state.startX-10*2} y1={this.state.startY+15*2} x2={this.state.startX} y2={this.state.startY+15*2} stroke="black" strokeWidth="2"/>
                <Line  x1={this.state.startX+15*2} y1={this.state.startY+15*2} x2={this.state.startX+12*4} y2={this.state.startY+15*2} stroke="black" strokeWidth="2"/>
               
               <G  {...this.gestureResponder1}> 
                  <Circle cx={this.state.startX-10*2} cy={this.state.startY+15*2} r="12" fill={this.state.inputcolor} />  
                   </G>
          <Circle cx={this.state.startX+17*2} cy={this.state.startY+15*2} r="5" fill="black" />
          <G {...this.gestureResponder2}>
         
          <Circle cx={this.state.startX+13*4} cy={this.state.startY+15*2} r="12" fill={this.state.outputcolor} />
          </G>
          </G>
  
        {this.drawInputLine()}
        {this.drawOutputLine()}
        {this.drawMenu()}
      
    </G>
      );
  }
}

export default NotGate;
