import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';

const CollapsibleItem = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;

  const toggleExpand = () => {
    setExpanded(!expanded);
    Animated.timing(animatedHeight, {
      toValue: expanded ? 0 : 1, // Toggle between 0 and 1
      duration: 300,
      useNativeDriver: false, // 'height' is not supported by native driver
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleExpand} style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.content, { height: animatedHeight.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 100] // Adjust based on your content's height
      }) }]}>
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({

    container: {
      marginBottom: 12,
      overflow: 'hidden',
      borderRadius: 10,
      backgroundColor: '#ffffff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },

    header: {
      paddingHorizontal: 40,
      paddingVertical: 50,
      backgroundColor: '#063f5c', //aquamarine
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    headerText: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#FFFFFF', // White color for the text
    },

    body: {
      padding: 20,
      backgroundColor: '#FAFAFA', // A very light purple
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },

    bodyText: {
      fontSize: 16,
      color: '#333333', // Darker text color for better contrast
      lineHeight: 24, // Enhance readability with more line height
    },
  });
export default CollapsibleItem;