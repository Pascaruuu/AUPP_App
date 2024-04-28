import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { Button, Image, Text, View } from 'react-native';
import PushNotification from 'react-native-push-notification';
import { globalStyles } from '../styles/GlobalStyles';

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

  const handleInterest = () => {
    setInterested(!interested);

    // If the user is interested in the event, schedule a notification
    if (!interested) {
      const reminderTime = new Date(startTime.getTime() - 15 * 60 * 1000); // 15 minutes before the event

      if (reminderTime > new Date()) { // Only schedule the notification if the reminder time is in the future
        PushNotification.localNotificationSchedule({
          message: `The event ${event.event_name} is starting soon!`,
          date: reminderTime,
        });
      }
    }
  };

  const handleGoing = () => {
    setGoing(!going);

    // If the user is going to the event, schedule a notification
    if (!going) {
      const reminderTime = new Date(startTime.getTime() - 60 * 60 * 1000); // 1 hour before the event

      if (reminderTime > new Date()) { // Only schedule the notification if the reminder time is in the future
        PushNotification.localNotificationSchedule({
          message: `The event ${event.event_name} is starting in 1 hour!`,
          date: reminderTime,
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
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.SubHTitle}>{event.event_name}</Text>
      </View>
      {posterUrl && (
        <Image
          style={{...globalStyles.eventLogo, width: 360, height: 360, alignSelf: 'center'}} // Set a fixed width and height
          source={{uri: posterUrl}} // Use poster_url from Firebase Storage
        />
      )}
      <View style={{margin: 10, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 10}}>
        <Text style={globalStyles.eventDescription}>{event.event_desc}</Text>
        <Text style={globalStyles.eventTime}>{eventDate}, {formattedStartTime} - {formattedEndTime}</Text>
        <Text style={globalStyles.eventVenue}>{venue}</Text>
      </View>
      <View style={globalStyles.buttonContainer}>
        <Button 
          title={interested ? "Interested" : "Not Interested"} 
          onPress={handleInterest}
          color={interested ? "green" : "red"}
        />
        <Button 
          title={going ? "Going" : "Not Going"} 
          onPress={handleGoing}
          color={going ? "green" : "red"}
        />
      </View>
    </View>
  );
};

export default EventItem;
