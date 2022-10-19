import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setIsOpen } from "../redux/popupSlice";
import { ReactComponent as SortIcon } from "../assets/sort-icon.svg";
import { ReactComponent as SearchIcon } from "../assets/search-icon.svg";
import "./SearchBlock.scss";
import classNames from "classnames";

export default function SearchBlock({ value, setValue }) {
  const dispatch = useDispatch();
  const [focus, setFocus] = useState(false);

  const iconClass = classNames("search-block__icon", {
    "active-search": focus,
  });

  return (
    <div className="search-block">
      <SearchIcon className={iconClass} />
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="search-block__input"
        type="text"
        placeholder="Введите имя, фамилию или ник..."
        value={value}
        onChange={(evt) => setValue(evt.target.value.toLowerCase())}
      />
      <SortIcon
        className="search-block__icon"
        onClick={() => dispatch(setIsOpen())}
      />
    </div>
  );
}
