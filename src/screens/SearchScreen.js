import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  StatusBar,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import icon_clear from '../assets/images/icon_clear.png';
import {SearchApi} from '../services/SearchApi';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../redux/WeatherSlice';
import {recentCity, setFavourite} from '../redux/FavouriteSlice';
import {FlatList} from 'react-native-gesture-handler';

const SearchScreen = ({setSearch, search}) => {
  const list = useSelector(state => state.weather.list);
  const [input, setInput] = useState(null);
  const [icon, setIcon] = useState();
  const [data, setData] = useState();
  const [celcius, setCelsius] = useState(list.current?.temp_c);
  const dispatch = useDispatch();

  const handleBack = () => {
    setSearch(!search);
  };
  const handleChange = async value => {
    setInput(value);
    setIcon(icon_clear);
    const Data = await SearchApi(value);
    setData(Data);
    console.log('I am Data', Data);
  };

  const handleClear = () => {
    setInput();
  };

  const source = {uri: `https:${list.current?.condition.icon}`};
  const obj = {
    id: list.location?.name,
    city: list.location?.name,
    source: source,
    temperature: celcius,
    description: list.current?.condition.text,
  };

  const handleSearch = item => {
    setInput(item.name);
    dispatch(setFavourite(false));
    setSearch(!search);
    dispatch(recentCity(obj));
    dispatch(getData(item.name));
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#673AB7"
        />
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack}>
            <Icon
              name="arrow-back"
              size={27}
              color={'black'}
              style={styles.backIcon}
            />
          </TouchableOpacity>

          <TextInput
            placeholder="Search for City"
            placeholderTextColor="grey"
            style={styles.inputText}
            value={input}
            onChangeText={value => handleChange(value)}
          />
          <View>
            {input ? (
              <TouchableOpacity onPress={handleClear}>
                <Image source={icon} style={styles.clear} />
              </TouchableOpacity>
            ) : (
              <></>
            )}
          </View>
        </View>
        <View style={styles.line} />
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Pressable onPress={() => handleSearch(item)}>
              <View style={styles.flat}>
                <Text>{item.name}</Text>
              </View>
            </Pressable>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  safeAreaView: {
    flex: 1,
    height: '100%',
    width: '100%',
  },

  header: {
    height: 56,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIcon: {
    marginRight: 25,
  },

  inputText: {
    height: 39,
    width: '75%',
    opacity: 4,
    color: '#000000',
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    letterSpacing: 0,
  },
  line: {
    height: 0.1,
    width: '100%',
    opacity: 0.2,
    borderWidth: 0.3,
    borderBottomColor: '#000000',
  },
  clear: {
    height: 14,
    width: 14,
    marginRight: 10,
  },
  flat: {
    fontFamily: 'Roboto-Regular',
    height: 56,
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'rgba(105,105,105,0.2)',
    borderBottomWidth: 1,
  },
});
