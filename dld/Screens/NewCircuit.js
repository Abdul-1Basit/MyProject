import React, { Component } from 'react';
import { View, Animated,StatusBar,Modal , TouchableOpacity,SafeAreaView,ScrollView, ImagePickerIOS, NavigatorIOS} from 'react-native';
import {Svg,Rect,Line,Text,G} from 'react-native-svg';
import NotGate from './NotGate';
import Practice from './Practice'
import Nand from './Nand'
import XorGate from './XorGate'
import Nor from './Nor'
import XnorGate from './XnorGate'
import AndGate from './AndGate';
import OrGate from './OrGate';
import {createResponder} from 'react-native-gesture-responder';

import { AppLoading } from 'expo';
import { Container, Header, Title, Content,Button, Icon, Left, Body,Right} from "native-base";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import NorGate from './Nor';
import OnInput from './OnInput'
import Offtput from './OffInput'
import PracticeScreen from '../Folder/PracticeScreen'
import Output from './Output'
import ModalWork from './ModalWork'
import DFlipFlop from '../FlipFlops/DFlipFlop'
import TFlipFlop from '../FlipFlops/TFlipFlop'
import Clock from '../FlipFlops/Clock'

const component1 = () => <G> <OnInput setIn={this.setInputs.bind(this)} del={this.deletepreviousAddNew.bind(this)}  />
</G>
  const component2 = () => <G><NotGate/></G>
  const component3 = () => <G><Nand/></G>


class NewCircuit extends Component {
  constructor(props) {
    super(props);
   this.state={
     Outputs:[],
     Inputs:[],
     GateInputs:[],
     GateOutputs:[],
     isVisibile:false,
     bodyContents:[],
   }
   
  
  }
  static navigationOptions = {
    header: null,
  };
  
