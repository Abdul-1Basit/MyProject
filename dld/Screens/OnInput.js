import React, { Component } from 'react';
import { View, Text,Animated } from 'react-native';
import {Svg,Path,Circle,G,Line,Defs} from 'react-native-svg';
import {createResponder} from 'react-native-gesture-responder';
import { InputGroup, Thumbnail } from 'native-base';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
        startX:69,
        startY:80,
        inputcolor:'red',
        tap:false
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
        if(this.state.tap){
          this.props.del(this.sx,this.sy,this.state.inputcolor,this.state.startX,this.state.startY)
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
          if(this.state.tap)
          {
            this.sx=this.state.startX;
            this.sy=this.state.startY;
          }
          
          console.log('Oninput',this.state.tap)
          
      },
      
      moveThreshold: 2,
      debug: false
    });
  }

  render() {
    return (
     <G {...this.gestureResponder}>  
         <Circle cx={this.state.startX} cy={this.state.startY} r="12" strokeWidth="2" fill={this.state.inputcolor} />
      
     </G>
    );
  }
}

export default Input;
