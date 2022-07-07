const { createStore } = require('redux');
const contador = require('./reducer');
const { incremento, decremento, impar, incrementarAsync, buscarNombre } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById('valor').value;

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  let contador = store.getState().contador;
  let nombre = store.getState().nombre; 
  
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  document.getElementById('valor').innerHTML = contador;
  document.getElementById('buscarNombre').innerHTML = nombre;
  
  console.log(store.getState());
}

// Ejecutamos la funcion 'renderContador':
renderContador();


// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:

store.subscribe(renderContador);

// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:

document.getElementById('incremento').addEventListener('click',()=>{
  store.dispatch(incremento());
});

document.getElementById('decremento').addEventListener('click',()=>{
  store.dispatch(decremento());
});


document.getElementById('incrementoImpar').addEventListener('click',()=>{
  store.dispatch(impar());
});

var btn_Async = document.getElementById('incrementoAsync');


function greet() {
  
 }
btn_Async.onclick = ()=> setTimeout(store.dispatch,1000,incrementarAsync());


document.getElementById('nombre').addEventListener('input',()=>{
  store.dispatch(buscarNombre(document.getElementById('nombre').value));
})

/* addEventListener('click',()=>{
  setTimeout(store.dispatch(incrementarAsync()),90000)
}); */