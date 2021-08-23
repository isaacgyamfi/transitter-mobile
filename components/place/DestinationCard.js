import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {stationStyles} from '../../styles/station';

export function DestinationCard({destination}) {
  return (
    <TouchableOpacity style={{marginVertical: 5}}>
      <View style={stationStyles.destinationCard}>
        <View
          style={{
            marginBottom: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 14, color: 'gray'}}>Junction</Text>
          <Icon name={'keyboard-arrow-down'} color={'#175FE0'} size={25} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 18, color: '#494949'}}>
            {destination.name}
          </Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#175FE0'}}>
            GHS {destination.fare.toString()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
