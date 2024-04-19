import React, { useState } from 'react';
import { Image } from 'react-native';
import { View, Button, ScrollView, Text, ImageBackground, StyleSheet, Switch } from 'react-native';
import styles from '../styles/styles.js';
import { globalStyles } from '../styles/GlobalStyles';

const HomeScreen = ({ navigation }) => {
  return (

    <ImageBackground
    //   source={require('../assets/[].jpg')} // Provide the path to your background image
    //   style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}
    >
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'flex-start' }}> 
        <View style={{ backgroundColor: 'white', padding: 15, margin: 50, borderRadius: 20 }}> 
          <Image
            // source={require('../assets/[]].png')} 
            // style={{ width: '100%', height: 300, resizeMode: 'contain' }} 
          />
          <Text style={{ margin: 5, textAlign: 'center', fontSize: 16, fontWeight: "400"}}>
            text
          </Text>
        </View>
      </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;
