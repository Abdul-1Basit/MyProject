import React, { Component } from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';

export default class GatesTutorials extends Component {

  render() {
    return (
        <View style={{paddingRight:50,width:'100%',height:'100%',paddingLeft:50,borderWidth:0.3,borderColor:'#dddddd'}}>
        <View >
        
        <Text style={styles.Text}>{this.props.Title}</Text>
        </View>
     
        <View >
        <Image source={this.props.ImageUrl} style={{width:250,height:250}}/>
        </View>

        <View>
        <Image source={this.props.Table} style={{width:250,height:250}}/>
            
        </View>   
         </View>
    );
  }
}
const styles = StyleSheet.create({
Text:{
    alignContent:'center',justifyContent:'center',paddingLeft:50,
    fontWeight:'bold',
    fontFamily:'Times New Roman',
    fontSize:30,
    width:'100%',

},

});