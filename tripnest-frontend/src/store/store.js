// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import cityReducer from './slices/CitySlice'
import busReducer from './slices/BusSlice'
import trainReducer from './slices/TrainSlice'
import flightReducer from './slices/flightSlice'
import hotelReducer from './slices/HotelSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    city: cityReducer,
    bus: busReducer,
    train: trainReducer,
    flight: flightReducer,
    hotel: hotelReducer
  },
});

export default store;
