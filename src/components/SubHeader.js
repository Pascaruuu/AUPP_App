// SubHeader.js
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles.js';

const SubHeader = ({ navigation }) => { // Use the navigation prop passed from the parent component

  return (
    <View style={[globalStyles.subHeader, { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 65 }]}>
      <TouchableOpacity onPress={() => navigation.navigate('Announcements')}>
        <Text style={globalStyles.subHeaderText}>Announcements</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Events')}>
        <Text style={globalStyles.subHeaderText}>Events</Text>
      </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate('Clubs')}>
        <Text style={globalStyles.subHeaderText}>Clubs</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubHeader;
