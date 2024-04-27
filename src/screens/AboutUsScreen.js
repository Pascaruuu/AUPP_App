import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles.js';

const AboutUsScreen = () => {
  return (
    <ScrollView>
      <View style={globalStyles.header}>
      <Text style={globalStyles.SubHTitle}>About Us</Text>

        <View>
          <Image source={{ uri: 'your_image_url' }} style={{ width: '100%', height: 200 }} />
          <Text style={globalStyles.description}>Event Banner</Text>
        </View>

      </View>
    </ScrollView>
  );
};

export default AboutUsScreen;
