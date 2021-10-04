import React from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {stationStyles} from '../styles/station';
import {Picker} from '@react-native-picker/picker';
import {regionCode, year} from '../components/numberPlates';
import axios from 'axios';

export default function ComplaintScreen({isVisible, closeModal}) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Enter your name'),
    phone: Yup.string().max(10).min(10).required('Enter phone number'),
    description: Yup.string().required('Tell us what happened...'),
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

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  const handleComplaint = async (values, action) => {
    console.log(values);
    action.setSubmitting(true);
    try {
      const response = await axios.post('http://10.0.2.2:5000/complaints/add', {
        user: {
          name: values.name,
          phone: values.phone,
        },
        complaint: {
          complaintType: values.type,
          subject: values.subject,
          description: values.description,
        },
        registrationNumber: `${values.regionInitial}-${values.carNumber}-${values.year}`,
      });
      if (response) {
        Alert.alert(
          'Complaint Submission',
          'Your complaint has been duly recorded. It will be reviewed for further investigation. Thank you.',
          [{text: 'Close'}],
        );
        closeModal();
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={keyboardVerticalOffset}>
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
              Report a case
            </Text>
            <Text style={{fontSize: 16, marginTop: 15}}>
              Let us be aware of any suspected incident that needs to be
              addressed.
            </Text>
          </View>
          <View style={{paddingVertical: 10}}>
            <Formik
              initialValues={{
                name: '',
                phone: '',
                type: '',
                subject: '',
                description: '',
                regionInitial: '',
                carNumber: '',
                year: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => handleComplaint(values, actions)}>
              {props => {
                return (
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View style={{width: '50%', padding: 5}}>
                        <Text style={{marginVertical: 5}}>Name</Text>
                        <TextInput
                          value={props.values.name}
                          onChangeText={props.handleChange('name')}
                          style={{
                            borderWidth: StyleSheet.hairlineWidth,
                            borderRadius: 2,
                            padding: 10,
                            backgroundColor: '#EEEEEE',
                            width: '100%',
                          }}
                        />
                      </View>
                      <View style={{width: '50%', padding: 5}}>
                        <Text style={{marginVertical: 5}}>Phone</Text>
                        <TextInput
                          value={props.values.phone}
                          onChangeText={props.handleChange('phone')}
                          keyboardType={'phone-pad'}
                          style={{
                            borderWidth: StyleSheet.hairlineWidth,
                            borderRadius: 2,
                            padding: 10,
                            backgroundColor: '#EEEEEE',
                            width: '100%',
                          }}
                        />
                      </View>
                    </View>
                    <View>
                      <Text style={{marginVertical: 5}}>Type</Text>
                      <Picker
                        mode={'dropdown'}
                        style={{
                          borderWidth: StyleSheet.hairlineWidth,
                          borderRadius: 2,
                          padding: 10,
                          backgroundColor: '#EEEEEE',
                          width: '100%',
                        }}
                        selectedValue={props.values.type}
                        onValueChange={(itemValue, index) =>
                          props.setFieldValue('type', itemValue)
                        }>
                        <Picker.Item key={'a'} value={''} />
                        {['FARE', 'THEFT', 'ABUSE', 'FORGOTTEN ITEM'].map(
                          (item, index) => (
                            <Picker.Item
                              key={index}
                              label={item}
                              value={item}
                            />
                          ),
                        )}
                      </Picker>
                    </View>
                    <View>
                      <Text style={{marginVertical: 5}}>Subject</Text>
                      <TextInput
                        value={props.values.subject}
                        onChangeText={props.handleChange('subject')}
                        style={{
                          borderWidth: StyleSheet.hairlineWidth,
                          borderRadius: 2,
                          padding: 10,
                          backgroundColor: '#EEEEEE',
                          width: '100%',
                        }}
                      />
                    </View>
                    <View>
                      <Text style={{marginVertical: 5}}>Description</Text>
                      <TextInput
                        value={props.values.description}
                        onChangeText={props.handleChange('description')}
                        placeholder={'Explain what happened'}
                        multiline={true}
                        style={{
                          borderWidth: StyleSheet.hairlineWidth,
                          borderRadius: 2,
                          padding: 10,
                          backgroundColor: '#EEEEEE',
                          width: '100%',
                        }}
                      />
                    </View>
                    <Text style={{marginVertical: 5}}>
                      Vehicle Registration
                    </Text>
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
                              <Picker.Item
                                key={index}
                                label={item}
                                value={item}
                              />
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
                              <Picker.Item
                                key={index}
                                label={item}
                                value={item}
                              />
                            ))}
                          </Picker>
                        </View>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TouchableOpacity
                        onPress={() => props.handleSubmit()}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingVertical: 10,
                          paddingHorizontal: 14,
                          marginTop: 20,
                          shadowColor: '#000',
                          shadowOffset: {
                            width: 0,
                            height: 3,
                          },
                          shadowOpacity: 0.27,
                          shadowRadius: 4.65,
                          elevation: 6,
                          backgroundColor: '#092D6C',
                          borderRadius: 25,
                          width: '100%',
                        }}>
                        <Text style={stationStyles.callBtnText}>Submit</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
            </Formik>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  registrationPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  miniPickerContainer: {
    flex: 4,
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  miniPicker: {
    height: 50,
    width: '100%',
    backgroundColor: '#DDDDDD',
  },
  numberPlateTextInput: {
    fontSize: 25,
    // fontWeight: 'bold',
    letterSpacing: 10,
    textAlign: 'center',
  },
});
