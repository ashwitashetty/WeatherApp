import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import background from '../assets/images/background.png';

import Header from '../components/Header';
import RecentList from '../components/RecentList';
import NoRecentSearch from '../components/NoRecentSearch';
import {useDispatch, useSelector} from 'react-redux';
import {clearAll} from '../redux/FavouriteSlice';

const RecentSearch = ({navigation}) => {
  const data = useSelector(state => state.favourite.recent);
  const [remove, setRemove] = useState(false);

  const dispatch = useDispatch();
  const handleBack = () => {
    navigation.goBack();
  };
  const handlePress = () =>
    Alert.alert('', 'Are you sure want to remove all the favourites?', [
      {
        text: 'NO',
        onPress: () => console.log('No Pressed'),
      },
      {
        text: 'YES',
        onPress: () => {
          dispatch(clearAll());
          setRemove(!remove);
        },
      },
    ]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <SafeAreaView style={{flex: 1}}>
          <Header onPress={handleBack} name={'Recent Search'} />

          {!remove ? (
            <>
              <View style={styles.headerText}>
                <Text style={styles.cityText}>You recently searched for</Text>
                <TouchableOpacity navigation={navigation} onPress={handlePress}>
                  <Text style={styles.clearText}>Clear All</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, marginTop: 7}}>
                <RecentList navigation={navigation} />
              </View>
            </>
          ) : (
            <NoRecentSearch />
          )}
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
  },
  cityText: {
    height: 15,

    color: '#FFFFFF',
    fontSize: 13,
    letterSpacing: 0,
    lineHeight: 15,
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
  },
  clearText: {
    height: 15,
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 15,
    textAlign: 'right',
    fontFamily: 'Roboto-Regular',
  },
});
