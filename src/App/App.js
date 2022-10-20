import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CurrentItem from "../pages/CurrentItem/CurrentItem";
import fetchItems from "../redux/asyncAction";
import Home from "../pages/Home/Home";
import Popup from "../Popup/Popup";
import "./App.scss";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems("all"));
  }, []);

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
