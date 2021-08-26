import React from 'react';
import {Text, View} from 'react-native';

export default function NotificationsScreen() {
  return (
    <View style={{flex: 1}}>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#092D6C'}}>
          Notifications
        </Text>
      </View>
      <View
        style={{
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text style={{fontSize: 18, color: '#092D6C'}}>No notifications</Text>
      </View>
    </View>
  );
}
