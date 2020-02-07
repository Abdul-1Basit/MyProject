import React, { Component } from 'react';
import { View, Text,Animated } from 'react-native';
import {Svg,Rect,Path,Circle,G,Line,Defs} from 'react-native-svg';
import {createResponder} from 'react-native-gesture-responder';
import { InputGroup, Thumbnail } from 'native-base';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
        startX:69,
        startY:80,
        inputcolor:'red',
        tap:false,
        path:["M",69-30,80-10,
        "L",69-30+20,80-10,
        "L",69-30+20,80-10+10,
        "L",69-30,80-10+10,
        "L",69-30,80-10,].join(' '),
    };
    this.temp='red';
    this.tap=false;
    this.sx=69;
    this.sy=80;
  }
  componentWillMount() {
    
    this.props.setIn(this.state.startX,this.state.startY,this.state.inputcolor)
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
                  startY:gestureState.moveY
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
        this.vs=this.state.inputcolor
        if(gestureState.doubleTapUp){
         this.vs= (this.state.inputcolor=='red')?'black':'red'
          console.log('OFF')
          this.setState(
               { inputcolor:this.vs,
                  
                     } )
                     console.log('vs',this.vs,this.state.inputcolor)
                     this.props.del(this.sx,this.sy,this.vs,this.state.startX,this.state.startY)
                     this.sx=this.state.startX;
                     this.sy=this.state.startY;
     
                    }
        if(this.state.tap){
          this.props.del(this.sx,this.sy,this.vs,this.state.startX,this.state.startY)
          this.sx=this.state.startX;
          this.sy=this.state.startY;
        }
       
        //  this.props.setIn(this.state.startX,this.state.startY,this.state.inputcolor)
          //console.log('OnInput',this.state.startX,this.state.startY,this.state.inputcolor)
         
        
       

      },
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
 
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

  render() {
    return (
      <G>
        <Rect    x={this.state.startX-37}
    y={this.state.startY-10}
    width="50"
    height="20"
    fill='grey'
    strokeWidth="3"
    stroke="rgb(0,0,0)"/>
     <G {...this.gestureResponder}>  
         <Circle cx={this.state.startX} cy={this.state.startY} r="12" strokeWidth="2" fill={this.state.inputcolor} />
      
     </G>
     </G>
    );
  }
}

export default Input;
