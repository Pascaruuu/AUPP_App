import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import CalendarScreen from './src/screens/CalendarScreen.js';
import HomeScreen from './src/screens/HomeScreen.js';
import MenuScreen from './src/screens/MenuScreen.js';
import NotificationScreen from './src/screens/NotificationScreen.js';
import { globalStyles } from './src/styles/GlobalStyles.js';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: '#007bff',
            tabBarInactiveTintColor: '#003070',
            headerStyle: globalStyles.header,
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{ headerTitle: 'Home', headerTitleStyle: globalStyles.title }} />
          <Tab.Screen name="Calendar" component={CalendarScreen} options={{ headerTitle: 'Calendar', headerTitleStyle: globalStyles.title }} />
          <Tab.Screen name="Notification" component={NotificationScreen} options={{ headerTitle: 'Notification', headerTitleStyle: globalStyles.title }} />
          <Tab.Screen name="Menu" component={MenuScreen} options={{ headerTitle: 'Menu', headerTitleStyle: globalStyles.title }} />
        </Tab.Navigator>
      </NavigationContainer>
  );
};

export default App;
