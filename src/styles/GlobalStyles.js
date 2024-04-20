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
    width: 15,
    height: 15,
    marginRight: 40,
  },
});
