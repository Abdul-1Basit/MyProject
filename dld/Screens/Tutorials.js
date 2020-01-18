import React, { Component } from 'react';
import { View, Text,Image ,ScrollView,StyleSheet} from 'react-native';
import GatesTutorials from './GatesTutorials';
class Tutorials extends Component {
 GatesList=
    [
    {
       GateDesign:"../assets/images/36470.png",
        GateTable:"../assets/images/andgate.jpeg",
       Title:"AND GATE"
    },
    {
        GateDesign:"../assets/images/36470.png",
         GateTable:"../assets/images/add.png",
        Title:"OR GATE"
     },
     {
        GateDesign:"../assets/images/36470.png",
         GateTable:"../assets/images/add.png",
        Title:"NOT GATE"
     },
     {
        GateDesign:"../assets/images/36470.png",
         GateTable:"../assets/images/add.png",
        Title:"NAND GATE"
     },
     {
        GateDesign:"../assets/images/36470.png",
         GateTable:"../assets/images/add.png",
        Title:"NOR GATE"
     },
     {
        GateDesign:'../assets/images/36470.png',
         GateTable:"../assets/images/add.png",
        Title:"XOR GATE"
     },
     
     {
        GateDesign:"../assets/images/36470.png",
         GateTable:"../assets/images/add.png",
        Title:"XNOR GATE"
     }
    ]

  render() {
    return (
      <View >
          
    <View style={{}}>
        <ScrollView
        horizontal={true}
        
        >
            {
                
                  <View style={{paddingRight:20,width:'100%',height:'100%',paddingLeft:50,borderWidth:0.3,borderColor:'#dddddd'}}>
                  <View >
                  
                  <Text style={styles.Text}>And Gate</Text>
                  </View>
                  <View>
                     <Image source={require('../assets/images/andgate.jpeg')} style={{width:250,height:250,paddingTop:20}}/>
                  </View>
               
                </View>
                
                
            }
        </ScrollView>
    </View>
      </View>
    );
  }
}

export default Tutorials;
const styles = StyleSheet.create({
   Text:{
       alignContent:'center',justifyContent:'center',paddingLeft:50,
       fontWeight:'bold',
       fontFamily:'Times New Roman',
       fontSize:40,
       paddingTop:20,
       
       width:'100%',
   
   },
   
   });