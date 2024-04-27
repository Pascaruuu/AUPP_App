import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { db } from '../../firebaseConfig';
import ClubItem from '../components/ClubItem'; // You might want to replace this with an AnnouncementItem component
import { globalStyles } from '../styles/GlobalStyles.js';

const AnnouncementScreen = () => {
  const [announcements, setAnnouncements] = useState([]);

  const fetchAnnouncements = async () => {
    const announcementsSnapshot = await getDocs(collection(db, 'announcements')); // Adjust this to fetch your announcements data
    const announcementsData = announcementsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setAnnouncements(announcementsData);
  };

  useEffect(() => {
    fetchAnnouncements(); // Fetch announcements when the component mounts

    const intervalId = setInterval(fetchAnnouncements, 500); // Fetch announcements every 30 seconds

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, []);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.SubHTitle}>Announcements</Text>
      </View>
      <FlatList 
        data={announcements}
        renderItem={({ item }) => <ClubItem club={item} />} // You might want to replace this with an AnnouncementItem component
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default AnnouncementScreen;
