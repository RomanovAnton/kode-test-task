import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sortByAlphabet,
  sortByBirthday,
  changeSort,
} from "../redux/itemsSlice";
import { setIsOpen } from "../redux/popupSlice";
import "./Popup.scss";

export default function Popup() {
  const dispath = useDispatch();
  const sort = useSelector((state) => state.items.sort);
  const isOpen = useSelector((state) => state.popup.isOpen);

  return (
    <div
      className={isOpen ? "popup popup_active" : "popup"}
      onClick={() => dispath(setIsOpen())}
    >
      <div
        className="popup__container"
        onClick={(evt) => evt.stopPropagation()}
      >
        <h3 className="popup__title">Сортировка</h3>
        <div className="checkbox">
          <label className="checkbox__label">
            <input
              type="radio"
              name="sort"
              className="checkbox__real"
              checked={sort === "alphabet" ? true : false}
              onChange={() => {
                dispath(changeSort("alphabet"));
                dispath(sortByAlphabet());
                dispath(setIsOpen());
              }}
            />
            <span className="checkbox__custom"></span>
            По алфавиту
          </label>
          <label className="checkbox__label">
            <input
              type="radio"
              name="sort"
              className="checkbox__real"
              checked={sort === "birthday" ? true : false}
              onChange={() => {
                dispath(changeSort("birthday"));
                dispath(sortByBirthday());
                dispath(setIsOpen());
              }}
            />
            <span className="checkbox__custom"></span>
            По дню рождения
          </label>
        </div>
      </div>
    </div>
  );
}
