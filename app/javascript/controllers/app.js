import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Greeting from "./greeting";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="" element={<Greeting />} />
      </Routes>
      <Navigate to="" />
    </BrowserRouter>
  );
}
