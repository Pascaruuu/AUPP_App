import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { db } from '../../firebaseConfig';
import ClubItem from '../components/ClubItem';
import { globalStyles } from '../styles/GlobalStyles.js';

const ClubDataScreen = () => {
  const [clubs, setClubs] = useState([]);

  const fetchClubs = async () => {
    const clubsSnapshot = await getDocs(collection(db, 'clubs'));
    const clubsData = clubsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setClubs(clubsData);
  };

  useEffect(() => {
    fetchClubs(); // Fetch clubs when the component mounts

    const intervalId = setInterval(fetchClubs, 500); // Fetch clubs every 30 seconds

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, []);

  return (
    <View>
      <View style={globalStyles.header}>
      <Text style={globalStyles.SubHTitle}>Clubs</Text>
      </View>
      <FlatList 
        data={clubs}
        renderItem={({ item }) => <ClubItem club={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default ClubDataScreen;
