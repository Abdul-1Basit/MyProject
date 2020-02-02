import React, { Component } from 'react';
import { View, Animated,StatusBar,Modal,Button ,Text, TouchableOpacity,SafeAreaView,ScrollView, ImagePickerIOS, NavigatorIOS} from 'react-native';
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

import { AppLoading } from 'expo';
import { Container, Header, Title, Content, Icon, Left, Body,Right} from "native-base";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import NorGate from './Nor';
import OnInput from './OnInput'
import Offtput from './OffInput'
import PracticeScreen from '../Folder/PracticeScreen'
import Output from './Output'
import ModalWork from './ModalWork'

const component1 = () => <G><OrGate/></G>
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
  
  componentWillMount(){
    //Drawer.
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
    console.log(a,b,c,d,e)
    if(this.state.Inputs[i]==a&&this.state.Inputs[i+1]==b){
  console.log(a,b,c,d,e)
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





contentAdd=()=>{
  console.log('in content funcionts')
  this.faltuValue=this.state.bodyContents;
  
  this.faltuValue.push( <OnInput setIn={this.setInputs.bind(this)} del={this.deletepreviousAddNew.bind(this)}  />
       

   )
   this.faltuValue.push(   <OrGate Inputs={this.state.Inputs} Outputs={this.state.Outputs} GateInputs={this.state.GateInputs} GateOutputs={this.state.GateOutputs} deleteOutput={this.deletepreviousOutput.bind(this)} firstlyAssign={this.firstAssignmentOfOutput.bind(this)}/>
   
     )
     this.faltuValue.push(   <NotGate  Inputs={this.state.Inputs} Outputs={this.state.Outputs} GateInputs={this.state.GateInputs} GateOutputs={this.state.GateOutputs} deleteOutput={this.deletepreviousOutput.bind(this)} firstlyAssign={this.firstAssignmentOfOutput.bind(this)}/>
 
       )
   
   this.setState({
     bodyContents:this.faltuValue
   })
}

  render() {/*
    if (!this.state.isReady) {
      return <AppLoading />;
    }
*/
    return (<View >
       <Container>
        <Header style={{height:60}}>
        
          
         
          
          <Button
  onPress={() => {
   console.log('buttons')
  }}
  title="Show Gates"
/>

      <ScrollView horizontal={true}>      
        <View style={{height:20}}>
          <Button 
                onPress={this.contentAdd}
                title="And Gate"
              />
 <Button 
                onPress={this.contentAdd}
                title=" Gate"
              />
               <Button 
                onPress={this.contentAdd}
                title=" Gatasdsadse"
              />
               <Button 
                onPress={this.contentAdd}
                title="wqe"
              />
</View>



        </ScrollView>
      <Body>
          </Body>
          <Right>
          
          </Right>
        </Header>
      </Container>
      <Animated.View>
      </Animated.View>
      <Animated.View>
      <Svg width='100%' height='100%'>
     {this.state.bodyContents}
     {console.log(this.state.bodyContents)}
         </Svg></Animated.View>
    </View>
    );
  }
}

export default NewCircuit;