  componentWillMount(){
    this.gestureResponder = createResponder({
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
      
      },
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
        this.vbl=this.state.isVisibile;
        this.setState({
          isVisibile:(this.vbl)?false:true
        })
      },
      
      moveThreshold: 2,
      debug: false
    });
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
      
      },
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
        console.log("gasda")
       this.eu=this.state.bodyContents;
       this.eu.push(<OnInput setIn={this.setInputs.bind(this)} del={this.deletepreviousAddNew.bind(this)}  />)
       this.setState({
         bodyContents:this.eu
       })
       
      },
      
      moveThreshold: 2,
      debug: false
    });
    this.gestureResponder2 = createResponder({
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
      
      },
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
        this.eu=this.state.bodyContents;
        this.eu.push(   <Output setIn={this.setInputs.bind(this)} del={this.deletepreviousAddNew.bind(this)}  />
      
        )
        this.setState({
          bodyContents:this.eu
        })
       
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
      
      },
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
        this.eu=this.state.bodyContents;
        this.eu.push(  <AndGate Inputs={this.state.Inputs} Outputs={this.state.Outputs} GateInputs={this.state.GateInputs} GateOutputs={this.state.GateOutputs} deleteOutput={this.deletepreviousOutput.bind(this)} firstlyAssign={this.firstAssignmentOfOutput.bind(this)}/>
        )
        this.setState({
          bodyContents:this.eu
        })
      },
      
      moveThreshold: 2,
      debug: false
    });
    this.gestureResponder4 = createResponder({
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
      
      },
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
        this.eu=this.state.bodyContents;
        this.eu.push(  <OrGate Inputs={this.state.Inputs} Outputs={this.state.Outputs} GateInputs={this.state.GateInputs} GateOutputs={this.state.GateOutputs} deleteOutput={this.deletepreviousOutput.bind(this)} firstlyAssign={this.firstAssignmentOfOutput.bind(this)}/>
        )
        this.setState({
          bodyContents:this.eu
        })
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
      
      },
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
        this.eu=this.state.bodyContents;
        this.eu.push(	<NotGate  Inputs={this.state.Inputs} Outputs={this.state.Outputs} GateInputs={this.state.GateInputs} GateOutputs={this.state.GateOutputs} deleteOutput={this.deletepreviousOutput.bind(this)} firstlyAssign={this.firstAssignmentOfOutput.bind(this)}/>
        )
        this.setState({
          bodyContents:this.eu
        })
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
      
      },
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
        this.eu=this.state.bodyContents;
        this.eu.push(  <Nand Inputs={this.state.Inputs} Outputs={this.state.Outputs} GateInputs={this.state.GateInputs} GateOutputs={this.state.GateOutputs} deleteOutput={this.deletepreviousOutput.bind(this)} firstlyAssign={this.firstAssignmentOfOutput.bind(this)}/>
        )
        this.setState({
          bodyContents:this.eu
        })
      },
      
      moveThreshold: 2,
      debug: false
    });
    this.gestureResponder7= createResponder({
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
      
      },
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
        this.eu=this.state.bodyContents;
        this.eu.push(  <Nor Inputs={this.state.Inputs} Outputs={this.state.Outputs} GateInputs={this.state.GateInputs} GateOutputs={this.state.GateOutputs} deleteOutput={this.deletepreviousOutput.bind(this)} firstlyAssign={this.firstAssignmentOfOutput.bind(this)}/>
        )
        this.setState({
          bodyContents:this.eu
        })
      },
      
      moveThreshold: 2,
      debug: false
    });
    this.gestureResponder8 = createResponder({
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
      
      },
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
        this.eu=this.state.bodyContents;
        this.eu.push(  <XorGate Inputs={this.state.Inputs} Outputs={this.state.Outputs} GateInputs={this.state.GateInputs} GateOutputs={this.state.GateOutputs} deleteOutput={this.deletepreviousOutput.bind(this)} firstlyAssign={this.firstAssignmentOfOutput.bind(this)}/>
        )
        this.setState({
          bodyContents:this.eu
        })
      },
      
      moveThreshold: 2,
      debug: false
    });
    this.gestureResponder9 = createResponder({
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
      
      },
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
        this.eu=this.state.bodyContents;
        this.eu.push(  <XnorGate Inputs={this.state.Inputs} Outputs={this.state.Outputs} GateInputs={this.state.GateInputs} GateOutputs={this.state.GateOutputs} deleteOutput={this.deletepreviousOutput.bind(this)} firstlyAssign={this.firstAssignmentOfOutput.bind(this)}/>
        )
        this.setState({
          bodyContents:this.eu
        })
      },
      
      moveThreshold: 2,
      debug: false
    });
    this.gestureResponder10 = createResponder({
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
      
      },
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
        console.log("gasda")
       this.eu=this.state.bodyContents;
       this.eu.push(   <Clock setIn={this.setInputs.bind(this)} del={this.deletepreviousAddNew.bind(this)}  />
       )
       this.setState({
         bodyContents:this.eu
       })
       
      },
      
      moveThreshold: 2,
      debug: false
    });
    this.gestureResponder11 = createResponder({
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
      
      },
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
        console.log("gasda")
       this.eu=this.state.bodyContents;
       this.eu.push(  <DFlipFlop  Inputs={this.state.Inputs} Outputs={this.state.Outputs} GateInputs={this.state.GateInputs} GateOutputs={this.state.GateOutputs} deleteOutput={this.deletepreviousOutput.bind(this)} firstlyAssign={this.firstAssignmentOfOutput.bind(this)}/>
       )
       this.setState({
         bodyContents:this.eu
       })
       
      },
      
      moveThreshold: 2,
      debug: false
    });
    this.gestureResponder12 = createResponder({
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
      
      },
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
        console.log("gasda")
       this.eu=this.state.bodyContents;
       this.eu.push(  <TFlipFlop  Inputs={this.state.Inputs} Outputs={this.state.Outputs} GateInputs={this.state.GateInputs} GateOutputs={this.state.GateOutputs} deleteOutput={this.deletepreviousOutput.bind(this)} firstlyAssign={this.firstAssignmentOfOutput.bind(this)}/>
       )
       this.setState({
         bodyContents:this.eu
       })
       
      },
      
      moveThreshold: 2,
      debug: false
    });
    
  }
  setGateInputs=(a,b,c)=>{
    this.temp=this.state.GateInputs;
    this.temp.push({a,b,c});
    this.setState({GateInputs:this.temp})
  }
setInputs=(a,b,c)=>{
  
  this.temp=this.state.Inputs;
  this.temp.push(a)
  this.temp.push(b)
  this.temp.push(c)
  
  
  this.setState({Inputs:this.temp})
  
  for (let i = 0; i <this.state.Inputs.length; i+=3) {
    console.log(this.state.Inputs[i],this.state.Inputs[i+1])
  }
}
saveGateOutputInState=(a,b,c)=>{
  this.temp=this.state.GateOutputs;
  this.temp.push(a)
  this.temp.push(b)
  this.temp.push(c)
  
  
  this.setState({GateOutputs:this.temp})
  
  for (let i = 0; i <this.state.GateOutputs.length; i+=3) {
    console.log('X:',this.state.GateOutputs[i],'Y:',this.state.GateOutputs[i+1],'Output',this.state.GateOutputs[i+2])
  }

}

