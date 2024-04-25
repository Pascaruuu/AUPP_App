// ClubItem.js

import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

const ClubItem = ({ club }) => (
  <View style={globalStyles.clubContainer}>
    <Image
      style={globalStyles.clubLogo}
      source={require('../assets/images/AUPP_Logo.png')}
    />
    <Text style={globalStyles.clubName}>{club.club_name}</Text>
    <Text style={globalStyles.clubDescription}>{club.club_desc}</Text>
    <Text style={club.club_vacancy ? globalStyles.open : globalStyles.closed}>
      {club.club_vacancy ? 'Open for Registration' : 'Closed for Registration'}
    </Text>
    <View style={globalStyles.buttonContainer}>
      <Button title="Join Now" disabled={!club.club_vacancy} />
    </View>
  </View>
);

export default ClubItem;
