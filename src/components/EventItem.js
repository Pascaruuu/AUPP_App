import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { Button, Image, Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import * as Notifications from 'expo-notifications';

const EventItem = ({ event }) => {
  if (!event) {
    return null; // or render some fallback component
  }

  const [interested, setInterested] = useState(false);
  const [going, setGoing] = useState(false);
  const [posterUrl, setPosterUrl] = useState(null);
  const venue = event.venue || 'AUPP, Phnom Penh, Cambodia';

  // Convert Firestore timestamps to JavaScript Date objects
  const startTime = event.start_time.toDate();
  const endTime = event.end_time.toDate();

  // Format the start and end times to exclude seconds and GMT+7
  const formattedStartTime = startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const formattedEndTime = endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Format the date of the event
  const eventDate = startTime.toLocaleDateString();

  const handleInterest = async () => {
    setInterested(!interested);

    // If the user is interested in the event, schedule a notification
    if (!interested) {
      const reminderTime = new Date(startTime.getTime() - 15 * 60 * 1000); // 15 minutes before the event

      if (reminderTime > new Date()) { // Only schedule the notification if the reminder time is in the future
        await Notifications.scheduleNotificationAsync({
          content: {
            title: `The event ${event.event_name} is starting soon!`,
          },
          trigger: reminderTime,
        });
      }
    }
  };

  const handleGoing = async () => {
    setGoing(!going);

    // If the user is going to the event, schedule a notification
    if (!going) {
      const reminderTime = new Date(startTime.getTime() - 60 * 60 * 1000); // 1 hour before the event

      if (reminderTime > new Date()) { // Only schedule the notification if the reminder time is in the future
        await Notifications.scheduleNotificationAsync({
          content: {
            title: `The event ${event.event_name} is starting in 1 hour!`,
          },
          trigger: reminderTime,
        });
      }
    }
  };

  // Get the image URL from Firebase Storage
  useEffect(() => {
    const storage = getStorage();
    getDownloadURL(ref(storage, `event_posters/${event.poster_url}`)) // Use child path
      .then((url) => {
        setPosterUrl(url);
      })
      .catch((error) => {
        console.error('Error getting download URL:', error); // Log any errors
      });
  }, [event]);

  return (
    <View style={globalStyles.eventBox}>
      <View>
        <Text style={globalStyles.eventTitle}>{event.event_name}</Text>
      </View>
      {posterUrl && (
        <Image
          style={{...globalStyles.eventLogo, width: '90%', height: '55%', alignSelf: 'center'}} // Set a fixed width and height
          source={{uri: posterUrl}} // Use poster_url from Firebase Storage
        />
      )}
      <View style={globalStyles.eventdesc}>
        <Text style={globalStyles.eventDescription}>
          <Text style={{fontWeight: 'bold'}}>Description: </Text>
          {event.event_desc}
        </Text>
        <Text style={globalStyles.eventTime}>
          <Text style={{fontWeight: 'bold'}}>Date (D/M/Y): </Text>
          {eventDate}
        </Text>
        <Text style={globalStyles.eventTime}>
          <Text style={{fontWeight: 'bold'}}>Time: </Text>
          {formattedStartTime} - {formattedEndTime}
        </Text>
        <Text style={globalStyles.eventVenue}>
          <Text style={{fontWeight: 'bold'}}>Location: </Text>
          {venue}
        </Text>
      </View>

      <View style={globalStyles.buttonContainer}>
        <TouchableOpacity 
          style={interested ? globalStyles.Button : { ...globalStyles.Button, backgroundColor: '#AD0000' }}
          onPress={handleInterest}
        >
          <Text style={globalStyles.ButtonText}>
            {interested ? "Interested" : "Not Interested"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={going ? globalStyles.Button : { ...globalStyles.Button, backgroundColor: '#AD0000' }}
          onPress={handleGoing}
        >
          <Text style={globalStyles.ButtonText}>
            {going ? "Going" : "Not Going"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EventItem;
