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
import {Picker} from '@react-native-picker/picker';
import {regionCode, year} from '../components/numberPlates';

export function TaxiVerificationModal({isVisible, closeModal}) {
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
            Verify your taxi
          </Text>
          <Text style={{fontSize: 18, marginTop: 15}}>
            Local taxis are identified by the yellow car number place with
            orange or yellow colored fenders.
          </Text>
          <Text style={{fontSize: 18, marginTop: 15}}>Eg. GR-5234-20</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingVertical: 30,
            marginTop: 5,
          }}>
          <View
            style={{
              flex: 3,
              padding: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 50,
                width: '80%',
                backgroundColor: '#DDDDDD',
              }}>
              <Picker>
                {regionCode.map((item, index) => (
                  <Picker.Item key={item} label={item} value={item} />
                ))}
              </Picker>
            </View>
          </View>
          <View
            style={{
              flex: 5,
              padding: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 50,
                width: '95%',
                backgroundColor: '#DDDDDD',
              }}>
              <TextInput
                placeholder={'1234'}
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  letterSpacing: 10,
                  textAlign: 'center',
                }}
                keyboardType={'numeric'}
                maxLength={4}
              />
            </View>
          </View>
          <View
            style={{
              flex: 3,
              padding: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 50,
                width: '80%',
                backgroundColor: '#DDDDDD',
              }}>
              <Picker>
                {year.map((item, index) => (
                  <Picker.Item key={item} label={item} value={item} />
                ))}
              </Picker>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: '#092D6C',
              paddingVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#FFFFFF', fontSize: 20}}>Look up</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{borderWidth: StyleSheet.hairlineWidth, marginVertical: 20}}
        />
      </View>
    </Modal>
  );
}
