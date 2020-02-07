import React, { Component } from 'react';
import { View, Text,Animated,Alert } from 'react-native';
import {Svg,Path,Circle,G,Line,Defs} from 'react-native-svg';
import {createResponder} from 'react-native-gesture-responder';
import { InputGroup, Thumbnail } from 'native-base';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
        startX:20,
        startY:70,
        pathData:["M",20,70,
        "L",20+49,70,
        "L",20+49,70+40,
        "L",20,70+40,
        "L",20,70,
        ].join(' '),
        pathData2:[
            "M",20+15,70+20,
            "L",20+22,70+20,
            "L",20+22,70+13,
            "L",20+29,70+13,
            "L",20+29,70+20,
            "L",20+36,70+20,
            "L",20+36,70+13
        ].join(' '),
        inputcolor:'red',
        tap:false,
        i:0,
    };
    this.temp='red';
    this.tap=false;
    this.sx=82;
    this.sy=90;

  }
  

  componentWillMount() {
    
    this.props.setIn(this.state.startX+62,this.state.startY+20,this.state.inputcolor)
    this.gestureResponder = createResponder({
      onStartShouldSetResponder: (evt, gestureState) => true,
      onStartShouldSetResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetResponder: (evt, gestureState) => true,
      onMoveShouldSetResponderCapture: (evt, gestureState) => true,
      onResponderGrant: (evt, gestureState) => {},
      onResponderMove: (evt, gestureState) => {
          if(this.state.tap)
          {
            
              this.setState({
                  startX:gestureState.moveX,
                  startY:gestureState.moveY,
                  pathData:["M",gestureState.moveX,gestureState.moveY,
                  "L",gestureState.moveX+49,gestureState.moveY,
                  "L",gestureState.moveX+49,gestureState.moveY+40,
                  "L",gestureState.moveX,gestureState.moveY+40,
                  "L",gestureState.moveX,gestureState.moveY,
                  ].join(' '),
                  pathData2:[
                    "M",gestureState.moveX+15,gestureState.moveY+20,
                    "L",gestureState.moveX+22,gestureState.moveY+20,
                    "L",gestureState.moveX+22,gestureState.moveY+13,
                    "L",gestureState.moveX+29,gestureState.moveY+13,
                    "L",gestureState.moveX+29,gestureState.moveY+20,
                    "L",gestureState.moveX+36,gestureState.moveY+20,
                    "L",gestureState.moveX+36,gestureState.moveY+13
                ].join(' '),
              })
            
          }
   
               },
      onResponderTerminationRequest: (evt, gestureState) => true,
      onResponderRelease: (evt, gestureState) => {
     //   console.log('DOubtle tapup',gestureState.doubleTapUp)
      
       /* this.temp=(this.state.inputcolor=='red')?'black':'red';
        if(gestureState.doubleTapUp){
         this.setState({
             inputcolor:this.temp
         })
        }*/
        if(this.state.tap){
          this.props.del(this.sx,this.sy,this.state.inputcolor,this.state.startX+62,this.state.startY+20)
          this.sx=this.state.startX+62;
          this.sy=this.state.startY+20;
       //   console.log(this.sx,this.sy,this.state.inputcolor,this.state.startX+62,this.state.startY+20)
        }
       
        //  this.props.setIn(this.state.startX,this.state.startY,this.state.inputcolor)
          //console.log('OnInput',this.state.startX,this.state.startY,this.state.inputcolor)
         
        
       

      },
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
this.clockCycle()
       
          this.tap=this.state.tap;
          this.setState({
              tap:(this.tap)?false:true,  
          })
          
          
          console.log('Oninput',this.state.tap)
          
      },
      
      moveThreshold: 2,
      debug: false
    });
  }
  clockCycle=()=>{
      
  setInterval(() => {
      console.log(this.state.i)
     this.res=this.state.inputcolor
      if(this.state.i%50==0){
        this.setState({inputcolor:(this.res=='black')?'red':'black'})
        this.res=(this.state.inputcolor=='red')?'black':'red';
        this.props.del(this.sx,this.sy,this.state.inputcolor,this.state.startX+62,this.state.startY+20)
        this.sx=this.state.startX+62;
        this.sy=this.state.startY+20;
  
      }
    
   this.o=this.state.i+5;
   this.setState({
       i:this.o
   })
   //
    }, 3000*this.state.i);
  }
  render() {
    return (
     <G {...this.gestureResponder}>  
              <Path d={this.state.pathData} stroke="black" strokeWidth="2"  fill='none'/>
              <Path d={this.state.pathData2} stroke="black" strokeWidth="2"  fill='none'/>
        
         <Circle cx={this.state.startX+62} cy={this.state.startY+20} r="12" strokeWidth="2" fill={this.state.inputcolor} />
 
     </G>
     

    );
  }
}

export default Clock;
