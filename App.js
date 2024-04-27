import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { handleSearch } from './src/components/handleSearch.js';
import CalendarScreen from './src/screens/CalendarScreen.js';
import HomeScreen from './src/screens/HomeScreen.js';
import NotificationScreen from './src/screens/NotificationScreen.js';
import { globalStyles } from './src/styles/GlobalStyles.js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingScreen from './src/screens/SettingScreen.js';
import EventScreen from './src/screens/EventScreen.js';
import AnnouncementScreen from './src/screens/AnnouncementScreen.js';
import ClubScreen from './src/screens/ClubScreen.js';
import AboutUsScreen from './src/screens/AboutUsScreen.js';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();
  return (
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
        return (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name={iconName} size={size} color={color} />
          </TouchableOpacity>
        );
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
              <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
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
      component={DrawerNavigator} 
      listeners={{
        tabPress: (e) => {
          e.preventDefault();
          navigation.openDrawer();
        },
      }}
    />
    
  </Tab.Navigator>
);
};


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Menu">
      <Drawer.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
      <Drawer.Screen name="Settings" component={SettingScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Announcements" component={AnnouncementScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Events" component={EventScreen} options={{ headerShown: false }} /> 
      <Drawer.Screen name="Clubs" component={ClubScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="AboutUs" component={AboutUsScreen} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
};

export default App;