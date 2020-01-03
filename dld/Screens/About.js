import React, { Component } from 'react';
import { View, Animated,StatusBar,Modal ,ScrollView,Image,Button, TouchableOpacity} from 'react-native';
import {Svg,G} from 'react-native-svg';
import NotGate from './NotGate';
import Practice from './Practice'
import Nand from './Nand'
import XorGate from './XorGate'
import Nor from './Nor'
import XnorGate from './XnorGate'
import AndGate from './AndGate';
import OrGate from './OrGate';
import {createResponder} from 'react-native-gesture-responder';

import DoubleClick from 'react-native-double-click';
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
        andVisibility:false
    };
  
  }
  returnAnd=()=> {
      this.setState({
          andVisibility:(this.state.andVisibility)?false:true
      })
      if(this.andVisibility)
      {
          return(
                <AndGate/>
               
          )
      }
      console.log('value of and',this.state.andVisibility)
      
     
  }
  render() {
    return (
  <Animated.View>
      <View style={{height:60,width:'100%'}}>     
           <ScrollView
        horizontal={true}
        
        > 
               
                <TouchableOpacity onPress={this.returnAnd}>
               <Image source={require('../assets/images/36470.png')} style={{width:70,height:60,paddingHorizontal:10}}/> 
               </TouchableOpacity>
               <Image source={require('../assets/images/36470.png')} style={{width:70,height:50,paddingHorizontal:10}}/> 
               <Image source={require('../assets/images/36470.png')} style={{width:70,height:40,paddingHorizontal:10}}/> 
               <Image source={require('../assets/images/36470.png')} style={{width:70,height:40,paddingHorizontal:10}}/> 
               <Image source={require('../assets/images/36470.png')} style={{width:70,height:40,paddingHorizontal:10}}/> 
               <Image source={require('../assets/images/36470.png')} style={{width:70,height:40,paddingHorizontal:10}}/> 
               <Image source={require('../assets/images/36470.png')} style={{width:70,height:40,paddingHorizontal:10}}/> 
    
                       

        </ScrollView></View>
        <Animated.View>
 
        <Svg width='100%' height='90%'>

        <G>
            {this.returnAnd}
            </G>
</Svg></Animated.View>
  </Animated.View>
    );
  }
}

export default About;
