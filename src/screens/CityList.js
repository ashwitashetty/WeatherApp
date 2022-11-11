import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';

import {useDispatch} from 'react-redux';
import {deleteFav} from '../redux/FavouriteSlice';
import {setFavourite} from '../redux/FavouriteSlice';
import { getData } from '../redux/WeatherSlice';

const CityList = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.favourite.value);
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.city}
        renderItem={({item}) => (
          <Pressable
          onPress={() => {
            dispatch(getData(item.id));
            navigation.navigate('HomeScreen');
          }}
            onLongPress={() => {
              dispatch(deleteFav({id: item.city}));
              dispatch(setFavourite(false));
            }}>
            <View style={styles.listItem}>
              <View>
                <Text style={styles.location}>{item.city}, {item.region}</Text>
                <View style={styles.tempDetails}>
                  <Image source={item.source} style={styles.weather} />
                  <Text style={styles.actualTemp}>{item.temperature}</Text>
                  <Text style={styles.unit}>°C</Text>

                  <Text style={styles.description}>{item.description}</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(deleteFav({id: item.city}));
                    dispatch(setFavourite(false));
                  }}>
                  <Image
                    source={require('/Volumes/Development/WeatherApp/src/assets/images/icon_favourite_active.png')}
                    style={styles.favIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default CityList;

const styles = StyleSheet.create({
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
    fontFamily: 'Roboto-Regular',
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
    marginBottom: 0.9,
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
    fontFamily: 'Roboto-Regular',
  },
  tempDetails: {
    flexDirection: 'row',
    fontFamily: 'Roboto-Regular',
  },
  weather: {
    height: 23,
    width: 23,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 16,
    marginRight: 1,
  },
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
    fontFamily: 'Roboto-Regular',
  },
  unit: {
    height: 15,
    color: '#FFFFFF',
    fontSize: 13,
    letterSpacing: 0,
    lineHeight: 15,
    marginTop: 15,
    marginLeft: 1,
    fontFamily: 'Roboto-Regular',
  },
  description: {
    height: 16,
    color: '#FFFFFF',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 16,
    marginTop: 14,
    marginLeft: 17,
    fontFamily: 'Roboto-Regular',
  },
});
