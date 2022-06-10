const btn_listar = document.getElementById('boton'),
lista_amigos = document.getElementById('lista'),
btn_buscar = document.getElementById('search'),
amigo = document.getElementById('amigo'),
form = document.getElementById('form_add'),
btn_delete = document.getElementById('delete'),
tsuccess = document.getElementById('success');


btn_listar.addEventListener('click', function () {
    lista_amigos.innerHTML="";
    fetch(' http://localhost:5000/amigos')
        .then(response => response.json())
        .then(data => {
            data.forEach(amigos => {
                console.log(amigos);
                var ul = document.createElement('li');
                ul.textContent = `${amigos.name} - ${amigos.age}  -  ${amigos.email}`;
                lista_amigos.appendChild(ul);
            })
        });
});

btn_buscar.addEventListener('click', function(){
    const id_f = document.getElementById('input').value;
    amigo.innerText="";
    if(id_f ==="") {
        amigo.innerText = "Ingrese un id en el campo de texto";
    }else{
        fetch(`http://localhost:5000/amigos/${id_f}`)
        .then(response => response.json())
        .then(data => {
            amigo.innerText = `Amigo Encontrado : ${data.name}`;
            console.log(data);
        })
        .catch(err => {
            amigo.innerText = `Error : ${err}`;
        });
    }
    
});

form.addEventListener('submit',function(e){
    e.preventDefault();
    var data = {
        "name" : document.getElementById("nombre").value,
        "age" : document.getElementById("edad").value,
        "email" : document.getElementById("correo").value
    }
    fetch(`http://localhost:5000/amigos`,{
        method: 'POST',
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }
    ).then(response => response.json())
    .then(data => {
        console.log(data);
        form.reset();
    })
});

btn_delete.addEventListener('click', () => {
    const id_f = document.getElementById('inputDelete').value;
    
    fetch(`http://localhost:5000/amigos/${id_f}`,{
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json'
        }
      }
    ).then(response => response.json())
    .then(data => {
        console.log(data);
        tsuccess.innerText="Tu Amigo ha sido eliminado con exito";
    })
});




