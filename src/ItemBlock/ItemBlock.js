import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentItem } from "../redux/itemsSlice";
import "./ItemBlock.scss";

export default function ItemBlock({ item }) {
  const dispatch = useDispatch();
  return (
    <li className="item-block" onClick={() => dispatch(setCurrentItem(item))}>
      <Link to={`user/${item.id}`} className="user-item">
        <img className="user-item__avatar" src={item.avatarUrl} alt="avatar" />
        <div className="user-item__info">
          <p className="user-item__name">{`${item.firstName} ${item.lastName}`}</p>
          <p className="user-item__tag">{item.userTag}</p>
          <p className="user-item__departament">{item.department}</p>
        </div>
      </Link>
    </li>
  );
}
