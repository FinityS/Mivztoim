import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ListView,
  TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import Style from '../style';
import data from '../contacts.json';
import ContactDetails from './ContactDetails';
import EditContact from './EditContact';
import ActionButton from 'react-native-action-button';



class ContactList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),  //hard coded data for now with hard coded distance...
    };

  }











  onPress = (contact) =>  {



  //  var route = {title: 'ContactDetails', Component: ContactDetails, prop: contact};

//    this.props.navigator.push(route);

const navigateAction = NavigationActions.navigate({

routeName: 'Edit',

params: {   title: "Edit Contact",
            person: contact},

})

this.props.navigation.dispatch(navigateAction)





  };

  newContact = () => {

    const navigateAction = NavigationActions.navigate({

    routeName: 'Edit',

    params: {   title: "New Contact"},



    })

    this.props.navigation.dispatch(navigateAction)



  };



  renderRow = (contact) =>  {
    return (
      <TouchableHighlight onPress={() => this.onPress(contact)}>
      <View style= {Style.row}>
       <View style = {Style.info}>
          <Text style= {Style.name}>{contact.firstName} {contact.lastName} </Text>
           {contact.Status != "Jewish" && <Text style= {Style.name}> ({contact.jewishProbability}%) </Text> }



          <Text style= {Style.address}>{contact.address},{contact.city},{contact.state} {contact.zipCode}</Text>
          </View>
      <View style = {Style.total}>
          <Text style ={Style.status}>{contact.Status}</Text>
          <Text style ={Style.distance}>{contact.distance} miles</Text>
          </View>

          </View>
          </TouchableHighlight>


    );

  };

  render() {
    const Footer = (props) => (
    <View style={Style.container}>
      <TouchableOpacity style={Style.button} onPress={this.newContact}>
        <Text style={Style.text}>New Contact</Text>
      </TouchableOpacity>
    </View>
  );   //<Text style = {Style.listTitle}>Contacts</Text>  renderFooter={() => <Footer />}
    return (
      <View style = {Style.mainContainer}>

      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}

      />
      <ActionButton
       buttonColor="rgba(231,76,60,1)"
        onPress= { this.newContact}
/>

      </View>
    );
  }
}

export default ContactList;
