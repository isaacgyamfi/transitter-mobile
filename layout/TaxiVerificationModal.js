import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Picker} from '@react-native-picker/picker';
import {regionCode, year} from '../components/numberPlates';
import {homeStyles} from '../styles/home';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function TaxiVerificationModal({isVisible, closeModal}) {
  const [regionalCode, setRegionalCode] = useState();
  return (
    <Modal
      style={{backgroundColor: '#FFFFFF', padding: 20}}
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
          <Text style={{fontSize: 16, marginTop: 15}}>
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
            paddingVertical: 20,
            marginTop: 5,
          }}>
          <View style={styles.miniPickerContainer}>
            <View style={styles.miniPicker}>
              <Picker
                selectedValue={regionalCode}
                onValueChange={(itemValue, index) =>
                  setRegionalCode(itemValue)
                }>
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
                style={styles.numberPlateTextInput}
                keyboardType={'numeric'}
                maxLength={4}
              />
            </View>
          </View>
          <View style={styles.miniPickerContainer}>
            <View style={styles.miniPicker}>
              <Picker>
                {year.map((item, index) => (
                  <Picker.Item key={item} label={item} value={item} />
                ))}
              </Picker>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity style={homeStyles.touchableBtn}>
            <Ionicons name={'search'} color={'#FFFFFF'} size={22} />
            <Text style={{color: '#FFFFFF', fontSize: 18, marginLeft: 5}}>
              Look up
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: StyleSheet.hairlineWidth,
            marginVertical: 15,
            borderColor: '#DDDDDD',
          }}
        />
        <View>
          <View style={{marginBottom: 5}}>
            <Text style={{color: 'green'}}>Taxi found</Text>
          </View>
          <View style={styles.resultCard}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={{color: 'gray', fontSize: 20}}>Daewoo Matiz</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 16}}>Reg. No.: </Text>
                  <Text style={{fontWeight: 'bold', fontSize: 16}}>
                    GR 1232 19
                  </Text>
                </View>
                <View style={{marginTop: 5}}>
                  <Text style={{fontSize: 15}}>
                    Legon Okponglo Taxi Station
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  borderRadius: 2,
                  borderWidth: StyleSheet.hairlineWidth,
                }}>
                <View
                  style={{width: 20, height: 20, backgroundColor: 'yellow'}}
                />
                <View
                  style={{width: 20, height: 20, backgroundColor: 'black'}}
                />
                <View
                  style={{width: 20, height: 20, backgroundColor: 'yellow'}}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.driverImgContainer}>
                  <Image
                    source={require('../assets/images/sample-driver.jpeg')}
                    style={{width: '100%', height: '100%', borderRadius: 30}}
                  />
                </View>
                <View>
                  <Text style={{fontWeight: '600', fontSize: 14}}>
                    Emmanuel Simpson
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <FontAwesome
                      name={'star-half-full'}
                      size={16}
                      color={'#092D6C'}
                    />
                    <Text
                      style={{marginLeft: 2, color: '#092D6C', fontSize: 16}}>
                      3.8
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.callBtn}>
                <FontAwesome5 name={'phone-alt'} color={'#092D6C'} size={20} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            />
          </View>
          <View>
            <TouchableOpacity
              style={{
                paddingVertical: 8,
                paddingHorizontal: 10,
                borderRadius: 50,
                // alignSelf: 'flex-end',
              }}>
              <MaterialIcons
                name={'help-outline'}
                size={25}
                color={'#092D6C'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  miniPickerContainer: {
    flex: 3,
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  miniPicker: {
    height: 50,
    width: '80%',
    backgroundColor: '#DDDDDD',
  },
  numberPlateTextInput: {
    fontSize: 25,
    // fontWeight: 'bold',
    letterSpacing: 10,
    textAlign: 'center',
  },
  resultCard: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    padding: 15,
    borderRadius: 5,
  },
  driverImgContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'gray',
    marginRight: 5,
  },
  callBtn: {
    backgroundColor: 'rgba(23, 95, 224, 0.08)',
    // paddingVertical: 8,
    padding: 10,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#092D6C',
  },
});
