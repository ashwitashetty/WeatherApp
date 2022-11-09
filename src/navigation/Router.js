import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';


const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
    <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}} />
  </Stack.Navigator>
  )
}

export default Router