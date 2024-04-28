//ContactUsScreen.js
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

const ContactUsScreen = () => {
  return (
    <ScrollView>
      <View style={globalStyles.header}>
        <Text style={globalStyles.SubHTitle}>Contact Us</Text>

        <View>
          <Text style={globalStyles.textTitle}>Campus Location</Text>
          <View style={globalStyles.mapicon}>
            <Icon name="map-marker" size={20} color="#AD0000" style={{ marginRight: 10 }} />
            <View style={globalStyles.textdesc}>
            <Text>
              #278H, Street 201R, Kroalkor Village, Sangkat Kilometer 6, Khan Russey Keo, Phnom Penh, Cambodia
            </Text>
            </View>
          </View>
            <View style={globalStyles.textdesc}>
                <Text style={globalStyles.boldText}>Mailing address:</Text>
                <Text>
                    PO Box 1955 {"\n"}
                    American University of Phnom Penh {"\n"}
                    Cambodia Post {"\n"}
                    Postal Code 120000 {"\n"}
                    Phnom Penh, Cambodia {"\n\n"}
                    (+855) 12 266 631
                </Text>
            </View>
        </View>
        <Text style={globalStyles.textTitle}>Get in Touch</Text>
        <Text style={globalStyles.inputTitle}>First Name</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Enter First Name"
        />
        <Text style={globalStyles.inputTitle}>Last Name</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Enter Last Name"
        />
        <Text style={globalStyles.inputTitle}>Email</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Enter Email"
        />
        <Text style={globalStyles.inputTitle}>Message</Text>
        <TextInput
          style={globalStyles.Msginput}
          placeholder="Enter Message"
        />
        <TouchableOpacity style={globalStyles.submitButton} onPress={() => {}}>
          <Text style={globalStyles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ContactUsScreen;