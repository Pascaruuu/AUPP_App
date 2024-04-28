import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Announcements from './screens/Announcements';
import ClubScreen from './screens/ClubScreen'; // Importing the ClubScreen here
import Events from './screens/Events';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Announcements" component={Announcements} />
      <Stack.Screen name="Events" component={Events} />
      <Stack.Screen name="ClubScreen" component={ClubScreen} />

    </Stack.Navigator>
  );
}

export default AppNavigator;
