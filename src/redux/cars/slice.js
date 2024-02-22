import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from 'redux/cars/operations';

const handlePending = state => {
  state.cars.isLoading = true;
};
const handleRejected = (state, action) => {
  state.cars.isLoading = false;
  state.cars.error = action.payload;
};
const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: {
      items: [],
      favorites: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  reducers: {
    addFavorites(state, action) {
      const carById = state.cars.items.find(car =>
        car.id.toString().includes(action.payload)
      );
      // const isInFavorites = state.cars.favorites.includes(carById);
      // console.log(isInFavorites);

      state.cars.favorites.push(carById);
    },
    deleteFavorites(state, action) {
      const updateFavorites = state.cars.favorites.filter(
        car => car.id.toString() !== action.payload
      );
      state.cars.favorites = updateFavorites;
    },
  },
  extraReducers: {
    // pending
    [fetchCars.pending]: handlePending,
    // [addContact.pending]: handlePending,
    // [deleteContact.pending]: handlePending,

    // rejected
    [fetchCars.rejected]: handleRejected,
    // [addContact.rejected]: handleRejected,
    // [deleteContact.rejected]: handleRejected,

    // fulfilled
    [fetchCars.fulfilled](state, action) {
      state.cars.isLoading = false;
      state.cars.error = null;
      state.cars.items = action.payload;
    },
    // [addContact.fulfilled](state, action) {
    //   state.contacts.isLoading = false;
    //   state.contacts.error = null;
    //   state.contacts.items = [...state.contacts.items, action.payload];
    // },
    // [deleteContact.fulfilled](state, action) {
    //   state.contacts.isLoading = false;
    //   state.contacts.error = null;
    //   state.contacts.items = state.contacts.items.filter(
    //     ({ id }) => id !== action.payload.id
    //   );
    // },
  },
});

export const { addFavorites, deleteFavorites } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
