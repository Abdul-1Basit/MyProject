import React, { Component } from 'react';
import { View, Text,Image ,ScrollView,StyleSheet} from 'react-native';
import GatesTutorials from './GatesTutorials';
class Tutorials extends Component {
   constructor(props){
      super(props);
 this.state={
   
       GateDesign1:"../assets/images/andGate.png",
        GateTable1:"../assets/images/AndTb.jpeg",
       Title1:"AND GATE"
 
       ,
   
        GateDesign2:"../assets/images/OrGate.png",
         GateTable2:"../assets/images/OrTb.jpeg",
        Title2:"OR GATE"
     ,
    
        GateDesign3:"../assets/images/NotGate.png",
         GateTable3:"../assets/images/NotTb.jpeg",
        Title3:"NOT GATE"
      ,
    
        GateDesign4:"../assets/images/NandGate.png",
         GateTable4:"../assets/images/NandTb.jpeg",
        Title4:"NAND GATE"
      ,
    
        GateDesign5:"../assets/images/NorGate.png",
         GateTable5:"../assets/images/NorTb.jpeg",
        Title5:"NOR GATE"
      ,
    
        GateDesign6:'../assets/images/XorGate.png',
         GateTable6:"../assets/images/XorTb.jpeg",
        Title6:"XOR GATE"
      ,
     
    
        GateDesign7:"../assets/images/XnorGate.png",
         GateTable7:"../assets/images/XnorTb.jpeg",
        Title7:"XNOR GATE"
      
    ,
   }
}

  render() {
    return (
      <View >
          
    <View style={{}}>
        <ScrollView
        horizontal={true}
        
        >
            
      <View style={{paddingRight:40,width:'100%',height:'100%',paddingLeft:50,borderWidth:0.1,alignItems:'center',alignContent:'center',borderColor:'#dddddd'}}>
                  <View >
                  
                  <Text style={styles.Text} > AND GATE </Text>
                  </View>
                  <View style={{paddingRight:0,paddingLeft:5,paddingHorizonta:0,paddingTop:0, alignContent:'center'}}>
                     <Image source={require("../assets/images/adp.png")} style={{width:200,height:150,paddingRight:0,paddingTop:20}}/>
                  </View>
                  <View>
                     <Image source={require("../assets/images/AndTb.jpeg")} style={{width:200,height:290,paddingTop:20}}/>
                  </View>
               
                </View>
          
               
                
            
        </ScrollView>
    </View>
      </View>
    );
  }
}

export default Tutorials;
const styles = StyleSheet.create({
   Text:{
       alignContent:'center',justifyContent:'center',paddingLeft:0,
       fontWeight:'bold',
       fontFamily:'Times New Roman',
       fontSize:30,
       flex:0,
       paddingBottom:20,
       paddingTop:0,
       paddingRight:10,
       
       width:'100%',
   
   },
   
   });