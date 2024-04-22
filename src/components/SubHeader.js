// import { useNavigation } from '@react-navigation/native'; // Import hook
// import React from 'react';
// import { Text, TouchableOpacity, View } from 'react-native';
// import { globalStyles } from '../styles/GlobalStyles.js'; // Assuming styles path

// const SubHeader = () => {
//   const navigation = useNavigation(); // Access navigation context

//   return (
//     <View style={[globalStyles.subHeader, { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 65 }]}>
//       <TouchableOpacity onPress={() => navigation.navigate('Announcements')}>
//         <Text style={globalStyles.subHeaderText}>Announcements</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Events')}>
//         <Text style={globalStyles.subHeaderText}>Events</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('ClubScreen')}>
//         <Text style={globalStyles.subHeaderText}>Clubs</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default SubHeader;

// subheader.js
// SubHeader.js
// SubHeader.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const SubHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('ClubScreen')}>
        <Text>Go to ClubScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubHeader;
