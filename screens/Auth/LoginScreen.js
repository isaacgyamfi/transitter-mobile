import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../../context/authContext';

export default function LoginScreen() {
  const {handleLoginPress} = useContext(AuthContext);
  return (
    <View
      style={{
        paddingVertical: 32,
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'space-between',
      }}>
      <View>
        <Text style={{fontSize: 55, fontWeight: 'bold'}}>Transitter</Text>
        <Text style={{fontSize: 24}}>Your secure taxi commute assistant</Text>
      </View>
      <TouchableOpacity
        style={{backgroundColor: '#092D6C', padding: 15, borderRadius: 3}}
        onPress={handleLoginPress}>
        <Text style={{color: '#FFFFFF', textAlign: 'center', fontSize: 14}}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}
