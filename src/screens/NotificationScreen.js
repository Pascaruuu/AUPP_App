import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles.js';

const NotificationScreen = () => {
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        {/* Header */}
        <View style={globalStyles.title}>
          <TouchableOpacity>
            <Text style={globalStyles.description}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={globalStyles.description}>Contact Us</Text>
          </TouchableOpacity>
        </View>

        {/* Notifications */}
        <View>
          {/* Replace this with a list of notifications */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <Image source={{ uri: 'your_icon_url' }} style={globalStyles.icon} />
            <View>
              <Text style={globalStyles.title}>Name</Text>
              <Text style={globalStyles.description}>Notification</Text>
            </View>
            <Text style={globalStyles.description}>Time & Date</Text>
          </View>
          {/* Repeat the above View for each notification */}
        </View>
      </View>
    </ScrollView>
  );
};

export default NotificationScreen;
