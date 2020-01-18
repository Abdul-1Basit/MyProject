
import React, { Component } from 'react';
import { View } from 'react-native';
import {Svg,G,Line,Circle,TSpan,Path,Image,Text} from 'react-native-svg';
import {createResponder} from 'react-native-gesture-responder';
import NotGate from '../Screens/NotGate'


const dropDownUnClicked=<G > 
<Image
x="222"
y="-45"
width="100"
height="110"
opacity="0.5"
href={require('../assets/images/Tools.png')}

/>
</G>

class PracticeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pathData:dropDownUnClicked,
        tap:false,
        arrayofObjects:[],

    };
  //  this.st=false;
  }
  componentWillMount() {
    this.gestureResponder = createResponder({
      onStartShouldSetResponder: (evt, gestureState) => true,
      onStartShouldSetResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetResponder: (evt, gestureState) => true,
      onMoveShouldSetResponderCapture: (evt, gestureState) => true,
      onResponderGrant: (evt, gestureState) => {},
      onResponderMove: (evt, gestureState) => {},
      onResponderTerminationRequest: (evt, gestureState) => true,
      onResponderRelease: (evt, gestureState) => {},
      onResponderTerminate: (evt, gestureState) => {},
      
      onResponderSingleTapConfirmed: (evt, gestureState) => {
         this.st=this.state.tap;
         console.log("old state",this.state.tap)
         this.setState({
             tap:(this.st)?false:true
         })
         console.log("new state",this.state.tap)
         this.state.arrayofObjects.push(<NotGate/>)

      },
      
      moveThreshold: 2,
      debug: false
    });
  }

  render() {
    return (
      <G>
          <G>
              {this.state.arrayofObjects}
          </G>
         <G  {...this.gestureResponder}> 
  
         <Image
                x="222"
                y="-45"
                width="100"
                height="100"
                opacity="0.5"
                href={require('../assets/images/toolsUp.png')}

                />
  
  </G>
  <G>
                    <G >
                    <Text x="235" y="48" fill="red" fontSize="25">
                            Or 
                    </Text>
                    </G>
                    <G>
                    <Text x="235" y="71" fill="red" fontSize="25">
                            Not 
                    </Text>
                    </G>
                    <G>
                    <Text x="235" y="94" fill="red" fontSize="25">
                            Xor 
                    </Text>
                    </G>
                    <G>
                    <Text x="235" y="117" fill="red" fontSize="25">
                            Xnor 
                    </Text>
                    </G>
                    <G>
                    <Text x="235" y="140" fill="red" fontSize="25">
                            Nand 
                    </Text>
                    </G>
                    <G>
                    <Text x="235" y="163" fill="red" fontSize="25">
                            Nor 
                    </Text>
                    </G>
                    <G>
                    <Text x="235" y="186" fill="red" fontSize="25">
                            And 
                    </Text>
                    </G>
  </G>
      </G>
    );
  }
}

export default PracticeScreen;
