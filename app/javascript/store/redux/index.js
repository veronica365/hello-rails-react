import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import greetingReducer from './greetingSlice'

const weAreNotLive = process.env.NODE_ENV !== "production";
const store = configureStore({
  reducer: {
    greetings: greetingReducer,
  },
  middleware: (getDefaultMiddleware) => {
    if (weAreNotLive) return getDefaultMiddleware().concat(logger);
    return getDefaultMiddleware();
  },
  devTools: weAreNotLive,
});

export default store;
