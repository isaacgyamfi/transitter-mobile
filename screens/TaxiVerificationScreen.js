import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {Formik} from 'formik';
import * as Yup from 'yup';
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import TaxiVerificationResult from '../components/home/TaxiVerificationResult';

export function TaxiVerificationScreen({isVisible, closeModal}) {
  const [taxiResult, setTaxiResult] = useState([]);

  const validationSchema = Yup.object().shape({
    regionInitial: Yup.string()
      .min(2, 'Regional initials should be 2 characters')
      .max(2, 'Regional initials should be 2 characters')
      .required('Enter region initial letters'),
    carNumber: Yup.string()
      .min(1, 'Car digits should be more than 1 digit')
      .max(4, 'Car digits cannot exceed 4 digits')
      .required(
        'Enter car number digits in the middle of the registration number',
      ),
    year: Yup.string()
      .min(1, 'Year code characters cannot be less than 1')
      .max(2, 'Year code characters cannot exceed 2')
      .required('Enter the year code'),
  });

  const handleTaxiVerification = (values, actions) => {
    console.log(values);
  };

  return (
    <View style={{flex: 1, padding: 20, backgroundColor: '#FFFFFF'}}>
      <View style={{marginTop: 10}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Verify a taxi</Text>
        <Text style={{fontSize: 16, marginTop: 15}}>
          Local taxis are identified by the yellow car number place with orange
          or yellow colored fenders.
        </Text>
        <Text style={{fontSize: 18, marginTop: 15}}>Eg. GR-5234-20</Text>
      </View>
      <Formik
        initialValues={{regionInitial: '', carNumber: '', year: ''}}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => handleTaxiVerification(values, actions)}>
        {props => {
          return (
            <View>
              <View style={styles.registrationPicker}>
                <View style={styles.miniPickerContainer}>
                  <View style={styles.miniPicker}>
                    <Picker
                      selectedValue={props.values.regionInitial}
                      onValueChange={(itemValue, index) =>
                        props.setFieldValue('regionInitial', itemValue)
                      }>
                      <Picker.Item key={'a'} value={''} />
                      {regionCode.map((item, index) => (
                        <Picker.Item key={index} label={item} value={item} />
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
                      value={props.values.carNumber}
                      onChangeText={props.handleChange('carNumber')}
                    />
                  </View>
                </View>
                <View style={styles.miniPickerContainer}>
                  <View style={styles.miniPicker}>
                    <Picker
                      selectedValue={props.values.year}
                      onValueChange={itemValue =>
                        props.setFieldValue('year', itemValue)
                      }>
                      <Picker.Item key={'a'} value={''} />
                      {year.map((item, index) => (
                        <Picker.Item key={index} label={item} value={item} />
                      ))}
                    </Picker>
                  </View>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  onPress={props.handleSubmit}
                  style={homeStyles.touchableBtn}>
                  <Ionicons name={'search'} color={'#FFFFFF'} size={22} />
                  <Text style={{color: '#FFFFFF', fontSize: 18, marginLeft: 5}}>
                    Look up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      </Formik>
      <View style={styles.divider} />
      <View style={{width: '100%'}}>
        {taxiResult.length !== 0 ? (
          <View
            style={{
              backgroundColor: 'rgba(255, 0, 0, 0.25)',
              padding: 10,
              flexDirection: 'row',
            }}>
            <Ionicons name={'warning-outline'} size={22} color={'red'} />
            <Text style={{fontSize: 14, paddingLeft: 5}}>
              Vehicle registration entered not found.
            </Text>
          </View>
        ) : taxiResult ? (
          <TaxiVerificationResult />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  registrationPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
    marginTop: 5,
  },
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
  divider: {
    borderWidth: StyleSheet.hairlineWidth,
    marginVertical: 15,
    borderColor: '#DDDDDD',
  },
});
