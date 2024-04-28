import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { db } from '../../firebaseConfig';
import EventItem from '../components/EventItem';
import { globalStyles } from '../styles/GlobalStyles';

const EventScreen = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const eventsQuery = query(collection(db, 'events'));
    const unsubscribe = onSnapshot(eventsQuery, (snapshot) => {
      const eventsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(eventsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <View style={globalStyles.container}><Text>Loading...</Text></View>;
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.SubHTitle}>Events</Text>
      </View>
      <FlatList 
        data={events}
        renderItem={({ item }) => <EventItem event={item} />}
        keyExtractor={item => item.id}

      />
    </View>
  );
};

export default EventScreen;
