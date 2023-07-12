import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Greeting from "./greeting";
import store from '../store/redux'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="" element={<Greeting />} />
        </Routes>
        <Navigate to="" />
      </BrowserRouter>
    </Provider>
  );
}
