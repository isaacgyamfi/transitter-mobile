import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function CreateTrip() {
  return (
    <View style={styles.container}>
      <View style={styles.locationRow}>
        <Text style={{fontSize: 18, color: '#000000'}}>
          Where do you want to go?
        </Text>
        <MaterialIcons name="directions" size={30} color="#175FE0" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 15,
    borderRadius: 5,
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
