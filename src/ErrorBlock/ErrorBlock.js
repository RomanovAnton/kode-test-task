import React from "react";
import { useDispatch } from "react-redux";
import fetchItems from "../redux/asyncAction";
import saucer from "../assets/flying-saucer-image.png";
import "./ErrorBlock.scss";

export default function ErrorBlock() {
  const dispatch = useDispatch();
  return (
    <div className="error-block">
      <img src={saucer} alt="flying-saucer" className="error-block__img" />
      <p className="error-block__text">Какой-то сверхразум все сломал</p>
      <p className="error-block__text">Постараемся быстро починить</p>
      <button
        className="error-block__btn"
        onClick={() => dispatch(fetchItems("all"))}
      >
        Попробовать снова
      </button>
    </div>
  );
}
