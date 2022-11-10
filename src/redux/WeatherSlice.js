import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const BASE_URL = 'https://weatherapi-com.p.rapidapi.com/';
export const getData = createAsyncThunk('weather/getData', async string => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9bfcadfddfmsh7a0571419a27e28p16f0fajsn6ec57357a78d',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };
  const response = await fetch(BASE_URL + `current.json?q=${string}`, options);
  try {
    const data = response.json();
    console.log('sdfg', data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const WeatherSlice = createSlice({
  name: 'weather',
  initialState: {
    list: [],
    status: null,
  },

  extraReducers: {
    [getData.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getData.fulfilled]: (state, {payload}) => {
      state.list = payload;
      state.status = 'success';
    },
    [getData.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default WeatherSlice.reducer;
