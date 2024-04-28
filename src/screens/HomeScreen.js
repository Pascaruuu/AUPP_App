import React, { useEffect, useState } from 'react';
import { ScrollView, FlatList, Text, View } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import ClubItem from '../components/ClubItem';
import EventItem from '../components/EventItem'; // Adjust path as needed
import SubHeader from '../components/SubHeader';
import { globalStyles } from '../styles/GlobalStyles.js';

const HomeScreen = ({ navigation }) => {
  const [clubs, setClubs] = useState([]);
  const [events, setEvents] = useState([]);

  const fetchClubs = async () => {
    const clubsSnapshot = await getDocs(collection(db, 'clubs'));
    const clubsData = clubsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setClubs(clubsData);
  };

  const fetchEvents = async () => {
    const eventsSnapshot = await getDocs(collection(db, 'events'));
    const eventData = eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setEvents(eventData);
  };

  useEffect(() => {
    fetchClubs();
    fetchEvents();
  }, []);

  return (
    <ScrollView>
      <SubHeader navigation={navigation}/>
      <Text style={globalStyles.upcomingEventsTitle}>
        Upcoming Events
      </Text>
      <FlatList 
        horizontal
        data={events}
        renderItem={({ item }) => <EventItem event={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={globalStyles.containerRow}
      />
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
