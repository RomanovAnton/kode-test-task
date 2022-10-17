import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSort, setIsOpen } from "../redux/popupSlice";
import "./Popup.scss";

export default function Popup() {
  const dispath = useDispatch();
  const sort = useSelector((state) => state.popup.sort);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (evt) => {
      if (evt.target === popupRef.current) {
        dispath(setIsOpen());
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <div className="popup" ref={popupRef}>
      <div className="popup__container">
        <h3 className="popup__title">Сортировка</h3>
        <div className="checkbox">
          <label className="checkbox__label">
            <input
              type="radio"
              name="sort"
              className="checkbox__real"
              checked={sort === "alphabet" ? true : false}
              onChange={() => dispath(changeSort("alphabet"))}
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
              onChange={() => dispath(changeSort("birthday"))}
            />
            <span className="checkbox__custom"></span>
            По дню рождения
          </label>
        </div>
      </div>
    </div>
  );
}
