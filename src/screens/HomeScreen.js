// HomeScreen.js

import React, { useEffect, useState } from 'react';
import { ScrollView, FlatList, Text, View } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import ClubItem from '../components/ClubItem';
import SubHeader from '../components/SubHeader';
import { globalStyles } from '../styles/GlobalStyles.js';

const HomeScreen = ({ navigation }) => {
  const [clubs, setClubs] = useState([]);

  const fetchClubs = async () => {
    const clubsSnapshot = await getDocs(collection(db, 'clubs'));
    const clubsData = clubsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setClubs(clubsData);
  };

  useEffect(() => {
    fetchClubs(); // Fetch clubs when the component mounts
  }, []);

  return (
    <ScrollView style={globalStyles.container}>
      <SubHeader navigation={navigation}></SubHeader>
      <Text style={globalStyles.upcomingEventsTitle}>
        Upcoming Events
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={globalStyles.containerRow}>
          <View style={globalStyles.eventContainer} />
          <View style={globalStyles.eventContainer} />
          <View style={globalStyles.eventContainer} />
          <View style={globalStyles.eventContainer} />
        </View>
      </ScrollView>
      <View style={globalStyles.auppClubBG}>
        <Text style={globalStyles.aupClubTitle}>AUPP Clubs</Text>
        <FlatList 
          data={clubs}
          renderItem={({ item }) => <ClubItem club={item} />}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
