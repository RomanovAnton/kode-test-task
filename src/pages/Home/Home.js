import React from "react";
import SearchBlock from "../../SearchBlock/SearchBlock";
import Categories from "../../Categories/Categories";
import ListItems from "../../ListItems/ListItems";
import './Home.scss';

export default function Home() {
  return (
    <div className="home">
      <h1 className="home__title">Поиск</h1>
      <SearchBlock />
      <Categories />
      <ListItems />
    </div>
  );
}
