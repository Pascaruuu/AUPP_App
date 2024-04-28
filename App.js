import React from 'react';
import { Image, Text, TouchableOpacity, View, ImageBackground} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { handleSearch } from './src/components/handleSearch.js';
import CalendarScreen from './src/screens/CalendarScreen.js';
import HomeScreen from './src/screens/HomeScreen.js';
import NotificationScreen from './src/screens/NotificationScreen.js';
import { globalStyles } from './src/styles/GlobalStyles.js';
import SettingScreen from './src/screens/SettingScreen.js';
import EventScreen from './src/screens/EventScreen.js';
import AnnouncementScreen from './src/screens/AnnouncementScreen.js';
import ClubScreen from './src/screens/ClubScreen.js';
import AboutUsScreen from './src/screens/AboutUsScreen.js';
import ContactUsScreen from './src/screens/ContactUsScreen.js';
import ProfileScreen from './src/screens/ProfileScreen.js';

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
              <TouchableOpacity onPress={() => navigation.navigate('About Us')}>
                <Text style={globalStyles.headerTitle}>About us</Text>
              </TouchableOpacity>
              <Text style={globalStyles.separator}>|</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Contact Us')}>
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
              <TouchableOpacity onPress={() => navigation.navigate('About Us')}>
                  <Text style={globalStyles.headerTitle}>About us</Text>
                </TouchableOpacity>
                <Text style={globalStyles.separator}>|</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Contact Us')}>
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
                <TouchableOpacity onPress={() => navigation.navigate('About Us')}>
                    <Text style={globalStyles.headerTitle}>About us</Text>
                  </TouchableOpacity>
                  <Text style={globalStyles.separator}>|</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Contact Us')}>
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


const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground source={require('./src/assets/images/pfpbg.png')} style={{width: '100%', height: 150, marginTop: -48, marginBottom: 20,}}>
        <Image source={require('./src/assets/images/AUPP_Logo.png')} style={{width: 60, height: 60, borderRadius: 30, marginTop: 45, marginLeft: 25,}} />
      </ImageBackground>
      <DrawerItem label="Home" onPress={() => props.navigation.navigate('Home')} />
      <DrawerItem label="Announcements" onPress={() => props.navigation.navigate('Announcements')} />
      <DrawerItem label="Events" onPress={() => props.navigation.navigate('Events')} />
      <DrawerItem label="Clubs" onPress={() => props.navigation.navigate('Clubs')} />
      <DrawerItem label="About Us" onPress={() => props.navigation.navigate('About Us')} />
      <DrawerItem label="Contact Us" onPress={() => props.navigation.navigate('Contact Us')} />
      <DrawerItem label="" style={{backgroundColor: '#ccc', height: 1}} />
      <DrawerItem label="Profile" onPress={() => props.navigation.navigate('Profile')} />
      <DrawerItem label="Settings" onPress={() => props.navigation.navigate('Settings')} />
    </DrawerContentScrollView>
  );
};




const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Menu" drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
      <Drawer.Screen name="Announcements" component={AnnouncementScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Events" component={EventScreen} options={{ headerShown: false }} /> 
      <Drawer.Screen name="Clubs" component={ClubScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="About Us" component={AboutUsScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Contact Us" component={ContactUsScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Settings" component={SettingScreen} options={{ headerShown: false }} />
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
