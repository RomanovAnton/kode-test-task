import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/itemsSlice";
import "./Categories.scss";

export default function Categories() {
  const currentCategory = useSelector((state) => state.items.category);
  const dispatch = useDispatch();

  const categoriesArr = [
    "Все",
    "Designers",
    "Analysts",
    "Managers",
    "iOS",
    "Android",
  ];

  return (
    <ul className="categories">
      {categoriesArr.map((item, idx) => (
        <li
          key={idx}
          className={
            item === currentCategory
              ? "categories__item categories__item_active"
              : "categories__item"
          }
          onClick={() => dispatch(setCategory(item))}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
