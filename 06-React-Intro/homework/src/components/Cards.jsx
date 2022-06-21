import React from 'react';
import Card from './Card.jsx';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  const cards = props.cities.map((card) =>
    <Card
      key={card.id}
      max={card.main.temp_max}
      min={card.main.temp_min}
      name={card.name}
      img={card.weather[0].icon}
      onClose={() => alert(card.name)}
    />
  );
  return (
    <div>
      {cards}
    </div>)
};