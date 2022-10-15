import React from "react";
import { Routes, Route } from "react-router-dom";
import SortPopup from "../SortPopup/SortPopup";
import CurrentItem from "../pages/CurrentItem/CurrentItem";
import Home from "../pages/Home/Home";
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<CurrentItem />} />
      </Routes>
      <SortPopup />
    </div>
  );
}
