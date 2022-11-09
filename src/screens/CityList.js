import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import { useSelector } from 'react-redux';

// const DATA = [
//     {   
//         id:1,
//         city: 'Udupi, Karnataka',
//         source: require('/Volumes/Development/WeatherApp/src/assets/images/icon_mostly_sunny_small.png'),
//         temperature:"31",
//         description:"Mostly Sunny"
//     },
//     {
//         id:2,
//         city: 'Bengaluru, Karnataka',
//     source: require('/Volumes/Development/WeatherApp/src/assets/images/icon_rain_small.png'),
//         temperature:"29",
//         description:"Rain"
//     },
//     {
//         id:3,
//         city: 'Mumbai, Maharashtra',
//     source: require('/Volumes/Development/WeatherApp/src/assets/images/icon_mostly_cloudy_small.png'),
//         temperature:"32",
//         description:"Mostly Cloudy"
//     },
//     { 
//         id:4,
//         city: 'Kolkatta, West Bengal',
//     source: require('/Volumes/Development/WeatherApp/src/assets/images/icon_partly_cloudy_small.png'),
//         temperature:"30",
//         description:"Mostly Cloudy"
//     },
//     {
//         id:5,
//         city: 'Panaji, Goa',
//         source: require('/Volumes/Development/WeatherApp/src/assets/images/icon_thunderstorm_small.png'),
//         temperature:"31",
//         description:"Partly Cloudy"
//     },
//     {
//         id:6,
//         city: 'Newyork, United States',
//     source: require('/Volumes/Development/WeatherApp/src/assets/images/icon_clear_night_small.png'),
//         temperature:"24",
//         description:"Clear Night"
//     },
   
//   ];
  

  const CityList=()=>{

    const data=useSelector(state =>state.weather.value)
    return(
        <FlatList
            data={data}
           renderItem={({item})=>(
            <View>
            <View style={styles.listItem}>
              <View>
                <Text style={styles.location}>{item.city}</Text>
                <View style={styles.tempDetails}>
                  <Image
                    source={item.source}
                    style={styles.weather}
                  />
                  <Text style={styles.actualTemp}>{item.temperature}</Text>
                  <Text style={styles.unit}>°C</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              </View>
              <View>
                <Image
                  source={require('/Volumes/Development/WeatherApp/src/assets/images/icon_favourite_active.png')}
                  style={styles.favIcon}
                />
              </View>
            </View>
          </View>
            )}
            keyExtractor={item => item.id}
            />

         
    )
  }

  export default CityList;

  const styles=StyleSheet.create({
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 15,
       
      },
      addedText: {
        height: 15,
        color: '#FFFFFF',
        fontSize: 13,
        letterSpacing: 0,
        lineHeight: 15,
      },
      removeAll: {
        height: 15,
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '500',
        letterSpacing: 0,
        lineHeight: 15,
      },
      listItem: {
        height: 80,
        marginHorizontal: 16,
        backgroundColor: 'rgba(255, 255, 255,0.1)',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:0.9,
      },
      favIcon: {
        height: 17,
        width: 18,
        marginEnd: 20,
      },
      location: {
        height: 18,
        color: '#FFE539',
        fontSize: 15,
        fontWeight: '500',
        letterSpacing: 0,
        lineHeight: 18,
        marginLeft: 15,
        marginTop: 15,
      },
      tempDetails: {
        flexDirection: 'row',
      },
      weather: {
        height: 23,
        width: 23,
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 16,
        marginRight: 1,
      },
      style3: {
        height: 14,
        width: 22,
        marginLeft: 9,
        marginTop: 10,
        marginBottom: 16,
        marginRight: 1,
      },
    style4: {
        height: 16,
        width: 21.52,
        marginLeft: 9,
        marginTop: 10,
        marginBottom: 16,
        marginRight: 1,
      },
    style6: {
        height: 21,
        width: 20,
        marginLeft: 9,
        marginTop: 10,
        marginBottom: 16,
        marginRight: 1,
      },
    //   height: 21,
    //   width: 22,
      actualTemp: {
        height: 21,
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 0,
        lineHeight: 21,
        marginLeft: 9,
        marginTop: 11,
        marginBottom: 16,
        marginRight: 1,
      },
      unit: {
        height: 15,
        color: '#FFFFFF',
        fontSize: 13,
        letterSpacing: 0,
        lineHeight: 15,
        marginTop: 15,
        marginLeft: 1,
      },
      description: {
        height: 16,
    
        color: '#FFFFFF',
        fontSize: 14,
        letterSpacing: 0,
        lineHeight: 16,
        marginTop: 14,
        marginLeft: 17,
      },
    });