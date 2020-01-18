/*import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert,Animated} from 'react-native';
import AndGate from './AndGate';
import OrGate from './OrGate';
import {Svg,G,Line,Circle,Path} from 'react-native-svg';
import {createResponder} from 'react-native-gesture-responder';
import Nor from './Nor';


export default class ModalWork extends Component {
 constructor(props){
    super(props)
    this. state = {
    modalVisible: true,
    data:[],
  };}

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  addAND=()=>{
this.state.data.push(<Nor/>)
  }
  addOR=()=>{
      this.state.data.push(<OrGate/>)
  }
  render() {
    return (
      <Animated.View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              
              <View style={{padding:20}}><TouchableHighlight onPress={this.addAND}>
                  <View>
                      <Text>AND GATE</Text>
                  </View>
              </TouchableHighlight>
              <View style={{padding:20}}>
              <TouchableHighlight onPress={this.addOR}>
                  <View>
                      <Text>OR GATE</Text>
                  </View>
              </TouchableHighlight>
              </View>
              </View>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{marginTop:20}}>  Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
        <Animated.View>        
            <Svg width={400} height={800} >
          <G>
          {this.state.data}
          </G>
        </Svg>
        </Animated.View>

      </Animated.View>
    );
  }
}*/
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ModalWork extends Component {
  constructor(props) {
  super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text>{this.props.Inputs.length} </Text>
      </View>
    );
  }
}

export default ModalWork;
