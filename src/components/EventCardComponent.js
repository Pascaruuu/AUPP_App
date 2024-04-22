import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const EventCard = ({ eventId }) => {
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const documentSnapshot = await firestore()
          .collection('events')
          .doc(eventId)
          .get();

        if (documentSnapshot.exists) {
          setEventData(documentSnapshot.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.log('Error getting document:', error);
      }
    };

    fetchData();
  }, [eventId]);

  if (!eventData) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ padding: 10, margin: 10, backgroundColor: '#ddd' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{eventData.name}</Text>
      <Text>{eventData.description}</Text>
      <Text>Start Time: {eventData.start_time}</Text>
      <Text>End Time: {eventData.end_time}</Text>
    </View>
  );
};

export default EventCard;
