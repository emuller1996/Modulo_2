import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (
    <div>
      <button onClick={props.onClose} >X</button>
      <h4>{props.name}</h4>
      <div>
        <span>Min  </span>
        <span>{props.min} {props.max}</span>
      </div>
      <div>
        <span>Max  </span>
        <span>{props.max}</span>
      </div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="IMG_DSDS" />
    </div>

  )
};