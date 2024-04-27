import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { globalStyles } from '../styles/GlobalStyles.js';

const CalendarScreen = () => {
  return (
    <ScrollView>
      <View style={globalStyles.container}>

        {/* Calendar */}
        <View>
          <Calendar onDayPress={day => { console.log('selected day', day); }} />
        </View>

        {/* Event Banner */}
        <View>
          <Image source={{ uri: 'your_image_url' }} style={{ width: '100%', height: 200 }} />
          <Text style={globalStyles.description}>Event Banner</Text>
        </View>

      </View>
    </ScrollView>
  );
};

export default CalendarScreen;
