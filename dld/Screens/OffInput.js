import React, { Component } from 'react';
import { View, Text,Animated } from 'react-native';
import {Svg,Path,Circle,G,Line,Defs} from 'react-native-svg';
import {createResponder} from 'react-native-gesture-responder';
import { InputGroup, Thumbnail } from 'native-base';

class OffInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
        startX:69,
        startY:69,
        inputcolor:'black',
        tap:false
    };
    this.temp='red';
    this.tap=false;
  }
  componentWillMount() {
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
        console.log('DOubtle tapup',gestureState.doubleTapUp)
       /* this.temp=(this.state.inputcolor=='red')?'black':'red';
        if(gestureState.doubleTapUp){
         this.setState({
             inputcolor:this.temp
         })
        }*/
      },
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
 
          this.tap=this.state.tap;
          this.setState({
              tap:(this.tap)?false:true,  
          })
          console.log('drag input',this.state.tap)
          
      },
      
      moveThreshold: 2,
      debug: false
    });
  }

  render() {
    return (
     <G {...this.gestureResponder}>  
         <Circle cx={this.state.startX} cy={this.state.startY} r="12" fill={this.state.inputcolor} />
        
     </G>
    );
  }
}

export default OffInput;
