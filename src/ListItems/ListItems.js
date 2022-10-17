import React, { useEffect } from "react";
import UserItem from "../UserItem/UserItem";
import fetchItems from "../redux/asyncAction";
import { useDispatch, useSelector } from "react-redux";
import "./ListItems.scss";

export default function ListItems() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  useEffect(() => {
    dispatch(fetchItems("all"));
  }, []);

  return (
    <ul className="list-items">
      {items.map((item) => (
        <UserItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
