import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles.js';

const AboutUsScreen = () => {
  return (
    <ScrollView>
      <View style={globalStyles.header}>
        <Text style={globalStyles.SubHTitle}>About Us</Text>

        <Text style={globalStyles.textTitle}>Developer Team</Text>
        <View style={{ flexDirection: 'row' }}> 
          <Image source={require('../assets/images/pascal.jpg')} style={globalStyles.profilepic} />
          <View>
            <Text style={globalStyles.devname}>TUY Pascal</Text>
            <Text style={globalStyles.devdescription}>Former SGA Treasurer</Text>
            <Text style={globalStyles.devdescription}>AUPP Student, ICT Major</Text>
            <Text style={globalStyles.devdescription}>Founder of AUPP App</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}> 
           <Image source={require('../assets/images/soonly.jpg')} style={globalStyles.profilepic} />
          <View>
            <Text style={globalStyles.devname}>Taing Soonly</Text>
            <Text style={globalStyles.devdescription}>Leader of IT Club</Text>
            <Text style={globalStyles.devdescription}>AUPP Student, ICT Major</Text>
            <Text style={globalStyles.devdescription}>Founder of AUPP App</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}> 
           <Image source={require('../assets/images/botra.jpg')} style={globalStyles.profilepic} />
          <View>
            <Text style={globalStyles.devname}>DOS Vathanak Botra</Text>
            <Text style={globalStyles.devdescription}>AUPP Student, ICT Major</Text>
            <Text style={globalStyles.devdescription}>Founder of AUPP App</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}> 
           <Image source={require('../assets/images/pandaAvatar.png')} style={globalStyles.profilepic} />
          <View>
            <Text style={globalStyles.devname}>HO Areykal</Text>
            <Text style={globalStyles.devdescription}>AUPP Student, ICT Major</Text>
            <Text style={globalStyles.devdescription}>Founder of AUPP App</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutUsScreen;
