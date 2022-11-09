import {createSlice} from '@reduxjs/toolkit';

const initialState=[
    {   
        id:1,
        city: 'Udupi, Karnataka',
        source: require('/Volumes/Development/WeatherApp/src/assets/images/icon_mostly_sunny_small.png'),
        temperature:"31",
        description:"Mostly Sunny"
    },
    {
        id:2,
        city: 'Bengaluru, Karnataka',
    source: require('/Volumes/Development/WeatherApp/src/assets/images/icon_rain_small.png'),
        temperature:"29",
        description:"Rain"
    },
    {
        id:3,
        city: 'Mumbai, Maharashtra',
    source: require('/Volumes/Development/WeatherApp/src/assets/images/icon_mostly_cloudy_small.png'),
        temperature:"32",
        description:"Mostly Cloudy"
    },
    { 
        id:4,
        city: 'Kolkatta, West Bengal',
    source: require('/Volumes/Development/WeatherApp/src/assets/images/icon_partly_cloudy_small.png'),
        temperature:"30",
        description:"Mostly Cloudy"
    },
    {
        id:5,
        city: 'Panaji, Goa',
        source: require('/Volumes/Development/WeatherApp/src/assets/images/icon_thunderstorm_small.png'),
        temperature:"31",
        description:"Partly Cloudy"
    },
    {
        id:6,
        city: 'Newyork, United States',
    source: require('/Volumes/Development/WeatherApp/src/assets/images/icon_clear_night_small.png'),
        temperature:"24",
        description:"Clear Night"
    },
   
]

export const WeatherSlice =createSlice({
    name:"weather",
    initialState:{
        value:initialState
    },
    reducers:{
        // addFav:()=>{

        // }
    }
})

export const {} = WeatherSlice.actions;
export default WeatherSlice.reducer;