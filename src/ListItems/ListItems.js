import React from "react";
import ItemBlock from "../ItemBlock/ItemBlock";
import NotFoundBlock from "../NotFoundBlock/NotFoundBlock";
import Skeleton from "../Skeleton/Skeleton";
import { useSelector } from "react-redux";
import "./ListItems.scss";

export default function ListItems({ items }) {
  const skeletArr = [...Array(12).keys()];
  const requestStatus = useSelector((state) => state.items.status);

  return (
    <ul className="list-items">
      {requestStatus === "loading" ? (
        skeletArr.map((item, idx) => <Skeleton key={idx} />)
      ) : items.length > 0 ? (
        items.map((item) => <ItemBlock key={item.id} item={item} />)
      ) : (
        <NotFoundBlock />
      )}
    </ul>
  );
}
