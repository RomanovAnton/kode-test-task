import React from "react";
import "./UserItem.scss";

export default function UserItem({ item }) {
  return (
    <li className="user-item">
      <img className="user-item__avatar" src={item.avatarUrl} alt="avatar" />
      <div className="user-item__info">
        <p className="user-item__name">{`${item.firstName} ${item.lastName}`}</p>
        <p className="user-item__tag">{item.userTag}</p>
        <p className="user-item__departament">{item.department}</p>
      </div>
    </li>
  );
}
