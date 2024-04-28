// ClubItem.js
import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native'; // Import TouchableOpacity
import { globalStyles } from '../styles/GlobalStyles';

const ClubItem = ({ club }) => (
  <View style={globalStyles.clubContainer}>
    <Image
      style={globalStyles.clubLogo}
      source={require('../assets/images/AUPP_Logo.png')}
    />
    <View style={globalStyles.clubName}>
      <Text>{club.club_name}</Text>
    </View>
    
    <Text style={globalStyles.clubDescription}>{club.club_desc}</Text>
    <Text style={club.club_vacancy ? globalStyles.open : globalStyles.closed}>
      {club.club_vacancy ? 'Open for Registration' : 'Closed for Registration'}
    </Text>
    <View style={globalStyles.buttonContainer}>
    <TouchableOpacity 
      style={club.club_vacancy ? globalStyles.Button : globalStyles.ButtonDisabled} 
      disabled={!club.club_vacancy}
    >
      <Text style={globalStyles.ButtonText}>Join Now</Text>
    </TouchableOpacity>

    </View>
  </View>
);

export default ClubItem;
