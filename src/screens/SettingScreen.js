import React, { useState } from 'react';
import { ScrollView, View, Text, Switch, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

const SettingScreen = () => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);

  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

  return (
    <ScrollView>
      <View style={globalStyles.header}>
        <Text style={globalStyles.SubHTitle}>Settings</Text>
      </View>
      <View style={globalStyles.settingRow}>
        <Text style={globalStyles.inputTitle}>Setting 1</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#044397" }}
          thumbColor={isEnabled1 ? "#f4f3f4" : "lightgray"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch1}
          value={isEnabled1}
        />
      </View>
      <View style={globalStyles.settingRow}>
        <Text style={globalStyles.inputTitle}>Setting 2</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#044397" }}
          thumbColor={isEnabled2 ? "#f4f3f4" : "lightgray"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch2}
          value={isEnabled2}
        />
      </View>
      <View style={globalStyles.settingRow}>
        <Text style={globalStyles.inputTitle}>Setting 3</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#044397" }}
          thumbColor={isEnabled3 ? "#f4f3f4" : "lightgray"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch3}
          value={isEnabled3}
        />
      </View>
    </ScrollView>
  );
};


export default SettingScreen;
