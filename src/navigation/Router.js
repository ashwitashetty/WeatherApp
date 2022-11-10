import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
// import NoFavourite from '../components/NoFavourite';


const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
    {/* <Stack.Screen name="NoFavourite" component={NoFavourite} options={{headerShown:false}} /> */}
  </Stack.Navigator>
  )
}

export default Router