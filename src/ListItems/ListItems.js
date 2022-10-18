import React, { useEffect } from "react";
import ItemBlock from "../ItemBlock/ItemBlock";
import fetchItems from "../redux/asyncAction";
import Skeleton from "../Skeleton/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import "./ListItems.scss";

export default function ListItems() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  useEffect(() => {
    dispatch(fetchItems("all"));
  }, []);

  const skeletArr = [...Array(12).keys()];

  return (
    <ul className="list-items">
      {items.length === 0
        ? skeletArr.map((item, idx) => <Skeleton key={idx} />)
        : items.map((item) => <ItemBlock key={item.id} item={item} />)}
    </ul>
  );
}
