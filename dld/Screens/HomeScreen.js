import React, { Component } from 'react';
import { Platform, StyleSheet, Text,Image, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
 
class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

    render() {
      return (
        <View style={styles.cls}>
          <View style={styles.Header}>
          
            <Text style={{paddingTop:40,paddingLeft:115,fontSize:35,alignItems:'center',alignContent:'center',justifyContent:'center'}}>DLD</Text>
            <Text style={{paddingLeft:50,paddingTop:10,fontSize:35}}> SIMULATOR</Text>
          </View>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <View style={{flex:1,flexDirection:'row',paddingBottom:20,paddingTop:20}}>
            <TouchableOpacity style={styles.buttons}
            onPress={()=>this.props.navigation.navigate('NewCircuit')}
            >
              <View>
                <Image source={require('../assets/images/newcircuit.png')} style={{width:120,height:120}}/>
                <View style={styles.buttonText}>
                <Text style={{paddingTop:10,fontSize:20}}>New Circuit</Text>
                </View>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttons}
            onPress={()=>this.props.navigation.navigate('Tutorials')}
            >
              <View>
                <Image source={require('../assets/images/tutorials.png')} style={{width:120,height:120}}/>
                <View style={styles.buttonText}>
                <Text style={{paddingTop:10,fontSize:20}}>Tutorials</Text>
                </View>
              </View>
            </TouchableOpacity>
         </View>
         
         <View style={{flex:2,flexDirection:'row',paddingTop:60,paddingRight:15,paddingBottom:0}}>
            <TouchableOpacity style={styles.buttons} onPress={()=>this.props.navigation.navigate('About')}>
              <View>
                <Image source={require('../assets/images/info.png')} style={{width:120,height:120}}/>
                <View style={styles.buttonText}>
                <Text style={{paddingTop:10,fontSize:20}}>About</Text>
                </View>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttons}>
              <View>
                <Image source={require('../assets/images/exit.png')} style={{width:120,height:120}}/>
                <View style={styles.buttonText}>
                <Text style={{paddingTop:10,fontSize:20}}>Exit</Text>
                </View>
              </View>
            </TouchableOpacity>
            </View>
         </View>
         </View>
        </View>
      );
    }
  }
  export default HomeScreen;
  const styles = StyleSheet.create({
    cls:{
      flex:1,
        width:'100%',
        height:'100%',
          },
    Header:{
      flex:1,
      flexDirection:'column',
      height:'25%',
      width:'100%',
      backgroundColor:'#DCDCDC',
      
    },
    HeaderText:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      paddingTop:15,
      fontWeight:'bold',
      fontSize:35,
      fontFamily:'Times New Roman',
  
    },
    body:{
      alignItems:'center',
      justifyContent:'center',
      height:'75%',
      width:'100%',
      backgroundColor:'#DEDEDE'
    },
    buttons:{
     padding:20,
     paddingHorizontal:15,
     paddingBottom:20
  
    },
    bodyContent:{
      paddingTop:10,
      paddingLeft:15,
    },
    buttonText:{
      alignItems:'center',
      justifyContent:'center',
      fontSize:20,
      fontFamily:'Bold'
    }
  });
    