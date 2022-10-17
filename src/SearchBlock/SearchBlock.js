import React, { useState } from "react";
import { ReactComponent as SortIcon } from "../assets/sort-icon.svg";
import { ReactComponent as SearchIcon } from "../assets/search-icon.svg";
import "./SearchBlock.scss";

export default function SearchBlock() {
  const [value, setValue] = useState("");

  return (
    <div className="search-block">
      <SearchIcon className="search-block__icon" />
      <input
        className="search-block__input"
        type="text"
        placeholder="Введите имя, фамилию или ник..."
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />
      <SortIcon className="search-block__icon" />
    </div>
  );
}
