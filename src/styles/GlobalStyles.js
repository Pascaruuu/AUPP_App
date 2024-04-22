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
  
});
