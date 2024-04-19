import React from 'react';
import { Image, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen.js';
import CalendarScreen from './src/screens/CalendarScreen.js';
import NotificationScreen from './src/screens/NotificationScreen.js';
import MenuScreen from './src/screens/MenuScreen.js';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: '#007bff',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{ headerTitle: 'Home'}} />
          <Tab.Screen name="Calendar" component={CalendarScreen} options={{ headerTitle: 'Calendar' }} />
          <Tab.Screen name="Notification" component={NotificationScreen} options={{ headerTitle: 'Notification' }} />
          <Tab.Screen name="Menu" component={MenuScreen} options={{ headerTitle: 'Menu' }} />
        </Tab.Navigator>
      </NavigationContainer>
  );
};

export default App;

