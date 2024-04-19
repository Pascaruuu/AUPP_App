import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    paddingTop: 20,
  },

  screenTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10, 
    color: '#333'
  },

  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

});