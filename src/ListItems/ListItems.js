import React, { useEffect } from "react";
import UserItem from "../UserItem/UserItem";
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
        : items.map((item) => <UserItem key={item.id} item={item} />)}
    </ul>
  );
}
