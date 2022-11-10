import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import background from '../assets/images/background.png';
import icon_menu_white from '../assets/images/icon_menu_white.png';

import logo from '../assets/images/logo.png';
import icon_favourite from '../assets/images/icon_favourite.png';
import icon_favourite_active from '../assets/images/icon_favourite_active.png';

import SearchScreen from './SearchScreen';
import ScrollBar from '../components/ScrollBar';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {getData} from '../redux/WeatherSlice';
import {addFav} from '../redux/FavouriteSlice';
import {deleteFav} from '../redux/FavouriteSlice';
import {setFavourite} from '../redux/FavouriteSlice';

import moment from 'moment';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState(false);
  const list = useSelector(state => state.weather.list);
  console.log(list);

  const [celcius, setCelsius] = useState(list.current?.temp_c);

  const favourite = useSelector(state => state.favourite.favourite);
  console.log('I am fav', favourite);
  const [clicked, setClicked] = useState(favourite);

  const handleDrawer = () => {
    navigation.openDrawer();
  };
  const handleSearch = () => {
    setSearch(!search);
  };

  const [date, setDate] = useState('');
  const currentDateTime = () => {
    const dateTimeMoment = moment()
      .utcOffset('+05:30')
      .format('ddd, DD MMM YY     hh:mm a')
      .toUpperCase();
    setDate(dateTimeMoment);
  };

  useEffect(() => {
    dispatch(getData('Udupi'));
    currentDateTime();
    setCelsius(list.current?.temp_c);
  }, []);

  const handleFaranheit = () => {
    setCelsius(list.current?.temp_f);
  };
  const handleCelcius = () => {
    setCelsius(list.current?.temp_c);
  };
  const source = {uri: `https:${list.current?.condition.icon}`};
  const obj = {
    id: list.location?.name,
    city: list.location?.name,

    source: source,
    temperature: celcius,
    description: list.current?.condition.text,
  };

  const handlePress = () => {
    setClicked(!clicked), dispatch(setFavourite(clicked));
    dispatch(addFav(obj));
    favourite ? dispatch(deleteFav(obj)) : dispatch(addFav(obj));
  };
  return (
    <>
      {!search ? (
        <View style={styles.container}>
          <ImageBackground
            source={background}
            resizeMode="cover"
            style={styles.backgroundImage}>
            <ScrollView>
              <View style={styles.topView}>
                <View style={styles.topView1}>
                  <TouchableOpacity onPress={handleDrawer}>
                    <Image source={icon_menu_white} style={styles.menu} />
                  </TouchableOpacity>
                  <Image source={logo} style={styles.logo} />
                </View>
                <TouchableOpacity onPress={handleSearch}>
                  <Icon
                    name="search"
                    size={23}
                    color={'#FFFFFF'}
                    style={styles.search}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.textView}>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.place}>
                  {list.location?.name}, {list.location?.region}
                </Text>
                <View style={styles.favView}>
                  {favourite ? (
                    <>
                      <TouchableOpacity onPress={handlePress}>
                        <Image
                          source={icon_favourite_active}
                          style={styles.favouriteIcon}
                        />
                      </TouchableOpacity>
                      <Text style={styles.favouriteText}>Favourite</Text>
                    </>
                  ) : (
                    <>
                      <TouchableOpacity onPress={handlePress}>
                        <Image
                          source={icon_favourite}
                          style={styles.favouriteIcon}
                        />
                      </TouchableOpacity>
                      <Text style={styles.favouriteText}>Add to favourite</Text>
                    </>
                  )}
                </View>
                <View>
                  <Image
                    // source={icon_mostly_sunny_small}
                    source={{uri: `https:${list.current?.condition.icon}`}}
                    style={styles.sunIcon}
                  />
                </View>

                <View style={styles.tempItem}>
                  <Text style={styles.tempValue}>{celcius}</Text>
                  <View style={styles.uniqueGroup}>
                    {celcius == list.current?.temp_c ? (
                      <>
                        <TouchableOpacity onPress={handleCelcius}>
                          <Text style={styles.celcius}>°C</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleFaranheit}>
                          <Text style={styles.faranheit}>°F</Text>
                        </TouchableOpacity>
                      </>
                    ) : (
                      <>
                        <TouchableOpacity onPress={handleCelcius}>
                          <Text style={styles.faranheit}>°C</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleFaranheit}>
                          <Text style={styles.celcius}>°F</Text>
                        </TouchableOpacity>
                      </>
                    )}
                  </View>
                </View>
                <Text style={styles.mostlySunny}>
                  {list.current?.condition.text}
                </Text>
              </View>
            </ScrollView>
            <ScrollBar />
          </ImageBackground>
        </View>
      ) : (
        <SearchScreen setSearch={setSearch} search={search} />
      )}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  topView1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topView: {
    margin: 22,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menu: {
    height: 12,
    width: 18,
    marginRight: '20%',
  },
  logo: {
    height: 24,
    width: 113,
  },
  search: {
    marginTop: 5,
  },
  textView: {
    marginTop: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    height: 15,
    // width:220,
    opacity: 0.6,
    color: '#FFFFFF',
    fontSize: 13,
    letterSpacing: 1.5,
    lineHeight: 15,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  place: {
    height: 21,

    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Roboto-Regular',
  },
  favView: {
    flexDirection: 'row',
    marginTop: 23,
  },
  favouriteIcon: {
    height: 17,
    width: 18,
    marginRight: 7,
  },
  favouriteText: {
    height: 15,

    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 15,
    fontFamily: 'Roboto-Regular',
  },
  sunIcon: {
    height: 90,
    width: 100,
    marginTop: 81,
  },

  tempItem: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 13,
  },
  mostlySunny: {
    height: 21,

    color: '#FFFFFF',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 11,
    fontFamily: 'Roboto-Regular',
  },
  tempValue: {
    height: 61,

    color: '#FFFFFF',
    fontSize: 52,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 66,
    fontFamily: 'Roboto-Regular',
  },
  celcius: {
    height: 30,
    color: '#E32843',
    fontSize: 16,
    letterSpacing: 0,
    lineheight: 19,
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    fontFamily: 'Roboto-Regular',
  },
  faranheit: {
    height: 30,
    color: '#FFFFFF',
    fontSize: 16,
    letterSpacing: 0,
    lineheight: 18,
    padding: 5,
    borderWidth: 1,
    borderColor: 'white',
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    fontFamily: 'Roboto-Regular',
  },

  middleView: {
    height: 640,
    width: 360,
    alignItems: 'center',
  },
  uniqueGroup: {
    height: 30,
    flexDirection: 'row',
    borderColor: 'white',
    borderRadius: 2,
    marginTop: 20,
    marginLeft: 5,
    borderWidth: 0.5,
  },
});
