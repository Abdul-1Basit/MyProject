import React, { Component } from 'react';
import { View, Animated,StatusBar,Modal ,Text, TouchableOpacity, ImagePickerIOS, NavigatorIOS} from 'react-native';
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
import { Container, Header, Title, Content, Button,Icon, Left, Body,Right} from "native-base";
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
     isVisibile:true,
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

changeModal=()=>{
  //alert("Pressed")
   
   this.setState({
     isVisibile:true
   })
   
}
setfalse=()=>{
  this.setState({
    isVisibile:false
  })
}
deletepreviousAddNew=(a,b,c,d,e)=>{
  for (let i = 0; i <this.state.Inputs.length; i+=3) {
    console.log(this.state.Inputs[i],this.state.Inputs[i+1],'in delete function')
    console.log(a,b,c,d,e)
    if(this.state.Inputs[i]==a&&this.state.Inputs[i+1]==b){
  console.log(a,b,c,d,e)
      this.t=this.state.Inputs;
  this.t.splice(i,3,d,e,c)
  this.setState({Inputs:this.t})
      
    }
  }
}
getPressed=()=>{
  alert("Bablu")
}
  render() {/*
    if (!this.state.isReady) {
      return <AppLoading />;
    }
*/
    return (<View >
       <Container>
        <Header>
          <Left>
          
          </Left>
          <Body>
            <Button transparent onPress={this.changeModal} >
              
              
            <Title>Tools</Title>
              <Icon name="arrow-down" />
            </Button>
          </Body>
          <Right>
          
          </Right>
        </Header>
      </Container>
      <Animated.View>
        <Modal visible={this.state.isVisibile}>
        <View style={{width:320,height:400,paddingTop:60,paddingHorizontal:10,alignItems:'center',justifyContent:'center'}}>
        <Title><Text style={{fontSize:24}}>GATES</Text> </Title>
          <Button transparent>
        <Title>And Gate</Title>
          </Button>
          
          <Button transparent>
        <Title>Or Gate</Title>
          </Button>
          
          <Button transparent>
        <Title>Not Gate</Title>
          </Button>
          
          <Button transparent >
        <Title>Xor Gate</Title>
          </Button>
          <Button transparent >
        <Title>Xnor Gate</Title>
          </Button>
          <Button transparent >
        <Title>Nor Gate</Title>
          </Button>
          <Button transparent >
        <Title>Nand Gate</Title>
          </Button>
          <Button transparent onPress={this.setfalse}>
        <Title><Text style={{color:'red'}}>Close X</Text></Title>
          </Button>
        </View>
        </Modal>
      </Animated.View>
      <Animated.View>
      <Svg width='100%' height='100%'>
        <OnInput setIn={this.setInputs.bind(this)} del={this.deletepreviousAddNew.bind(this)}  />
        <OnInput setIn={this.setInputs.bind(this)} del={this.deletepreviousAddNew.bind(this)}  />
       
       <OrGate Inputs={this.state.Inputs} Outputs={this.state.Outputs} GateInputs={this.state.GateInputs} GateOutputs={this.state.GateOutputs} />
      
       
        
         </Svg></Animated.View>
    </View>
    );
  }
}

export default NewCircuit;
