import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";
import WeatherSlice from "../redux/WeatherSlice"

const persistConfig={
    key:'root',
    version:1,
    storage:AsyncStorage,
};

const reducer = combineReducers(
    {
        weather:WeatherSlice,
    
    } 
);

const persistRed = persistReducer(persistConfig, reducer);

export default configureStore({
    reducer: persistRed,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  // 9bfcadfddfmsh7a0571419a27e28p16f0fajsn6ec57357a78d
// export const Store=configureStore({
//     reducer:{
//         weather:weatherReducer,
//     }
// })