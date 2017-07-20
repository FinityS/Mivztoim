import { DrawerNavigator,  NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {
  Alert,
  TouchableHighlight,
  View,
  Text
} from 'react-native';
import { getNavigationOptionsWithAction, getDrawerNavigationOptions, getDrawerConfig } from './navigation';
import NavBarItem from './NavBarItem';
import GroupPicker from './GroupPicker';
import ContactList from './ContactList';
import Mivztoim from '../Mivztoim';
import Map from './Map';


const getDrawerItem = navigation => (  //Apparently takes care of Drawer open button, must receive navigation parameter
  <NavBarItem  // this component is basically just the icon
    iconName="bars"
    onPress={() => {
      if (navigation.state.index === 0) {
        // check if drawer is not open, then only open it
        navigation.navigate('DrawerOpen');
      } else {
        // else close the drawer
        navigation.navigate('DrawerClose');
      }
    }}
  />
);

const logOut = navigation => (  //Apparently takes care of Drawer open button, must receive navigation parameter
  <Text  // this component is basically just the icon
    onPress={() => {
      Alert.alert(
 'Log Out',
 'Are you sure you want to log out?',
 [
   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'Yes', onPress: () =>{
      const resetAction = NavigationActions.reset({
    index: 0,
   actions: [
    NavigationActions.navigate({ routeName: 'Login'})
    ]
  });
  navigation.dispatch(resetAction);}},
 ] )
    }}
  > Log Out </Text>
);

const getDrawerIcon = (iconName, tintColor) => <Icon name={iconName} size={20} color={tintColor} />;  //have to check out Icon

const homeDrawerIcon = ({ tintColor }) => getDrawerIcon('home', tintColor);
const userDrawerIcon = ({ tintColor }) => getDrawerIcon('user', tintColor);
const csDrawerIcon = ({ tintColor }) => getDrawerIcon('user-md', tintColor);

const homeNavOptions = getDrawerNavigationOptions('Groups', 'blue', 'white', homeDrawerIcon);
const userNavOptions = getDrawerNavigationOptions('Contact List', 'blue', 'white', userDrawerIcon);
const csNavOptions = getDrawerNavigationOptions('Map', 'blue', 'white', csDrawerIcon);

const Drawer = DrawerNavigator({
   GroupPicker  : { screen: GroupPicker, navigationOptions: homeNavOptions },
  ContactList: { screen: ContactList, navigationOptions: userNavOptions },
 Map: { screen: Map, navigationOptions: csNavOptions },
}, getDrawerConfig(300, 'left'));

Drawer.navigationOptions = ({ navigation }) => getNavigationOptionsWithAction('Mivztoim','blue', 'white', getDrawerItem(navigation), logOut(navigation) );

export default Drawer;
