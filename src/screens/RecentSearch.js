import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import background from '../assets/images/background.png';
import CityList from './CityList';
import Header from '../components/Header'

const RecentSearch = ({navigation}) => {
  const handleBack=()=>{
    navigation.goBack();
      
    }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <SafeAreaView style={{flex: 1}}>
          <Header onPress={handleBack} name={'Recent Search'} />
          <View style={styles.headerText}>
            <Text style={styles.cityText}>You recently searched for</Text>
            <Text style={styles.clearText}>Clear All</Text>
          </View>
          <View style={{flex: 1, marginTop: 7}}>


            {/* <CityList /> */}


          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default RecentSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },

  image: {
    marginTop: 250,
    alignItems: 'center',
  },
  nothingIcon: {
    height: 84,
    width: 159,
  },
  text: {
    height: 21,
    width: 166,
    color: '#FFFFFF',
    //   fontFamily: Roboto;
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 25,
  },
  headerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  cityText: {
    height: 15,
    // width: 145,
    color: '#FFFFFF',
    // font-family: Roboto;
    fontSize: 13,
    letterSpacing: 0,
    lineHeight: 15,
    fontWeight: '500',
  },
  clearText: {
    height: 15,
    // width: 66,
    color: '#FFFFFF',
    // font-family: Roboto;
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 15,
    textAlign: 'right',
  },
});
