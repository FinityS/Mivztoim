/**
 * Mivztoim App
 * https://github.com/FinityS/Mivztoim.git
 * Avraham Sedaghat
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './components/Login';
import GroupPicker from './components/GroupPicker';
import MainDrawer from './components/MainDrawer';
import Drawer from './components/Drawer';
import EditContact from './components/EditContact';



const Mivztoim = StackNavigator({
  Login: { screen: Login },
  GroupPicker: {screen: GroupPicker},
  Drawer: {screen: Drawer},
  Edit: {screen: EditContact},
});

export default Mivztoim;
