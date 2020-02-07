import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Path,G,Svg,Line,Circle } from 'react-native-svg';
import {createResponder} from 'react-native-gesture-responder';
import Practice from '../Screens/Practice'
import SmallDropDown from '../DropDownItems/SmallDropDown'

class PracticeScreen extends Component {

  constructor(props) {
    super(props);
    this.state={
        doubleTap:false,
        menuYval:250,
        menuPosition:150,
            StartX:190,
            StartY:300,
            V:true,
                  }
}
componentWillMount() {
  
    this.gestureResponder1 = createResponder({
      onStartShouldSetResponder: (evt, gestureState) => true,
      onStartShouldSetResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetResponder: (evt, gestureState) => true,
      onMoveShouldSetResponderCapture: (evt, gestureState) => true,
      onResponderGrant: (evt, gestureState) => {
     },
      onResponderMove: (evt, gestureState) => {
      },
      onResponderTerminationRequest: (evt, gestureState) => true,
      onResponderRelease: (evt, gestureState) => {
           /*   if(gestureState.doubleTapUp){
                      console.log('DOUBLE TAPP')
                this.tempMenuVal=this.state.StartX;
                this.temt=this.state.StartY;
                this.t=this.state.doubleTap
               
                this.setState({
                        doubleTap:(this.t)?false:true,
                      menuPosition:(this.tempMenuVal<160)?10:170,
                      menuYval:(this.temt<280)?80:350,
                        
                })
               
              }
    */
      },
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
console.log('PRESSED AND GATE')
       
this.setState({V:false,})
      //  this.props.dltGate('And');
       //   console.log(gestureState.doubleTapUp,"double tap")
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
       },
        onResponderMove: (evt, gestureState) => {
        },
        onResponderTerminationRequest: (evt, gestureState) => true,
        onResponderRelease: (evt, gestureState) => {
             /*   if(gestureState.doubleTapUp){
                        console.log('DOUBLE TAPP')
                  this.tempMenuVal=this.state.StartX;
                  this.temt=this.state.StartY;
                  this.t=this.state.doubleTap
                 
                  this.setState({
                          doubleTap:(this.t)?false:true,
                        menuPosition:(this.tempMenuVal<160)?10:170,
                        menuYval:(this.temt<280)?80:350,
                          
                  })
                 
                }
      */
        },
        onResponderTerminate: (evt, gestureState) => {},
        
        onResponderSingleTapConfirmed: (evt, gestureState) => {
  
                this.setState({V:false,})
            //    this.props.dltGate();
         //   console.log(gestureState.doubleTapUp,"double tap")
        },
        
        moveThreshold: 2,
        debug: false
        

});
       
    this.gestureResponder3 = createResponder({
        onStartShouldSetResponder: (evt, gestureState) => true,
        onStartShouldSetResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetResponder: (evt, gestureState) => true,
        onMoveShouldSetResponderCapture: (evt, gestureState) => true,
        onResponderGrant: (evt, gestureState) => {
       },
        onResponderMove: (evt, gestureState) => {
        },
        onResponderTerminationRequest: (evt, gestureState) => true,
        onResponderRelease: (evt, gestureState) => {
             /*   if(gestureState.doubleTapUp){
                        console.log('DOUBLE TAPP')
                  this.tempMenuVal=this.state.StartX;
                  this.temt=this.state.StartY;
                  this.t=this.state.doubleTap
                 
                  this.setState({
                          doubleTap:(this.t)?false:true,
                        menuPosition:(this.tempMenuVal<160)?10:170,
                        menuYval:(this.temt<280)?80:350,
                          
                  })
                 
                }
      */
        },
        onResponderTerminate: (evt, gestureState) => {},
        
        onResponderSingleTapConfirmed: (evt, gestureState) => {
  
         
                this.props.dltGate();
         //   console.log(gestureState.doubleTapUp,"double tap")
        },
        
        moveThreshold: 2,
        debug: false
        
      });
       
    this.gestureResponder4= createResponder({
        onStartShouldSetResponder: (evt, gestureState) => true,
        onStartShouldSetResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetResponder: (evt, gestureState) => true,
        onMoveShouldSetResponderCapture: (evt, gestureState) => true,
        onResponderGrant: (evt, gestureState) => {
       },
        onResponderMove: (evt, gestureState) => {
        },
        onResponderTerminationRequest: (evt, gestureState) => true,
        onResponderRelease: (evt, gestureState) => {
             /*   if(gestureState.doubleTapUp){
                        console.log('DOUBLE TAPP')
                  this.tempMenuVal=this.state.StartX;
                  this.temt=this.state.StartY;
                  this.t=this.state.doubleTap
                 
                  this.setState({
                          doubleTap:(this.t)?false:true,
                        menuPosition:(this.tempMenuVal<160)?10:170,
                        menuYval:(this.temt<280)?80:350,
                          
                  })
                 
                }
      */
        },
        onResponderTerminate: (evt, gestureState) => {},
        
        onResponderSingleTapConfirmed: (evt, gestureState) => {
                this.props.dltGate();
         
          
         //   console.log(gestureState.doubleTapUp,"double tap")
        },
        
        moveThreshold: 2,
        debug: false
        
      });
      
       
    this.gestureResponder5 = createResponder({
        onStartShouldSetResponder: (evt, gestureState) => true,
        onStartShouldSetResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetResponder: (evt, gestureState) => true,
        onMoveShouldSetResponderCapture: (evt, gestureState) => true,
        onResponderGrant: (evt, gestureState) => {
       },
        onResponderMove: (evt, gestureState) => {
        },
        onResponderTerminationRequest: (evt, gestureState) => true,
        onResponderRelease: (evt, gestureState) => {
             /*   if(gestureState.doubleTapUp){
                        console.log('DOUBLE TAPP')
                  this.tempMenuVal=this.state.StartX;
                  this.temt=this.state.StartY;
                  this.t=this.state.doubleTap
                 
                  this.setState({
                          doubleTap:(this.t)?false:true,
                        menuPosition:(this.tempMenuVal<160)?10:170,
                        menuYval:(this.temt<280)?80:350,
                          
                  })
                 
                }
      */
        },
        onResponderTerminate: (evt, gestureState) => {},
        
        onResponderSingleTapConfirmed: (evt, gestureState) => {
                this.props.dltGate();  this.props.dltGate();
         
          
         //   console.log(gestureState.doubleTapUp,"double tap")
        },
        
        moveThreshold: 2,
        debug: false
        
      });
       
