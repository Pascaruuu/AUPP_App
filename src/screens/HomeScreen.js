import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import SubHeader from '../components/SubHeader';
import { globalStyles } from '../styles/GlobalStyles.js';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <SubHeader navigation={navigation}></SubHeader>
      </View>
      <View style={globalStyles.container}> 
          <Text style={globalStyles.upcomingEventsTitle}>
            Upcoming Events
          </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={globalStyles.containerRow}>
          <View style={globalStyles.eventContainer} />
          <View style={globalStyles.eventContainer} />
          <View style={globalStyles.eventContainer} />
          <View style={globalStyles.eventContainer} />
        </View>
        </ScrollView>
        <View style={globalStyles.auppClubBG}>
          <Text style={globalStyles.aupClubTitle}>AUPP Clubs</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
