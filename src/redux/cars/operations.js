import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://6548e161dd8ebcd4ab23cbd9.mockapi.io/api/v1/cars';

export const fetchCars = createAsyncThunk(
  'cars/fetchAllCars',
  async (_, { rejectWithValue }) => {
    try {
      const cars = await axios.get(`${BASE_URL}`, {
        params: {
          page: 1,
          limit: 12,
        },
      });
      return cars.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchNextPage = createAsyncThunk(
  'cars/fetchNextPage',
  async (page = 1, { rejectWithValue }) => {
    try {
      const cars = await axios.get(`${BASE_URL}`, {
        params: {
          page: page,
          limit: 12,
        },
      });
      return cars.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
