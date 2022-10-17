import React, { useEffect } from "react";
import SearchBlock from "../../SearchBlock/SearchBlock";
import Categories from "../../Categories/Categories";
import ListItems from "../../ListItems/ListItems";
import "./Home.scss";
import fetchItems from "../../redux/asyncAction";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.items.items);
  console.log(data);

  useEffect(() => {
    dispatch(fetchItems("all"));
  }, []);

  return (
    <div className="home">
      <h1 className="home__title">Поиск</h1>
      <SearchBlock />
      <Categories />
      <ListItems />
    </div>
  );
}
