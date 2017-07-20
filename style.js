import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 0,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  } ,
  mainContainer : {
    flex: 1,
    backgroundColor: '#fff'
  } ,
  listTitle : {
    backgroundColor: '#0f1b29',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center'
  } ,
  row: {
    borderColor: '#f1f1f1',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom:20
  } ,
  info: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5
  } ,
  address: {
    color: '#ccc',
    fontSize: 14
  } ,
  total: {
      width: 80
    } ,
  status: {
    fontSize: 12,
    marginBottom: 5
  },
  distance: {
    color: '#1cad61',
    fontSize: 25,
    fontWeight: 'bold'
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',

  },
  map: {

    ...StyleSheet.absoluteFillObject,


  },
  mapTitle: {
     fontWeight: '500',
   },

   mapList: {

     marginTop: 400,

   },


});

export default Style;
