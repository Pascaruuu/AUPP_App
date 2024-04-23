import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

const ClubItem = ({ club }) => (
  <View style={styles.clubContainer}>
    <Image
      style={styles.clubLogo}
      source={{ uri: 'https://via.placeholder.com/150' }} // Placeholder image
      // Uncomment the line below and replace the placeholder image with the club logo when ready
      // source={{ uri: club.club_logo }}
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

const styles = StyleSheet.create({
  clubContainer: {
    flex: 1,
    margin: 10,
    paddingVertical: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clubLogo: {
    width: 150,
    height: 150,
  },
});

export default ClubItem;
