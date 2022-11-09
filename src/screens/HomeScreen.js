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
import Icon from "react-native-vector-icons/MaterialIcons"
// import LinearGradient from 'react-native-linear-gradient'

import background from '../assets/images/background.png';
import icon_menu_white from '../assets/images/icon_menu_white.png';
import icon_search_white from '../assets/images/icon_search_white.png';
import logo from '../assets/images/logo.png';
import icon_favourite from '../assets/images/icon_favourite.png';
import icon_mostly_sunny_small from '../assets/images/icon_mostly_sunny_small.png';
import icon_humidity_info from '../assets/images/icon_humidity_info.png';
import icon_precipitation_info from '../assets/images/icon_precipitation_info.png';
import icon_temperature_info from '../assets/images/icon_temperature_info.png';

import SearchScreen from './SearchScreen';

const HomeScreen = ({navigation}) => {

  const handleDrawer=()=>{
    navigation.openDrawer();
  }
  const handleSearch=()=>{
    navigation.navigate('Search')
  }
  return (
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
            <Icon name="search" size={23} color={"#FFFFFF"} style={styles.search} />
            </TouchableOpacity>
          </View>

          <View style={styles.textView}>
            <Text style={styles.date}>WED, 28 NOV 2018 11 :35 AM</Text>
            <Text style={styles.place}>Udupi, Karnataka</Text>
            <View style={styles.favView}>
              <Image source={icon_favourite} style={styles.favouriteIcon} />
              <Text style={styles.favouriteText}> Add to favourite</Text>
            </View>
            <View>
              <Image source={icon_mostly_sunny_small} style={styles.sunIcon} />
            </View>

            <View style={styles.tempItem}>
              <Text style={styles.tempValue}>31</Text>
              <Text style={styles.celcius}>°C</Text>
              <Text style={styles.faranheit}>°F</Text>
            </View>
            <Text style={styles.mostlySunny}>Mostly Sunny</Text>
          </View>
        </ScrollView>

        <View style={styles.detailView}>
          <ScrollView horizontal={true}>
            <View style={styles.insideScroll}>
              <View style={styles.bottomDetails}>
                <View style={styles.temperature}>
                  <Image
                    source={icon_temperature_info}
                    style={styles.tempIcon}
                  />
                  <View>
                    <Text style={styles.minmax}>Min - Max</Text>
                    <Text style={styles.tempNumber}>22°- 34°</Text>
                  </View>
                </View>
              </View>

              <View style={styles.bottomDetails}>
                <View style={styles.temperature}>
                  <Image
                    source={icon_precipitation_info}
                    style={styles.precipitation}
                  />
                  <View>
                    <Text style={styles.minmax}>Precipitation</Text>
                    <Text style={styles.tempNumber}>0%</Text>
                  </View>
                </View>
              </View>

              <View style={styles.bottomDetails}>
                <View style={styles.temperature}>
                  <Image source={icon_humidity_info} style={styles.humidity} />
                  <View>
                    <Text style={styles.minmax}>Humidity</Text>
                    <Text style={styles.tempNumber}>47%</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
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
    // margin:22
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
    // height: 17.49,
    // width: 17.49,
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
  },
  place: {
    height: 21,
    // width:138,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
  },
  favView: {
    flexDirection: 'row',
    marginTop: 23,
  },
  favouriteIcon: {
    height: 17,
    width: 18,
  },
  favouriteText: {
    height: 15,
    // width:94,
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 15,
  },
  sunIcon: {
    height: 67,
    width: 64,
    marginTop: 81,
  },



  tempItem: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop:13,
   
  },
  mostlySunny: {
    height: 21,
    width: 108,
    color: '#FFFFFF',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 21,
    textAlign: 'center',
    marginTop:11,
  },
  tempValue: {
    height: 61,
    width: 60,
    color: '#FFFFFF',
    fontSize: 52,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 66,
  },
  celcius: {
    height: 30,
    color: '#E32843',
    fontSize: 16,
    letterSpacing: 0,
    lineheight: 19,
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderTopLeftRadius:2,
    borderBottomLeftRadius:2,


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
    borderTopRightRadius:2,
    borderBottomRightRadius:2,
  },
  bottomDetails: {
    width: '35%',
  },
  detailView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255,0.1)',
    alignSelf: 'center',
    height: 100,
    justifyContent: 'space-evenly',
  },
  insideScroll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255,0.3)',
    flex: 1,
  },
  temperature: {
    marginTop: 30,
    marginHorizontal: 18,
    flexDirection: 'row',
    height: 41,
    width: 94,
  },
  tempIcon: {
    height: 26,
    width: 13,
    marginRight: 18,
  },
  precipitation: {
    height: 23,
    width: 24,
    marginRight: 15,
  },
  humidity: {
    height: 20,
    width: 15,
    marginRight: 16,
  },
  minmax: {
    height: 15,
    color: '#FFFFFF',
    fontSize: 13,
    letterSpacing: 0,
    lineHeight: 15,
  },
  tempNumber: {
    height: 21,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 21,
    marginTop: 5,
  },
  middleView: {
    height: 640,
    width: 360,
    alignItems: 'center',
  },
});
