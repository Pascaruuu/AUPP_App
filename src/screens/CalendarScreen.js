import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { globalStyles } from '../styles/GlobalStyles.js';

const CalendarScreen = () => {
  return (
    <ScrollView>
      <View style={globalStyles.container}>

        <View>
          <Calendar onDayPress={day => { console.log('selected day', day); }} />
        </View>

        <View>
          <Text style={globalStyles.description}>Event Banner</Text>
        </View>

      </View>
    </ScrollView>
  );
};

export default CalendarScreen;
