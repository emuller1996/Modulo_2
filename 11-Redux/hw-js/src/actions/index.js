const { INCREMENTO, DECREMENTO, IMPAR , INCREMENTARASYNC, BUSCARNOMBRE } = require('../action-types');

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

const incremento = ()=>{
  return {
    type: INCREMENTO
  }
};

const decremento = ()=>{
  return {
    type: DECREMENTO
  }
};

function impar(){
  return {
    type: IMPAR
  }
};

const incrementarAsync = ()=>{
  return {
    type: INCREMENTARASYNC
  }
}

const buscarNombre = (text)=>{
  return {
    type: BUSCARNOMBRE,
    payload: text //data 
  }
}


module.exports = {
  incremento,
  decremento,
  impar,
  incrementarAsync,
  buscarNombre
}