import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  StatusBar,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo'
import icon_clear from "../assets/images/icon_clear.png"

const SearchScreen = ({navigation}) => {
  const handleBack = () => {
    navigation.goBack();
  };



  const [input, setInput] = useState(null);
  const [icon,setIcon]=useState()

  const handleChange = value => {
    setInput(value);
    setIcon(icon_clear);
  };

  const handleClear = () => {
    setInput();
  };



  return (
    <SafeAreaView style={{flex:1}}>
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
          onChangeText={value=>handleChange(value)}
        />
       <View>
        {input ?(
          <TouchableOpacity onPress={handleClear}>
            <Image source={icon} style={styles.clear} />
          </TouchableOpacity>
        ):(<></>)}
       </View>
      </View>
      <View style={styles.line} />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  header: {
    height: 56,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between"
  
  },
  backIcon: {
    // width: 24,
    // height: 24,
    marginRight: 25,
  },

  inputText: {
    height: 39,
    width: '75%',
    opacity: 4,
    color: '#000000',
    // font-family: Roboto,
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
  clear:{
    height:14,
    width:14,
    marginRight:10,
 
  }
});