    this.gestureResponder6 = createResponder({
        onStartShouldSetResponder: (evt, gestureState) => true,
        onStartShouldSetResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetResponder: (evt, gestureState) => true,
        onMoveShouldSetResponderCapture: (evt, gestureState) => true,
        onResponderGrant: (evt, gestureState) => {
       },
        onResponderMove: (evt, gestureState) => {
        },
        onResponderTerminationRequest: (evt, gestureState) => true,
        onResponderRelease: (evt, gestureState) => {
             /*   if(gestureState.doubleTapUp){
                        console.log('DOUBLE TAPP')
                  this.tempMenuVal=this.state.StartX;
                  this.temt=this.state.StartY;
                  this.t=this.state.doubleTap
                 
                  this.setState({
                          doubleTap:(this.t)?false:true,
                        menuPosition:(this.tempMenuVal<160)?10:170,
                        menuYval:(this.temt<280)?80:350,
                          
                  })
                 
                }
      */
        },
        onResponderTerminate: (evt, gestureState) => {},
        
        onResponderSingleTapConfirmed: (evt, gestureState) => {
  
                this.props.dltGate();
          
         //   console.log(gestureState.doubleTapUp,"double tap")
        },
        
        moveThreshold: 2,
        debug: false
        
      });
       
    this.gestureResponder7 = createResponder({
        onStartShouldSetResponder: (evt, gestureState) => true,
        onStartShouldSetResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetResponder: (evt, gestureState) => true,
        onMoveShouldSetResponderCapture: (evt, gestureState) => true,
        onResponderGrant: (evt, gestureState) => {
       },
        onResponderMove: (evt, gestureState) => {
        },
        onResponderTerminationRequest: (evt, gestureState) => true,
        onResponderRelease: (evt, gestureState) => {
             /*   if(gestureState.doubleTapUp){
                        console.log('DOUBLE TAPP')
                  this.tempMenuVal=this.state.StartX;
                  this.temt=this.state.StartY;
                  this.t=this.state.doubleTap
                 
                  this.setState({
                          doubleTap:(this.t)?false:true,
                        menuPosition:(this.tempMenuVal<160)?10:170,
                        menuYval:(this.temt<280)?80:350,
                          
                  })
                 
                }
      */
        },
        onResponderTerminate: (evt, gestureState) => {},
        
        onResponderSingleTapConfirmed: (evt, gestureState) => {
  console.log('PRESSSEND xNORR')
        // this.props.dltGate('And');
        this.setState({V:false,})
         //   console.log(gestureState.doubleTapUp,"double tap")
        },
        
        moveThreshold: 2,
        debug: false
        
      });
      
      
      
      
  }
  tem=()=>{
          if(this.state.V)

{
        return(   <G>
                  
             
              
                <G >
                <SmallDropDown yVal={this.state.menuYval+40} xVal={this.state.menuPosition} gateName={'And Gate'}/>
                </G>
                <G >
                <SmallDropDown yVal={this.state.menuYval+60} xVal={this.state.menuPosition} gateName={'Or Gate'}/>
                </G>
                <G >
                <SmallDropDown yVal={this.state.menuYval+80} xVal={this.state.menuPosition} gateName={'Not Gate'}/>
                </G>
                <G >
                <SmallDropDown yVal={this.state.menuYval+100} xVal={this.state.menuPosition} gateName={'Nand Gate'}/>
                </G>
                <G >
                <SmallDropDown yVal={this.state.menuYval+120} xVal={this.state.menuPosition} gateName={'Nor Gate'}/>
                </G>
                <G >
                <SmallDropDown yVal={this.state.menuYval+140} xVal={this.state.menuPosition} gateName={'Xor Gate'}/>
                </G>
                <G >
                <SmallDropDown yVal={this.state.menuYval+160} xVal={this.state.menuPosition} gateName={'Xnor Gate'}/>
                </G>
               
            
                </G>
          

        )
}        }

  render() {
    return (
    <G >
        
     {this.tem()}  
        
         </G>
    );
  }
}

export default PracticeScreen;
