import {createSlice} from '@reduxjs/toolkit';

export const FavouriteSlice = createSlice({
  name: 'favourite',
  initialState: {
    value: [],
    favourite: false,
    recent: [],
  },
  reducers: {
    addFav: (state, action) => {
      const val = state.value.map(value => value.id);

      if (val.includes(action.payload.id)) {
        console.log('Already exists');
      } else {
        state.value.push(action.payload);
      }
    },
    deleteFav: (state, action) => {
      console.log(action.payload.id);
      state.value = state.value.filter(site => site.id !== action.payload.id);
    },
    setFavourite: (state, action) => {
      state.favourite = action.payload;
    },
    recentCity: (state, action) => {
      state.recent.push(action.payload);
    },
    deleteRecentCity: (state, action) => {
      state.recent = state.recent.filter(site => site.id !== action.payload.id);
    },
    removeAll: (state, action) => {
      state.value = [];
    },
    clearAll: (state, action) => {
      state.recent = [];
    },
  },
});

export const {
  addFav,
  deleteFav,
  setFavourite,
  recentCity,
  deleteRecentCity,
  removeAll,
  clearAll,
} = FavouriteSlice.actions;
export default FavouriteSlice.reducer;