setfalse=()=>{
  this.setState({
    isVisibile:false
  })
}
deletepreviousAddNew=(a,b,c,d,e)=>{
  for (let i = 0; i <this.state.Inputs.length; i+=3) {
    console.log(this.state.Inputs[i],this.state.Inputs[i+1],'in delete function of OnInput')
   // console.log(a,b,c,d,e)
    if(this.state.Inputs[i]==a&&this.state.Inputs[i+1]==b){
 // console.log(a,b,c,d,e)
 console.log('deleteinggg pevoirrruss')
      this.t=this.state.Inputs;
  this.t.splice(i,3,d,e,c)
  this.setState({Inputs:this.t})
      
    }
  }
}
deletepreviousOutput=(a,b,c,d,e)=>{
  console.log('in delete function for output')
  for (let i = 0; i <this.state.GateOutputs.length; i+=3) {
 //   console.log(this.state.GateOutputs[i],this.state.GateOutputs[i+1],'in Outputt function')
//console.log(a,b,c,d,e)
    if(this.state.GateOutputs[i]==a&&this.state.GateOutputs[i+1]==b){
//  console.log(a,b,c,d,e)
     //console.log(a,b,c,d,e)
      console.log(this.state.GateOutputs)
      this.t=this.state.GateOutputs;
  this.t.splice(i,3,d,e,c)
  this.setState({GateOutputs:this.t})
  console.log(this.state.GateOutputs)
      
    }
  }
}
firstAssignmentOfOutput=(a,b,c)=>{
  
  this.temp=this.state.GateOutputs;
  this.temp.push(a)
  this.temp.push(b)
  this.temp.push(c)
  
  
  this.setState({GateOutputs:this.temp})
  
  
}

showDropDownMenu=()=>{
  if(this.state.isVisibile){
  return(<G>
<G {...this.gestureResponder1}>
<Practice yVal={60} xVal={60} gateName={'ON Input'}/>
</G>

<G {...this.gestureResponder2}>
<Practice yVal={90} xVal={60} gateName={'Output'}/>
</G>
<G {...this.gestureResponder3}>
<Practice yVal={120} xVal={60} gateName={'And Gate'}/>
</G>
<G {...this.gestureResponder4}>
<Practice yVal={150} xVal={60} gateName={'Or Gate'}/>
</G>
<G {...this.gestureResponder5}>
<Practice yVal={180} xVal={60} gateName={'Not Gate'}/>
</G>
<G {...this.gestureResponder6}>
<Practice yVal={210} xVal={60} gateName={'Nand Gate'}/>
</G>
<G {...this.gestureResponder7}>
<Practice yVal={240} xVal={60} gateName={'Nor Gate'}/>
</G>
<G {...this.gestureResponder8}>
<Practice yVal={270} xVal={60} gateName={'Xor Gate'}/>
</G>
<G {...this.gestureResponder9}>
<Practice yVal={300} xVal={60} gateName={'Xnor Gate'}/>
</G>
<G {...this.gestureResponder10}>
<Practice yVal={330} xVal={60} gateName={'Clock'}/>
</G>
<G {...this.gestureResponder11}>
<Practice yVal={360} xVal={60} gateName={'D Flipflop'}/>
</G>
<G {...this.gestureResponder12}>
<Practice yVal={390} xVal={60}gateName={'T Flipflop'}/>
</G>
</G>
  )
}
return(
  <G>
</G>
)
}



  render() {/*
    if (!this.state.isReady) {
      return <AppLoading />;
    }
*/
    return (<View >
      <Animated.View>
      <Svg width='100%' height='100%'>
          <G {...this.gestureResponder}> 

          <Rect
            x={60}
            y={30}
            width="200"
            height="30"
            stroke="black"
            strokeWidth="3"
            fill="#D9F4F9"
          />
<Text x={145} y={30+24} stroke="black" fontSize="25"
    fontWeight="bold" fill="#0792A7" textAnchor="middle">
     TOOLS
    </Text>
    
    <Line  x1={200} y1={40} x2={220} y2={50} stroke="black" strokeWidth="2"/>
               <Line  x1={220} y1={50} x2={240} y2={40} stroke="black" strokeWidth="2"/>
          </G>
      
      <G>
      <OnInput setIn={this.setInputs.bind(this)} del={this.deletepreviousAddNew.bind(this)}  />
      
      </G>
          <G>
        
        {this.state.bodyContents.map((userData) => {
    return(
      <G>
        {userData}
      </G>
)})}
      {this.showDropDownMenu()}
           
          </G>
      
        </Svg></Animated.View>
    </View>
    );
  }
}

export default NewCircuit;
