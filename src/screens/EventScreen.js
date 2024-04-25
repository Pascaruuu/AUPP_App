import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { db } from '../../firebaseConfig';
import ClubItem from '../components/ClubItem'; // You might want to replace this with an EventItem component
import { globalStyles } from '../styles/GlobalStyles.js';

const EventScreen = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const eventsSnapshot = await getDocs(collection(db, 'events')); // Adjust this to fetch your events data
    const eventsData = eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setEvents(eventsData);
  };

  useEffect(() => {
    fetchEvents(); // Fetch events when the component mounts

    const intervalId = setInterval(fetchEvents, 500); // Fetch events every 30 seconds

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, []);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.SubHTitle}>Events</Text>
      </View>
      <FlatList 
        data={events}
        renderItem={({ item }) => <ClubItem club={item} />} // You might want to replace this with an EventItem component
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default EventScreen;
