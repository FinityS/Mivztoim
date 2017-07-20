import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  TouchableHighlight
} from 'react-native';
import MapView from 'react-native-maps';
import ContactList from './ContactList';
import data from '../contacts.json';
import ContactDetails from './ContactDetails';
import Style from '../style';








class Map extends Component {



 constructor(props) {
   super(props);
   var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  this.state = {
    region: {
    latitude: 40.668978,   //initial position is 770
    longitude: -73.942826,
    latitudeDelta: 0.0022,
    longitudeDelta: 0.0021,
    },
    dataSource: ds.cloneWithRows(data),


  };



  this.onRegionChange = this.onRegionChange.bind(this);

}

 onRegionChange(region) {
  this.setState({region});
}


    componentDidMount() {
      navigator.geolocation.getCurrentPosition(
       (position) => {
         var latitude = parseFloat(position.coords.latitude);
         var longitude = parseFloat(position.coords.longitude);
          var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

         this.setState({
                region: {
                  latitude: latitude,
                  longitude: longitude,
                  latitudeDelta:  0.0022,
                  longitudeDelta: 0.0022,


                },
                dataSource: ds.cloneWithRows(data),
         });
       },
       (error) => alert(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );


    }

    renderRow = (contact) =>  {
      return (
        <TouchableHighlight onPress={() => this.onPress(contact)}>
        <View style= {Style.row}>
         <View style = {Style.info}>
            <Text style= {Style.name}>{contact.firstName} {contact.lastName}
             {contact.Status != "Jewish" && <Text > ({contact.jewishProbability}%) </Text> }
             </Text>
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

    onPress = (contact) =>  {



    // To be determined





    };






  render() {


     return (
       <View>
       <View>
         <MapView
           style={Style.mapContainer}
           showsUserLocation={true}
           followUserLocation={true}
           region={this.state.region}
           onRegionChange={this.onRegionChange}
        >
        <MapView.Marker
            coordinate={{latitude:41.251345, longitude: -75.890440}}
            title="Creepy Park"
            description="Good place for herion addicts"
            />


         </MapView>
       <ListView style={Style.mapList}
         dataSource={this.state.dataSource}
         renderRow={this.renderRow}

       />
       </View>
       </View>
     );
   }
  }

export default Map;
