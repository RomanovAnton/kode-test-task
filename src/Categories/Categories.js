import React from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchItems from "../redux/asyncAction";
import { setCategory } from "../redux/itemsSlice";
import "./Categories.scss";

export default function Categories() {
  const currentCategory = useSelector((state) => state.items.category);
  const dispatch = useDispatch();

  const categoriesArr = {
    Все: "all",
    Designers: "design",
    Analysts: "analytics",
    Managers: "management",
    iOS: "ios",
    Android: "android",
  };

  return (
    <ul className="categories">
      {Object.keys(categoriesArr).map((item, idx) => (
        <li
          key={idx}
          className={
            item === currentCategory
              ? "categories__item categories__item_active"
              : "categories__item"
          }
          onClick={() => {
            dispatch(setCategory(item));
            dispatch(fetchItems(categoriesArr[item]));
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
