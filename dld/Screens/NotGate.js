import React, { Component } from 'react';
import { View, Text,Animated } from 'react-native';
import {Svg,Path,Circle,G,Line} from 'react-native-svg';
class NotGate extends Component {
  constructor(props) {
    super(props);
    this.StartPointX=70;
      this.StartPointY=70;
this.pathData=["M",this.StartPointX,this.StartPointY,
"L",this.StartPointX,this.StartPointY+30*2,
"L",this.StartPointX+15*2,this.StartPointY+15*2,
"L",this.StartPointX,this.StartPointY,
 "M",this.StartPointX-15*2,this.StartPointY+15*2,
 "L",this.StartPointX,this.StartPointY+15*2,
].join(" ");

}

  render() {
    return (
    <G>
        <Path
                d={this.pathData}
                strokeWidth="3"
                />
                <Line  x1={this.StartPointX-15*2} y1={this.StartPointY+15*2} x2={this.StartPointX} y2={this.StartPointY15*2} stroke="black" strokeWidth="2"/>
          <Circle cx={this.StartPointX-15*2} cy={this.StartPointX+15*2} r="11" fill="red" />
          <Circle cx={this.StartPointX+15*2} cy={this.StartPointX+15*2} r="11" fill="red" />
          
          </G>
      );
  }
}

export default NotGate;
