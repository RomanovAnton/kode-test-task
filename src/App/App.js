import React from "react";
import { Routes, Route } from "react-router-dom";
import CurrentItem from "../pages/CurrentItem/CurrentItem";
import Home from "../pages/Home/Home";
import Popup from "../Popup/Popup";
import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="user/:id" element={<CurrentItem />} />
      </Routes>
      <Popup />
    </div>
  );
}
