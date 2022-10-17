import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CurrentItem from "../pages/CurrentItem/CurrentItem";
import Home from "../pages/Home/Home";
import Popup from "../Popup/Popup";
import "./App.scss";

export default function App() {
  const isOpen = useSelector((state) => state.popup.isOpen);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<CurrentItem />} />
      </Routes>
      {isOpen && <Popup />}
    </div>
  );
}
