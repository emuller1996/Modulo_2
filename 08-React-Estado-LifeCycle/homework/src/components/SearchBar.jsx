import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  //hooks

  const [city,setCity] = useState('');


  function handleInputChange(e){
    setCity(e.target.value);
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
      
    }}
    className="form-inline"
    >
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={handleInputChange}
        className="form-control mr-sm-2"
      />
      <input type="submit" value="Agregar" className="btn btn-outline-success my-2 my-sm-0" />
    </form>
  );
}
