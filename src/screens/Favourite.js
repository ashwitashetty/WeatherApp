import { StyleSheet, Text, View,ImageBackground,SafeAreaView,FlatList, TouchableOpacity,Alert} from 'react-native'
import React from 'react'
import background from "../assets/images/background.png"
import CityList from './CityList'
import Header from '../components/Header'
import { useSelector } from 'react-redux'

const Favourite = ({navigation}) => {

  const data=useSelector(state =>state.weather.value)

  const handleBack=()=>{
    navigation.goBack();
      
    }
    const handlePress=()=>{
      Alert.alert("","Are you sure want to remove all the favourites",
      [
        {
          text: 'NO',
          onPress:()=>{
            console.log("cancel presses")
        },
        style:{color:"#673AB7"}
      },
        {
          text: 'YES',
          onPress:()=>{
            console.log("Ok pressed")
          }
        }
      ]
      )
    }

  return (
    <View style={styles.container}>
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.backgroundImage}>
        <SafeAreaView style={{flex:1}}>
          
          <Header onPress={handleBack} name={'Favourite'}/>
          <View style={styles.headerText}>
            <Text style={styles.cityText}>{data.length} City added as favourite</Text>
            <TouchableOpacity onPress={handlePress} >
            <Text style={styles.removeText} >Remove All</Text>
            </TouchableOpacity>
          </View>
           <View style={{flex:1,marginTop:7}}>
              <CityList />
           </View>
          </SafeAreaView>
  </ImageBackground>
  </View>
    )
}
export default Favourite;

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  backgroundImage:{
    flex:1
  },
  
      image: {
     marginTop:250,
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
        marginTop:25,
      },
      headerText:{
       flexDirection:'row',
       justifyContent:"space-between",
       margin:16,
      },
      cityText:{
        height: 15,
  // width: 145,
  color: '#FFFFFF',
  // font-family: Roboto;
  fontSize: 13,
  letterSpacing: 0,
  lineHeight: 15,
},
removeText:{
  height: 15,
  // width: 66,
  color: '#FFFFFF',
  // font-family: Roboto;
  fontSize: 13,
  fontWeight: "600",
  letterSpacing:0,
  lineHeight: 15,
  textAlign: 'right',

}
      

})