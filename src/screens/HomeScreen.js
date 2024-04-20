import React from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import SubHeader from '../components/SubHeader'; // Import the SubHeader component
import { globalStyles } from '../styles/GlobalStyles.js';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
    //   source={require('../assets/[].jpg')} // Provide the path to your background image
    //   style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}
    >
    <ScrollView>
      <View>
      <SubHeader navigation={navigation}>This is the Home Screen</SubHeader>
      </View>
      <View style={globalStyles.container}> 
        <View style={{ backgroundColor: 'white', padding: 15, margin: 50, borderRadius: 20 }}> 
          <Image
            // source={require('../assets/[]].png')} 
            // style={{ width: '100%', height: 300, resizeMode: 'contain' }} 
          />
          <Text style={globalStyles.description}>
            search box
          </Text>
        </View>
      </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;
