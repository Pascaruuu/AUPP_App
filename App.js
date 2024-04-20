import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import React, { useState } from 'react';
import CalendarScreen from './src/screens/CalendarScreen.js';
import HomeScreen from './src/screens/HomeScreen.js';
import MenuScreen from './src/screens/MenuScreen.js';
import NotificationScreen from './src/screens/NotificationScreen.js';
import { globalStyles } from './src/styles/GlobalStyles.js';
import { handleSearch } from './src/components/handleSearch.js';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: globalStyles.header,
            tabBarStyle: globalStyles.tabBar,
            headerLeft: () => (
              <Image
                source={require('./src/assets/images/AUPP_Logo.png')}
                style={globalStyles.logo}
              />
            ),
            headerRight: () => (
              <TouchableOpacity onPress={handleSearch}>
                <Image
                  source={require('./src/assets/images/search-icon.png')} 
                  style={globalStyles.icon}
                />
              </TouchableOpacity>
            ),
          }}
        >
          <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ 
              headerTitle: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => alert('You clicked on About us!')}>
                    <Text style={globalStyles.headerTitle}>About us</Text>
                  </TouchableOpacity>
                  <Text style={globalStyles.separator}>|</Text>
                  <TouchableOpacity onPress={() => alert('You clicked on Contact us!')}>
                    <Text style={globalStyles.headerTitle}>Contact us</Text>
                  </TouchableOpacity>
                </View>
              ),
            }} 
          />
          <Tab.Screen name="Calendar" component={CalendarScreen} options={{ headerTitle: 'Calendar', headerTitleStyle: globalStyles.title }} />
          <Tab.Screen name="Notification" component={NotificationScreen} options={{ headerTitle: 'Notification', headerTitleStyle: globalStyles.title }} />
          <Tab.Screen name="Menu" component={MenuScreen} options={{ headerTitle: 'Menu', headerTitleStyle: globalStyles.title }} />
        </Tab.Navigator>
      </NavigationContainer>
  );
};

export default App;
