import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentItem } from "../redux/itemsSlice";
import { convertDate } from "../utils/utils";
import "./ItemBlock.scss";

export default function ItemBlock({ item }) {
  const dispatch = useDispatch();
  return (
    <li className="item-block" onClick={() => dispatch(setCurrentItem(item))}>
      <Link to={`user/${item.id}`} className="user-item">
        <img className="user-item__avatar" src={item.avatarUrl} alt="avatar" />
        <div className="info">
          <p className="info__name">{`${item.firstName} ${item.lastName}`}</p>
          <p className="info__tag">{item.userTag}</p>
          <p className="info__department">{item.department}</p>
          <p className="info__birthday">
          {convertDate(item.birthday).slice(0, -5)}
          </p>
        </div>
      </Link>
    </li>
  );
}