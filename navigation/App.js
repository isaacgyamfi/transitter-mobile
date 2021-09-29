import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import StationScreen from '../screens/StationScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import UpdateScreen from '../screens/UpdateScreen';
import {TaxiVerificationScreen} from '../screens/TaxiVerificationScreen';
import {AuthContext} from '../context/authContext';
import {useContext} from 'react';
import LoginScreen from '../screens/Auth/LoginScreen';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Station'}
        component={StationScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function BottomTabNavigation() {
  return (
    <BottomTab.Navigator tabBarOptions={{activeTintColor: '#092D6C'}}>
      <BottomTab.Screen
        name={'Home'}
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'home-map-marker'} size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={'Verify taxi'}
        component={TaxiVerificationScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons
              style={{marginTop: -20}}
              name={'verified-user'}
              size={40}
              color={'#092D6C'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={'Updates'}
        component={UpdateScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name={'newspaper-o'} size={22} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function MainApp() {
  const {authToken} = useContext(AuthContext);
  return <>{!authToken ? <LoginScreen /> : <BottomTabNavigation />}</>;
}
