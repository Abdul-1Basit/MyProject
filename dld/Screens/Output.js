
import React, { Component } from 'react';
import { View, Text,Animated } from 'react-native';
import {Svg,Path,Circle,G,Line,Defs} from 'react-native-svg';
import {createResponder} from 'react-native-gesture-responder';
import { InputGroup, Thumbnail } from 'native-base';

class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {
        startX:99,
        startY:99,
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
      onResponderGrant: (evt, gestureState) => {
     //   this.fmp();
     {this.fmp()}
      },
      onResponderMove: (evt, gestureState) => {
          if(this.state.tap)
          {
              this.setState({
                  startX:gestureState.moveX,
                  startY:gestureState.moveY
              })
           //   this.fmp();
          }
          

      },
      onResponderTerminationRequest: (evt, gestureState) => true,
      onResponderRelease: (evt, gestureState) => {
        console.log('DOubtle tapup',gestureState.doubleTapUp)
      //  this.temp=(this.state.inputcolor=='red')?'black':'red';
       // if(gestureState.doubleTapUp){
        // this.setState({
         //    inputcolor:this.temp
         //})
       // }
      
      },
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
 
          this.tap=this.state.tap;
          this.setState({
              tap:(this.tap)?false:true,  
          })
          console.log('drag nputg',this.tap)
          
      },
      
      moveThreshold: 2,
      debug: false
    });
  }
fmp=()=>{
    console.log('checking values',this.props.getoutputX,this.props.getoutputY,this.state.startX,this.state.startY)
    if(((((this.props.getoutputX-this.state.startX.toFixed(2))<7) &&((this.props.getoutputX-this.state.startX.toFixed(2))>-7))||(((this.state.startX.toFixed(2)-this.props.getoutputX)<7)&&((this.state.startX.toFixed(2)-this.props.getoutputX)>-7)))||((((this.props.getoutputY-this.state.startY.toFixed(2))<7) &&((this.props.getoutputY-this.state.startY.toFixed(2))>-7))||((( this.state.startY.toFixed(2)-this.props.getoutputY)>-7)&& ((this.state.startY.toFixed(2)-this.props.getoutputY)<7))))
    {
        console.log('value hitting output');
        this.setState({
            inputcolor:this.props.getoutputColor,
            
        })
    }
}
  render() {
    return (
     <G {...this.gestureResponder}>  
         <Circle cx={this.state.startX} cy={this.state.startY} r="12" fill={this.state.inputcolor} />
   
     </G>
    );
  }
}

export default Output;
