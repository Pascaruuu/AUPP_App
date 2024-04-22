// HomeScreen.js
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import SubHeader from '../components/SubHeader'; // Import the SubHeader component
import { globalStyles } from '../styles/GlobalStyles.js';

const HomeScreen = () => {
  return (
    <ScrollView>
      <View>
        <SubHeader />
      </View>
      <View style={globalStyles.container}> 
        <View style={{ margin: 35 }}> 
          <Text style={globalStyles.upcomingEventsTitle}>
            Upcoming Events
          </Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={globalStyles.containerRow}>
          <View style={globalStyles.eventContainer} />
          <View style={globalStyles.eventContainer} />
          <View style={globalStyles.eventContainer} />
          <View style={globalStyles.eventContainer} />
        </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
