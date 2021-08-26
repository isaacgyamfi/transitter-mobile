import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView from 'react-native-maps';
import Destination from '../components/Destination';
import taxiPlaces from '../components/taxi-stations.json';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import CreateTrip from '../components/home/CreateTrip';

const GOOGLE_MAP_API = 'AIzaSyC9xeODqchewcF9288HmvypjPNXM-MjExw';
const GOOGLE_PACES_API_BASE_URL = 'https://maps.googleapis.com/maps/api/place';

const samplePlaces = taxiPlaces.results;

export default function HomeScreen() {
  const navigation = useNavigation();
  const [userLocation, setUserLocation] = useState({
    longitude: -0.1776037,
    latitude: 5.6562952,
    longitudeDelta: 0.1,
    latitudeDelta: 0.2,
  });
  const [placeSearch, setPlaceSearch] = useState({
    key: '',
    predict: false,
  });
  const [showPredictions, setShowPredictions] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const [placeType, setPlaceType] = useState({key: '1'});
  const [createTrip, setCreateTrip] = useState(false);

  const onChangeText = async () => {
    if (placeSearch.key.trim() === '') {
      return;
    }
    if (!placeSearch.predict) {
      return;
    }
    const apiUrl = `${GOOGLE_PACES_API_BASE_URL}/autocomplete/json?key=${GOOGLE_MAP_API}&input=${placeSearch.key}`;
    try {
      const result = await axios.request({
        method: 'POST',
        url: apiUrl,
      });
      if (result) {
        const {
          data: {predictions},
        } = result;
        setPredictions(predictions);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSelectedPrediction = async (
    placeId: string,
    description: string,
  ) => {
    const apiUrl = `${GOOGLE_PACES_API_BASE_URL}/details/json?key=${GOOGLE_MAP_API}&place_id=${placeId}`;
    try {
      const result = await axios.request({
        method: 'post',
        url: apiUrl,
      });
      if (result) {
        const {
          data: {
            result: {
              geometry: {location},
            },
          },
        } = result;
        const {lat, lng} = location;
        setShowPredictions(false);
        setPlaceSearch({key: description});
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handlePlaceTypeSelection = () => {};
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 15,
          flex: 4.5,
        }}>
        <View style={{paddingVertical: 15}}>
          {createTrip ? (
            <Destination
              currentLocation={userLocation}
              value={placeSearch.key}
              changeText={value => {
                setPlaceSearch({key: value, predict: true});
                onChangeText().then(r => console.log(r));
              }}
              showPredictions={showPredictions}
              predictions={predictions}
              onSelectedPrediction={handleSelectedPrediction}
            />
          ) : (
            <TouchableOpacity onPress={() => setCreateTrip(true)}>
              <CreateTrip />
            </TouchableOpacity>
          )}
        </View>

        <View style={{paddingVertical: 10}}>
          <Text style={{fontSize: 18, fontWeight: '600', color: '#FFFFFF'}}>
            See nearby
          </Text>
        </View>
        <View>
          <FlatList
            data={[
              {key: '1', name: 'Bus stops', icon: 'bus-stop'},
              {key: '2', name: 'Taxi stations', icon: 'taxi'},
              {key: '3', name: 'Bus stations', icon: 'bus-multiple'},
            ]}
            horizontal={true}
            style={{alignSelf: 'center'}}
            renderItem={({item, index}) => (
              <View style={styles.nearbySelectorContainer}>
                <TouchableOpacity
                  onPress={() => handlePlaceTypeSelection(item.key)}
                  style={[styles.nearbySelector]}>
                  <View style={styles.nearbyBadge}>
                    <Text style={{color: '#FFFFFF'}}>4</Text>
                  </View>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <MaterialCommunityIcons
                      name={item.icon}
                      size={45}
                      color={'#FFF'}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#FFF',
                      }}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
      <View
        style={{
          paddingTop: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: '#FFFFFF',
          paddingHorizontal: 15,
          flex: 5,
        }}>
        {/*<ScrollView style={{background: 'transparent'}} horizontal={true} showsHorizontalScrollIndicator={false}>*/}
        <FlatList
          data={samplePlaces}
          horizontal={true}
          style={{paddingVertical: 5}}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.place_id}
          renderItem={({item, index}) => (
            <View style={{padding: 5}}>
              <View style={styles.locationCard}>
                <View>
                  <Text style={{fontWeight: '600', fontSize: 22}}>
                    {item.name}
                  </Text>
                  <Text style={{fontSize: 18, color: 'gray'}}>Taxi</Text>
                </View>
                <View>
                  <Text style={{fontSize: 15, fontWeight: '600'}}>
                    Walking:
                  </Text>
                  <Text style={{fontSize: 16}}>Distance</Text>
                  <Text style={{fontSize: 16}}>Duration</Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Station', {placeName: item.name})
                  }
                  style={styles.locationCardBtn}>
                  <Text style={{color: '#FFFFFF', textAlign: 'center'}}>
                    OPEN
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#092D6C',
    paddingTop: 30,
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    // padding: 10,
  },
  nearbySelectorContainer: {
    width: (1.5 * Dimensions.get('window').width) / 5,
    padding: 5,
  },
  nearbyBadge: {
    backgroundColor: 'green',
    width: 25,
    height: 25,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: -5,
  },
  nearbySelector: {
    padding: 12,
  },
  locationCard: {
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    height: Dimensions.get('window').height / 3,
    width: (2 * Dimensions.get('window').width) / 3,
    justifyContent: 'space-between',
  },
  locationCardBtn: {
    backgroundColor: '#092D6C',
    padding: 10,
    borderRadius: 3,
  },
});
