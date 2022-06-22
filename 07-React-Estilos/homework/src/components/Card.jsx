import React from "react";
import style from "./Card.module.css";

export default function Card(props) {
  // acá va tu código
  return (
    <div>
      <button className={style.btn_close} onClick={props.onClose}>X</button>
      <h4>{props.name}</h4>
      <div className={style.card_info}>
        <div >
          <p>Min </p>
          <p>
            {props.min} {props.max}
          </p>
        </div>
        <div>
          <p>Max </p>
          <p>{props.max}</p>
        </div>
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt="IMG_DSDS"
      />
    </div>
  );
}
