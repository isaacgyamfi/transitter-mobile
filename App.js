/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import LocationContextProvider from './context/locationContext';
import MainApp from './navigation/App';
import AuthContextProvider from './context/authContext';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <AuthContextProvider>
        <LocationContextProvider>
          <MainApp />
        </LocationContextProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
};

export default App;
