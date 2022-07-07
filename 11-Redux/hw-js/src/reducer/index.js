const { INCREMENTO, DECREMENTO, IMPAR, INCREMENTARASYNC, BUSCARNOMBRE} = require('../action-types');

const initialState = {
  contador: 0,
  nombre:''
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, action) {
  switch (action.type) {
    case DECREMENTO:
      return {
        ...state,
        contador: state.contador - 1
      }
    case INCREMENTO:
      return {
        ...state,
        contador: state.contador + 1
      }
    case IMPAR: {
      if (state.contador % 2 == 0) {
        return {
          ...state,
          contador: state.contador + 2
        }
      } else {
        return {
          ...state,
          contador: state.contador + 1
        }
      }
    }
    case INCREMENTARASYNC:
      return {
        ...state,
        contador: state.contador + 1
      }

    case BUSCARNOMBRE :{
      return {
        ...state,
         nombre: action.payload
      }
    }
    default:
      return state;
  }

}

module.exports = contador;