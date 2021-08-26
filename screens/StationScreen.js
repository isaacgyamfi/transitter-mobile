import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {DestinationCard} from '../components/place/DestinationCard';
import {stationStyles} from '../styles/station';
export default function StationScreen({route, navigation}) {
  const {placeName} = route.params;
  return (
    <View style={{flex: 1}}>
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
            <Icon name={'arrow-back'} size={30} color={'#092D6C'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{padding: 10}}>
            <Icon name={'edit-location'} size={35} color={'#092D6C'} />
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
              <Text style={{color: '#092D6C'}}>Taxi station</Text>
            </View>
            <View style={stationStyles.tag}>
              <Text style={{color: '#092D6C'}}>Bus stop</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 15,
            }}>
            <TouchableOpacity style={stationStyles.callBtn}>
              <Icon name={'call'} size={25} color={'#FFFFFF'} />
            </TouchableOpacity>
            <TouchableOpacity style={stationStyles.callToActionBtn}>
              <Icon name={'person-pin'} size={25} color={'#092D6C'} />

              <Text style={stationStyles.callToActionBtnText}>Request</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stationStyles.callToActionBtn}>
              <Icon name={'help-outline'} size={25} color={'#092D6C'} />

              <Text style={stationStyles.callToActionBtnText}>Complain</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 15,
          paddingTop: 15,
          paddingBottom: 5,
          flex: 6,
        }}>
        <View style={{paddingVertical: 5}}>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Destinations</Text>
        </View>
        <FlatList
          data={[
            {
              key: '1',
              name: 'Madina',
              type: 'Junction',
              fare: 1.2,
              stops: [
                {
                  key: '1',
                  name: 'Atomic Roundabout',
                  type: 'bus stop',
                  vicinity: 'Accra',
                },
              ],
            },
            {key: '2', name: 'Haatso', type: 'Junction', fare: 1.5, stops: []},
            {key: '3', name: 'Spintex', type: 'Bus stop', fare: 1.8, stops: []},
            {key: '4', name: 'Accra', type: 'Bus stop', fare: 1.8, stops: []},
            {key: '5', name: 'Circle', type: 'Junction', fare: 2.0, stops: []},
          ]}
          renderItem={({item, index}) => <DestinationCard destination={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <TouchableOpacity style={stationStyles.floatingBtn}>
        <Icon name={'directions'} size={30} color={'#FFFFFF'} />
      </TouchableOpacity>
    </View>
  );
}
