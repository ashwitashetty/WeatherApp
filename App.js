import {View, Text} from 'react-native';
import React from 'react';

import DrawerNavigation from '../WeatherApp/src/navigation/DrawerNavigation';
import HomeScreen from './src/screens/HomeScreen';

import {Provider} from 'react-redux';
import Store from './src/redux/Store';
import { PersistGate } from 'redux-persist/es/integration/react';
import {persistStore} from "redux-persist"

let persistor = persistStore(Store);

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <DrawerNavigation />
        </PersistGate>
    </Provider>
  );
};

export default App;
