import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input type="text" name="cuidad" id="cuidad" placeholder="Cuidad . . ." />
      <button onClick={props.onSearch}> Agregar </button>

    </div>
  )
};