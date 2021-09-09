import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import StationScreen from '../screens/StationScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PlacesScreen from '../screens/PlacesScreen';
import UpdateScreen from '../screens/UpdateScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
        name={'Station'}
        component={PlacesScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons
              name={'transfer-within-a-station'}
              size={25}
              color={color}
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
      <BottomTab.Screen
        name={'Notifications'}
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name={'notifications-outline'} size={25} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function MainApp() {
  return <BottomTabNavigation />;
}
