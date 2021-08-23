import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {DestinationCard} from '../components/place/DestinationCard';
import {stationStyles} from '../styles/station';
export default function StationScreen({route, navigation}) {
  const {placeName} = route.params;
  return (
    <View style={{height: '100%', paddingBottom: 50}}>
      <View style={stationStyles.header}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{padding: 10}}>
            <Icon name={'arrow-back'} size={30} color={'#175FE0'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{padding: 10}}>
            <Icon name={'edit-location'} size={35} color={'#175FE0'} />
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 20, paddingBottom: 20}}>
          <View>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>{placeName}</Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 16}}>Accra, Greater Accra</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={stationStyles.tag}>
              <Text>Taxi station</Text>
            </View>
            <View style={stationStyles.tag}>
              <Text>Bus stop</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{paddingHorizontal: 15, paddingTop: 15}}>
        <View style={{paddingVertical: 5}}>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Destinations</Text>
        </View>
        <FlatList
          data={[
            {key: '1', name: 'Legon First', type: 'Junction', fare: 1.2},
            {key: '2', name: 'UPSA Junction', type: 'Junction', fare: 1.5},
            {key: '3', name: 'Atomic First', type: 'Bus stop', fare: 1.8},
            {key: '4', name: 'Atomic Second', type: 'Bus stop', fare: 1.8},
            {key: '5', name: 'Firestone', type: 'Junction', fare: 2.0},
          ]}
          renderItem={({item, index}) => <DestinationCard destination={item} />}
        />
      </View>
      <TouchableOpacity style={stationStyles.floatingBtn}>
        <Icon name={'directions'} size={30} color={'#FFFFFF'} />
      </TouchableOpacity>
    </View>
  );
}
