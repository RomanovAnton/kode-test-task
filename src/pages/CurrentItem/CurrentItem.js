import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import starIcon from "../../assets/star-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { ReactComponent as BackIcon } from "../../assets/back-icon.svg";
import "./CurrentItem.scss";

export default function CurrentItem() {
  const item = useSelector((state) => state.items.currentItem);
  const navigate = useNavigate();

  return item ? (
    <div className="current-item">
      <div className="top">
        <BackIcon className="top__btn-back" onClick={() => navigate(-1)} />
        <img className="top__avatar" src={item.avatarUrl} alt="avatar" />
        <p className="top__name">
          {`${item.firstName} ${item.lastName}`}
          <span className="top__tag">{item.userTag}</span>
        </p>
        <p className="top__departament">{item.department}</p>
      </div>
      <div className="bottom">
        <div className="birthday">
          <img src={starIcon} alt="star-icon" />
          <p className="birthday__date">5 июня 1996</p>
          <p className="birthday__age">24 года</p>
        </div>
        <div className="phone">
          <img src={phoneIcon} alt="phone-icon" />
          <p className="phone__number">+7 (999) 900 90 90</p>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
}
