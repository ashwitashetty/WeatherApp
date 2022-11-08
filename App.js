import { View, Text } from 'react-native'
import React from 'react'

import DrawerNavigation from '../WeatherApp/src/navigation/DrawerNavigation'
import HomeScreen from './src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'

import NoFavourite from './src/screens/NoFavourite'
const App = () => {
  return (
    <NavigationContainer>
<DrawerNavigation/>
</NavigationContainer>

  )
}

export default App