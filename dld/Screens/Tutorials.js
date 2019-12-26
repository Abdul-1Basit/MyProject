import React, { Component } from 'react';
import { View, Text,Image ,ScrollView} from 'react-native';
import GatesTutorials from './GatesTutorials';
class Tutorials extends Component {
 GatesList=
    [
    {
       GateDesign:"../assets/images/36470.png",
        GateTable:"../assets/images/add.png",
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
                this.GatesList.map((item,key)=>(
                    <View key={key}>
                        <GatesTutorials ImageUrl={item.GateDesign} Table={item.GateTable} Title={item.Title} /> 

                    </View>
                )
                )
            }
        </ScrollView>
    </View>
      </View>
    );
  }
}

export default Tutorials;
