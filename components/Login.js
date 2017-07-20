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
import { NavigationActions } from 'react-navigation';
import style from '../style';

var t = require('tcomb-form-native');


var Form = t.form.Form;

// here we are: define your domain model
var LoginCreds = t.struct({
  username: t.String,              // a required string
  password: t.String              // a required string

});

const options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true  //obscure the password
    }
  }
};

class Login extends Component {
  static navigationOptions = {
    headerTitleStyle: { alignSelf: 'center' },
    title: 'Mivztoim App',
  }


      onPress = () =>  {

        // call getValue() to get the values of the form
        var value = this.refs.form.getValue();

        // Using Dummy Log in for now with any password that is not blank
        if((value != null) && (value.username.trim() == "Finity") )
        {

          const resetAction = NavigationActions.reset({
          index: 0,
         actions: [
          NavigationActions.navigate({ routeName: 'Drawer'})
          ]
        });
          this.props.navigation.dispatch(resetAction);

          //Navigate to Picker Menu
      //    this.props.navigation.navigate('MainDrawer');

        } else {
          //incorrect Log in name
          Alert.alert(
  'Login Failed',
  'Please check your username and password.',
  [
    {text: 'OK', onPress: () => console.log('OK Pressed')}
  ] )
        }






      };



       render() {
         return (
           <View style={style.container}>
             {/* display */}
             <Form
               ref="form"
               type={LoginCreds}
               options={options}
             />
             <TouchableHighlight style={style.button} onPress={this.onPress} underlayColor='#99d9f4'>
               <Text style={style.buttonText}>Login</Text>
             </TouchableHighlight>
           </View>
         );
       }
     }




export default Login;
