import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableHighlight
} from 'react-native';
var t = require('tcomb-form-native');
import Style from '../style';



var Form = t.form.Form;

var Status = t.enums({
  NC :"Not Contacted",
  J :"Jewish",
  NJ:"Not Jewish",
  WA:"Wrong Address"


});

// here we are: define your domain model
var contactInfo = t.struct({
  firstName: t.maybe(t.String),               // an optional string
  lastName: t.String,  // a required string
  jewishProbability: t.Number,               // a required number
  address: t.String,              // a required string
  city: t.String,              // a required string
  state: t.maybe(t.String),               // an optional string
  zipCode: t.maybe(t.Number),                // an optional number
  newResident: t.maybe(t.Boolean),       // an optional boolean
  notes: t.maybe(t.String),              // an optional string
  status: Status



});



const options = {};

class EditContact extends Component   {
      /*   constructor(props) {
           super(props);
           if (this.props.contact == undefined) {
            // this.state = {value: {}};
            // return;
        //   }
           var Contact = this.navigation.state.params.person;
           var contactStatus;

           if(Contact.Status == "Jewish") {
             contactStatus = "J";
           } else if(Contact.Status == "Not Contacted") {
             contactStatus = "NC"
           } else if(Contact.Status == "Not Jewish") {
             contactStatus = "NJ";
           } else if(Contact.Status == "Wrong Address") {
             contactStatus = "WA";
           }
           this.state = {value: {firstName: Contact.firstName,
           lastName: Contact.lastName,
           jewishProbability: Contact.jewishProbability,
           address: Contact.address,              // a required string
           city: Contact.city,              // a required string
           state: Contact.state,               // an optional string
           zipCode: Contact.zipCode,                // an optional number
           newResident: Contact.newResident,       // an optional boolean
           notes: Contact.notes,              // an optional string
           status: contactStatus } };
         } */
         static navigationOptions = ({ navigation }) => ( {
        //   headerTitleStyle: { alignSelf: 'center' },
           title: navigation.state.params.title,

         });





      onPress = () =>  {

        // call getValue() to get the values of the form
        //var value = this.refs.form.getValue();
        return;


      };



       render() {

         if (this.props.navigation.state.params.person != undefined) {
         var Contact = this.props.navigation.state.params.person;
         var contactStatus;


         if(Contact.Status == "Jewish") {
           contactStatus = "J";
         } else if(Contact.Status == "Not Contacted") {
           contactStatus = "NC"
         } else if(Contact.Status == "Not Jewish") {
           contactStatus = "NJ";
         } else if(Contact.Status == "Wrong Address") {
           contactStatus = "WA";
         }
         this.state = {value: {firstName: Contact.firstName,
         lastName: Contact.lastName,
         jewishProbability: Contact.jewishProbability,
         address: Contact.address,              // a required string
         city: Contact.city,              // a required string
         state: Contact.state,               // an optional string
         zipCode: Contact.zipCode,                // an optional number
         newResident: Contact.newResident,       // an optional boolean
         notes: Contact.notes,              // an optional string
         status: contactStatus } };
       } else {
         this.state = {value: {}};

       }
         return (
           <View style={Style.container}>
           <ScrollView>

           <Form
             ref="form"
             type={contactInfo}
             value={this.state.value}
             options={options}
           />

             <TouchableHighlight style={Style.button} onPress={this.onPress} underlayColor='#99d9f4'>
               <Text style={Style.buttonText}>Save Changes</Text>
             </TouchableHighlight>
             </ScrollView>
           </View>
         );
       }
     }




export default EditContact;
