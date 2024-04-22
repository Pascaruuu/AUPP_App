import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import firebase from '../../firebase';

const ClubScreen = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      const db = firebase.firestore();
      const snapshot = await db.collection('clubs').get();
      const clubsData = snapshot.docs.map(doc => doc.data());
      setClubs(clubsData);
    };

    fetchClubs();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {clubs.map((club, index) => (
        <View key={index} style={{ width: '50%', padding: 10 }}>
          <Image source={{ uri: club.logo }} style={{ width: '100%', height: 100 }} />
          <Text>{club.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ClubScreen;
