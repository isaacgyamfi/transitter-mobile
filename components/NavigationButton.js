import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Destination from './Destination';

const NavigationButton = ({currentLocation}) => {
  const [openNavigation, setOpenNavigation] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setOpenNavigation(!openNavigation);
        }}>
        <View style={styles.rowView}>
          <Text style={styles.text}>Where do you want to go?</Text>
          <View>
            <Icon name="directions" size={30} color="gray" />
          </View>
        </View>
      </TouchableOpacity>
      ) : (
      <Destination currentLocation={currentLocation} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    elevation: 2,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    padding: 15,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    backgroundColor: '#FFFFFF',
    fontSize: 18,
    color: 'gray',
  },
});

export default NavigationButton;
