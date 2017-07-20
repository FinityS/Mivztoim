import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Switch

} from 'react-native';
import Style from '../style';
import EditContact from './EditContact';

//  Must implement Distance!!, new resident, status

class ContactDetails extends Component {




      onPress = (Contact) =>  {

    //   var route = {title: "EditContact", Component: EditContact, prop: Contact}

    //   this.props.navigator.push(route);




      };




       render() {
    var Contact = this.props.contact;


         return (
           <View style={Style.container}>
             {/* display */}
             <Text> {Contact.firstName}
            </Text>
            <Text> {Contact.lastName}
           </Text>
           <Text> {Contact.jewishProbability}
          </Text>
          <Text> {Contact.address}
         </Text>
         <Text> {Contact.city}
        </Text>
        <Text> {Contact.state}
       </Text>
       <Text> {Contact.zipCode}
      </Text>

      <Text> {Contact.notes}
     </Text>
             <TouchableHighlight style={Style.button} onPress={() => this.onPress(Contact)} underlayColor='#99d9f4'>
               <Text style={Style.buttonText}>Edit Contact</Text>
             </TouchableHighlight>
           </View>
         );
       }
     }




export default ContactDetails;
