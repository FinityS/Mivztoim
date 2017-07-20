/**
 * Mivztoim App
 * https://github.com/FinityS/Mivztoim.git
 * Avraham Sedaghat
 */

import React, { Component } from 'react';
import {
  Picker,
  Button,
  View
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import style from '../style';



class GroupPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {group: "1"};
  }
  static navigationOptions = {
    title: 'Pick a group',
      drawerLabel: 'Pick a group',
      headerLeft: null,
  }

  onPress = () =>  {


  }




  render() {
    return(
      <View>
    <Picker
  selectedValue={this.state.group}
  onValueChange={(itemValue, itemIndex) => this.setState({group: itemValue})}>
  <Picker.Item label="Group One" color="blue" value="1" />
  <Picker.Item label="Group Two" color="red" value="2" />
  <Picker.Item label="Group Three" color="green" value="3" />
</Picker>
<Button
   onPress={this.onPress}
   title="Load Group"

   />
</View>
);


  }


}


export default GroupPicker;
