import React from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles.js';

const CalendarScreen = () => {
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        {/* Header */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={globalStyles.title}>Calendar Screen</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Text style={globalStyles.description}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={globalStyles.description}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={globalStyles.description}>Event</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Calendar */}
        <View>
          {/* Replace this with a calendar component */}
          <Text style={globalStyles.description}>Calendar Placeholder</Text>
        </View>

        {/* Event Banner */}
        <View>
          <Image source={{ uri: 'your_image_url' }} style={{ width: '100%', height: 200 }} />
          <Text style={globalStyles.description}>Event Banner</Text>
        </View>

        {/* Bottom Navigation */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity>
            <Text style={globalStyles.description}>Icon 1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={globalStyles.description}>Icon 2</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={globalStyles.description}>Icon 3</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={globalStyles.description}>Icon 4</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={globalStyles.description}>Icon 5</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CalendarScreen;
