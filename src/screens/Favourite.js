import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import background from '../assets/images/background.png';
import CityList from './CityList';
import Header from '../components/Header';
import {useSelector} from 'react-redux';
import NoFavourite from '../components/NoFavourite';
import { useDispatch } from 'react-redux';
import { removeAll } from '../redux/FavouriteSlice';

const Favourite = ({navigation}) => {
  const data = useSelector(state => state.favourite.value);
  const [remove,setRemove]=useState(false)
  const dispatch=useDispatch();

  const handleBack = () => {
    navigation.goBack();
  };
  const handlePress = () => {
    Alert.alert('', 'Are you sure want to remove all the favourites', [
      {
        text: 'NO',

        onPress: () => console.log('No Pressed'),
      },
      {
        text: 'YES', onPress: () => {
        dispatch(removeAll())
        setRemove(!remove)}},
    ]);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <SafeAreaView style={{flex: 1}}>
          <Header onPress={handleBack} name={'Favourite'} />

          {!remove? (
            <>
              <View style={styles.headerText}>
                <Text style={styles.cityText}>
                  {data.length} City added as favourite
                </Text>
                <TouchableOpacity onPress={handlePress}>
                  <Text style={styles.removeText}>Remove All</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, marginTop: 7}}>
                <CityList navigation={navigation}/>
              </View>
            </>
          ) : (
            <NoFavourite />
          )}
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default Favourite;

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
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 25,
  },
  headerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
    fontFamily: 'Roboto-Regular',
  },
  cityText: {
    height: 15,

    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    letterSpacing: 0,
    lineHeight: 15,
  },
  removeText: {
    height: 15,

    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 15,
    textAlign: 'right',
  },
});
