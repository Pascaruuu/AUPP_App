// App.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { handleSearch } from './src/components/handleSearch.js';
import CalendarScreen from './src/screens/CalendarScreen.js';
import HomeScreen from './src/screens/HomeScreen.js';
import MenuScreen from './src/screens/MenuScreen.js';
import NotificationScreen from './src/screens/NotificationScreen.js';
import { globalStyles } from './src/styles/GlobalStyles.js';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: globalStyles.header,
          tabBarStyle: globalStyles.tabBar,
          headerLeft: () => (
            <Image
              source={require('./src/assets/images/AUPP_Logo.png')}
              style={globalStyles.logo}
            />
          ),

          headerRight: () => (
            <TouchableOpacity onPress={handleSearch} style={globalStyles.icon}>
              <Ionicons name="search-outline" size={20} color="white" />
            </TouchableOpacity>
          ),
          
          
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Calendar') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'Notification') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Menu') {
              iconName = focused ? 'menu' : 'menu-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            headerTitle: () => (
              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => alert('You clicked on About us!')}>
                    <Text style={globalStyles.headerTitle}>About us</Text>
                  </TouchableOpacity>
                  <Text style={globalStyles.separator}>|</Text>
                  <TouchableOpacity onPress={() => alert('You clicked on Contact us!')}>
                    <Text style={globalStyles.headerTitle}>Contact us</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ),
          }} 
        />
        <Tab.Screen 
          name="Calendar" 
          component={CalendarScreen} 
          options={{ 
              headerTitle: () => (
                <View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => alert('You clicked on About us!')}>
                      <Text style={globalStyles.headerTitle}>About us</Text>
                    </TouchableOpacity>
                    <Text style={globalStyles.separator}>|</Text>
                    <TouchableOpacity onPress={() => alert('You clicked on Contact us!')}>
                      <Text style={globalStyles.headerTitle}>Contact us</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ),
            }}  />
        <Tab.Screen 
          name="Notification" 
          component={NotificationScreen} 
          options={{ 
                headerTitle: () => (
                  <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <TouchableOpacity onPress={() => alert('You clicked on About us!')}>
                        <Text style={globalStyles.headerTitle}>About us</Text>
                      </TouchableOpacity>
                      <Text style={globalStyles.separator}>|</Text>
                      <TouchableOpacity onPress={() => alert('You clicked on Contact us!')}>
                        <Text style={globalStyles.headerTitle}>Contact us</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ),
              }} />
        <Tab.Screen 
          name="Menu" 
          component={MenuScreen} 
          options={{ 
                headerTitle: () => (
                  <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <TouchableOpacity onPress={() => alert('You clicked on About us!')}>
                        <Text style={globalStyles.headerTitle}>About us</Text>
                      </TouchableOpacity>
                      <Text style={globalStyles.separator}>|</Text>
                      <TouchableOpacity onPress={() => alert('You clicked on Contact us!')}>
                        <Text style={globalStyles.headerTitle}>Contact us</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ),
              }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
