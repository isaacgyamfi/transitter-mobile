import React from 'react';
import Modal from 'react-native-modal';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export function TaxiRequestModal({isVisible, closeModal}) {
  return (
    <Modal
      style={{backgroundColor: '#FFFFFF', padding: 15}}
      isVisible={isVisible}
      animationInTiming={400}
      animationOutTiming={500}>
      <View style={{flex: 1}}>
        <View>
          <TouchableOpacity
            style={{justifyContent: 'flex-end', flexDirection: 'row'}}
            onPress={() => closeModal()}>
            <AntDesign name={'close'} size={30} />
          </TouchableOpacity>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>
            Request for taxi pick-up
          </Text>
          <Text style={{fontSize: 18, marginTop: 15}}>
            Request for a charter(drop-in) or signal to join a vehicle with
            available space
          </Text>
        </View>
        <DestinationComponent />
      </View>
    </Modal>
  );
}

function DestinationComponent(
  currentLocation,
  value,
  changeText,
  showPredictions,
  predictions,
  onSelectedPrediction,
) {
  return (
    <View>
      <View
        style={{
          marginTop: 20,
        }}>
        <Text style={{fontSize: 18}}>You are here:</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>KFC, Haatso</Text>
      </View>
      <View style={{marginVertical: 20}}>
        <Text style={{fontSize: 18}}>Set destination</Text>
        <TextInput
          style={{
            backgroundColor: '#FFFFFF',
            fontSize: 20,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
          placeholder="Place name..."
          value={value}
          onChangeText={changeText}
          returnKeyType={'search'}
        />
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#092D6C',
            paddingVertical: 15,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
          }}>
          <Text style={{color: '#FFFFFF', fontSize: 18}}>Request</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
