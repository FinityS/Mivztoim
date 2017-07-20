/**
 * Mivztoim App
 * https://github.com/FinityS/Mivztoim.git
 * Avraham Sedaghat
 */

import React, { Component } from 'react';
import {
  Alert,
  TouchableHighlight,
  View,
  Text
} from 'react-native';
import { DrawerNavigator, NavigationActions } from 'react-navigation';
import style from '../style';
import GroupPicker from './GroupPicker';


const MainDrawer = DrawerNavigator({
  GroupPicker: {
    screen: GroupPicker,
  },


}, {

});




export default MainDrawer;
