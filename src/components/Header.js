import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({onPress, name}) => {
  return (
    <View style={styles.header}>
      <View style={styles.header2}>
        <TouchableOpacity onPress={onPress}>
          <Icon
            name="arrow-back"
            size={25}
            color={'black'}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.toptext}>{name}</Text>
      </View>
      <Icon name="search" size={25} color={'black'} style={styles.searchIcon} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
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
});
