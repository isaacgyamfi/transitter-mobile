import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ComplaintScreen from '../../screens/ComplaintScreen';

export default function TaxiVerificationResult({result}) {
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => setModalVisible(false);
  return (
    <View>
      <ComplaintScreen closeModal={closeModal} isVisible={modalVisible} />
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
            <Text style={{color: 'gray', fontSize: 20}}>
              {result.brand} {result.model}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 16}}>Reg. No.: </Text>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                {result.registrationNumber}
              </Text>
            </View>
            <View style={{marginTop: 5}}>
              <Text style={{fontSize: 15}}>{result.station.address.name}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderRadius: 2,
              borderWidth: StyleSheet.hairlineWidth,
            }}>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: `${result.colorCode.fender}`,
              }}
            />
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: `${result.colorCode.doors}`,
              }}
            />
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: `${result.colorCode.fender}`,
              }}
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
                source={require('../../assets/images/sample-driver.jpeg')}
                style={{width: '100%', height: '100%', borderRadius: 30}}
              />
            </View>
            <View>
              <Text style={{fontWeight: '600', fontSize: 14}}>
                {result.driver.name}
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
                <Text style={{marginLeft: 2, color: '#092D6C', fontSize: 16}}>
                  3.8
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(`tel:${result.driver.phone}`);
            }}
            style={styles.callBtn}>
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.reportTouchable}>
          <MaterialIcons name={'help-outline'} size={20} color={'#092D6C'} />
          <Text
            style={{
              color: '#092D6C',
              fontSize: 16,
              marginLeft: 5,
            }}>
            Report
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  reportTouchable: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
