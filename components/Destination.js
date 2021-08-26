import axios from 'axios';
import React, {useEffect} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const GOOGLE_MAP_API = 'AIzaSyC9xeODqchewcF9288HmvypjPNXM-MjExw';

const displayPredictions = predictions => {
  return (
    <FlatList
      data={predictions}
      renderItem={({item}) => (
        <TouchableOpacity>
          <Text>{item.description}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.place_id}
      keyboardShouldPersistTaps={'handled'}
    />
  );
};

const Destination = ({
  currentLocation,
  value,
  changeText,
  showPredictions,
  predictions,
  onSelectedPrediction,
}) => {
  const reverseGeocodeLocation = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${currentLocation.latitude}%2C${currentLocation.longitude}&key=${GOOGLE_MAP_API}`,
      );
      return response.results[0].address_components[0].long_name;
      // console.log(currentLocation.results[0].address_components[0].long_name);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // reverseGeocodeLocation()
    //   .then((r) => console.log(r))
    //   .catch((err) => console.log(err));
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.locationRow}>
        <Icon name="locate" size={30} color="gray" />
        <Text style={{fontSize: 18, color: 'gray', marginLeft: 10}}>
          Your location
        </Text>
      </View>
      <View
        style={{
          borderWidth: StyleSheet.hairlineWidth,
          marginHorizontal: -15,
          borderColor: '#DDD',
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon name="location-outline" size={30} color="gray" />
        <TextInput
          style={styles.textInput}
          placeholder="Where do you want to go?"
          value={value}
          onChangeText={changeText}
          returnKeyType={'search'}
        />
      </View>
      {showPredictions && displayPredictions(predictions)}
    </View>
  );
};

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
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default Destination;
