import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import background from '../assets/images/background.png';
import icon_nothing from '../assets/images/icon_nothing.png';
import Header from './Header';

const NoFavourite = ({navigation}) => {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.image}>
            <Image source={icon_nothing} style={styles.nothingIcon} />
            <Text style={styles.text}>No Favourites added</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default NoFavourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  header: {
    height: 56,
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header2: {
    flexDirection: 'row',
    margin: 15,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 34,
  },
  toptext: {
    height: 24,
    width: 204,
    color: '#292F33',
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 24,
    fontFamily: 'Roboto-Regular',
  },
  searchIcon: {
    margin: 15,
    height: 24,
    width: 24,
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
    fontFamily: 'Roboto-Regular',
  },
});
