import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchBlock from "../../SearchBlock/SearchBlock";
import Categories from "../../Categories/Categories";
import ListItems from "../../ListItems/ListItems";
import { FILTER_PARAMS } from "../../utils/constants";
import "./Home.scss";

export default function Home() {
  const [value, setValue] = useState("");
  const items = useSelector((state) => state.items.items);

  const filteredItems = items.filter((item) => {
    return FILTER_PARAMS.some((param) =>
      item[param].toLowerCase().includes(value.toLowerCase())
    );
  });

  return (
    <div className="home">
      <h1 className="home__title">Поиск</h1>
      <SearchBlock value={value} setValue={setValue} />
      <Categories />
      <ListItems items={filteredItems} />
    </div>
  );
}
