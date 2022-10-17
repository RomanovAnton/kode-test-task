import React, { useState } from "react";
import "./Categories.scss";

export default function Categories() {
  const [currentCategory, setCurrentCategory] = useState("");
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
          onClick={() => setCurrentCategory(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
