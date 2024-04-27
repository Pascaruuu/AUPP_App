import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles.js';
import * as Notifications from 'expo-notifications';

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications when the component mounts
    const fetchNotifications = async () => {
      const notificationList = await Notifications.getDeliveredNotificationsAsync();
      setNotifications(notificationList);
    };

    fetchNotifications();
  }, []);

  return (
    <ScrollView>
      <View style={globalStyles.container}>

        {/* Notifications */}
        <View>
          {notifications.map((notification, index) => (
            <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
              <View>
                <Text style={globalStyles.title}>{notification.request.content.title}</Text>
                <Text style={globalStyles.description}>{notification.request.content.body}</Text>
              </View>
              <Text style={globalStyles.description}>{new Date(notification.date).toLocaleString()}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default NotificationScreen;
