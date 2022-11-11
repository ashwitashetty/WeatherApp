import {StyleSheet, Text, View, ScrollView, Image,useState} from 'react-native';
import React from 'react';

import icon_humidity_info from '../assets/images/icon_humidity_info.png';
import icon_precipitation_info from '../assets/images/icon_precipitation_info.png';
import icon_temperature_info from '../assets/images/icon_temperature_info.png';
import {useSelector} from 'react-redux';


const ScrollBar = () => {

  const list = useSelector(state => state.weather.list);
  return (
    <View style={styles.detailView}>
      <ScrollView horizontal={true}>
        <View style={styles.insideScroll}>
          <View style={styles.bottomDetails}>
            <View style={styles.temperature}>
              <Image source={icon_temperature_info} style={styles.tempIcon} />
              <View>
                <Text style={styles.minmax}>Min - Max</Text>
                <Text style={styles.tempNumber}>{list?.current?.temp_c -3}°- {list?.current?.temp_c + 3}°</Text>
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
                <Text style={styles.tempNumber}>
                  {list?.current?.precip_mm}%
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomDetails}>
            <View style={styles.temperature}>
              <Image source={icon_humidity_info} style={styles.humidity} />
              <View>
                <Text style={styles.minmax}>Humidity</Text>
                <Text style={styles.tempNumber}>
                  {list?.current?.humidity}%
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ScrollBar;

const styles = StyleSheet.create({
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
  bottomDetails: {
    width: '35%',
  },
  temperature: {
    marginTop: 30,
    marginHorizontal: 18,
    flexDirection: 'row',
    height: 41,
    width: 94,
    fontFamily: 'Roboto-Regular',
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
    fontFamily: 'Roboto-Regular',
  },
  humidity: {
    height: 20,
    width: 15,
    marginRight: 16,
    fontFamily: 'Roboto-Regular',
  },
  minmax: {
    height: 15,
    color: '#FFFFFF',
    fontSize: 13,
    letterSpacing: 0,
    lineHeight: 15,
    fontFamily: 'Roboto-Regular',
  },
  tempNumber: {
    height: 21,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 21,
    marginTop: 5,
    fontFamily: 'Roboto-Regular',
  },
});
