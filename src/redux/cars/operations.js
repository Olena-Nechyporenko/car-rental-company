import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = new URL(
  'https://6548e161dd8ebcd4ab23cbd9.mockapi.io/api/v1/cars'
);

export const fetchCars = createAsyncThunk(
  'cars/fetchAllCars',
  async (_, { rejectWithValue }) => {
    // const currentPage = data.currentPage;
    // BASE_URL.searchParams.append('page', currentPage);
    // BASE_URL.searchParams.append('limit', 12);
    try {
      const cars = await axios.get(`${BASE_URL}`);
      return cars.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  'cars/fetchCar',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      console.log(response);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
