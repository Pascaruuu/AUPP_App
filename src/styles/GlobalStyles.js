import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#003070',
    position: 'absolute',
    right: 0,
    width: '80%',
    height: '100%',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  profileText: {
    color: 'white',
  },
  menuOption: {
    marginBottom: 10,
  },
  menuText: {
    color: 'white',
  },
  header: {
    backgroundColor: '#003070',
    height: 110,
  },

  logo: {
    width: 50,
    height: 50,
    marginLeft: 10, 
  },
  headerTitle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  separator: {
    color: '#fff',
    marginHorizontal: 10,
  }, 
  tabBar: {
    backgroundColor: '#003070',
    tabBarActiveTintColor: '#007bff',
    tabBarInactiveTintColor: 'white',
    height: 100,
  },
  icon: {
    marginRight: 40,
  },
  upcomingEventsTitle: {
    margin: 35,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#003070', 
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: 'flex-start',
  },
  eventContainer: {
    width: 185,
    margin: 10,
    backgroundColor: 'transparent',
    borderColor: '#003070',
    borderWidth: 1,
    height: 300,
  },
  aupClubTitle: {
    margin: 35,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  auppClubBG: {
    backgroundColor: '#AD0000', 
    height: 750, 
    marginTop: 40,
  },
  SubHTitle: {
    fontSize: 30,
    paddingTop: 55,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  


//### Subheader ###

  subHeader: {
    backgroundColor: 'white',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subHeaderText: {
    color: '#003070',
    fontSize: 16,
    fontWeight: 'bold',
  },


  //### firebase ###
  open:{
    color:"green",
  },
  closed:{
    color:"red"
  },

  //### Event styles ###
  
  eventTitle:{
    fontSize: 22,
    marginTop: 20,
    marginBottom: 20,
    color: '#AD0000',
    fontWeight: 'bold',
    alignItems: 'center',
    alignSelf: 'center',
  },
  eventBox: {
    width: 300,
    margin: 10,
    backgroundColor: 'transparent',
    borderColor: '#003070',
    borderWidth: 1,
    height: 550,
    alignSelf: 'center',
  },
  eventdesc:{
    margin: 10,
    marginLeft: 20,
    backgroundColor: '#f0f0f0', 
    borderRadius: 10
  },
  Button: {
    backgroundColor: '#003070',
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    width: 150,
  },
  ButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  ButtonDisabled: {
    backgroundColor: 'gray',
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    width: 150,
  },


  //### Text styles ###

  textTitle:{
    fontSize: 22,
    marginTop: 50,
    marginLeft: 20,
    color: '#AD0000',
    fontWeight: 'bold',
  },
  profilepic:{
    width: 100, 
    height: 100, 
    margin: 20,
    borderRadius: 50,
  },
  devname: {
    marginTop: 30,
    marginLeft : 0,
    color: '#003070',
    fontWeight: 'bold',
  },
  devdescription: {
    marginTop: 5,
    marginLeft : 0,
  },
  description: {
    marginTop: 20,
    marginLeft : 20,
    marginBottom: 50,
    marginRight: 20,
    fontSize: 16,
  },
  textdesc:{
    marginTop: 20,
    marginLeft : 20,
    marginRight: 20,
    fontSize: 14,
  },
  mapicon:{
    flexDirection: 'row', 
    alignItems: 'center',
    marginLeft: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  inputTitle: {
    marginTop: 15,
    marginLeft : 20,
    marginBottom: 10,
    color: '#003070',
    fontWeight: 'bold',
  },
  input: {
    padding: 8,
    height: 40,
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 1,
    borderColor: 'gray',
  },
  Msginput: {
    padding: 8,
    height: 90,
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 1,
    borderColor: 'gray',
  },

  

  submitButton: {
    backgroundColor: '#003070',
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: 100,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  //#### ClubItems ####

  clubContainer: {
    flex: 1,
    margin: 10,
    paddingVertical: 8,
    backgroundColor: 'transparent', 
    borderColor: '#003070', 
    borderWidth: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },

  clubLogo: {
    width: 170,
    height: 170,
  },
  clubName: {
    fontSize: 15,
    color: '#AD0000',
    fontWeight: 'bold',
    alignItems: 'center',
    alignSelf: 'center',
  },

});
