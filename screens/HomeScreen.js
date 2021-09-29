import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Destination from '../components/Destination';
import taxiPlaces from '../components/taxi-stations.json';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from '../context/authContext';

const GOOGLE_MAP_API = 'AIzaSyC9xeODqchewcF9288HmvypjPNXM-MjExw';
const GOOGLE_PACES_API_BASE_URL = 'https://maps.googleapis.com/maps/api/place';

const samplePlaces = taxiPlaces.results;

export default function HomeScreen() {
  const {getUserProfile} = useContext(AuthContext);

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
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserProfile();
    console.log(getUserProfile());
  }, [user]);

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
          flex: 3,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={{color: '#FFFFFF', fontSize: 22}}>Good morning</Text>
            <Text style={{color: '#FFFFFF', fontSize: 28, fontWeight: 'bold'}}>
              {/*{user['user profile'].givenName}*/}
              Isaac
            </Text>
          </View>
          <TouchableOpacity style={styles.userAccountBtn}>
            <MaterialIcons name={'notifications'} color={'#FFFFFF'} size={30} />
          </TouchableOpacity>
        </View>
        <View style={{paddingTop: 40}}>
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
        </View>
      </View>
      <View
        style={{
          paddingTop: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: '#FFFFFF',
          // paddingHorizontal: 15,
          flex: 4,
        }}>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 16}}>Taxi stations nearby</Text>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#092D6C',
              paddingVertical: 5,
              paddingHorizontal: 8,
              borderRadius: 20,
            }}>
            <Text style={{color: '#092D6C'}}>Refresh</Text>
          </TouchableOpacity>
        </View>
        {/*<ScrollView style={{background: 'transparent'}} horizontal={true} showsHorizontalScrollIndicator={false}>*/}
        <FlatList
          data={samplePlaces}
          horizontal={true}
          style={{paddingVertical: 5, paddingHorizontal: 10}}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.place_id}
          renderItem={({item, index}) => (
            <View style={{padding: 5}}>
              <View style={styles.locationCard}>
                <Image
                  source={require('../assets/images/sample-img.jpg')}
                  style={{width: '100%', height: 120}}
                />
                <View style={{padding: 15}}>
                  <View>
                    <Text style={{fontWeight: '600', fontSize: 20}}>
                      {item.name}
                    </Text>
                    <Text style={{fontSize: 15, color: 'gray'}}>Taxi</Text>
                    <Text style={{fontSize: 16, color: 'gray', marginTop: 5}}>
                      {item.vicinity}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Station', {place: item})
                    }
                    style={styles.locationCardBtn}>
                    <Text style={{color: '#FFFFFF', textAlign: 'center'}}>
                      OPEN
                    </Text>
                  </TouchableOpacity>
                </View>
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
  userAccountBtn: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
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
    height: Dimensions.get('window').height / 2.7,
    width: (2 * Dimensions.get('window').width) / 3,
    justifyContent: 'space-between',
  },
  locationCardBtn: {
    backgroundColor: '#092D6C',
    padding: 10,
    borderRadius: 3,
  },
});
