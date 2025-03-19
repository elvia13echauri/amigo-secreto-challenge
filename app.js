//proyecto Amigo Secreto Challenge
//Elvia Leticia Echauri Figueroa
//ONE-Alura G8

//Variables globales
//Lista para almacenar nombres de los amigos

let nombresAmigos = [];

//funciones
//funcion para ingresar y almacenar nombres a travez del cajon de texto
function almacenarNombre() {
    //variable local para la funcion que recibe lo del cuadro de texto
    let nombreAmigo = document.getElementById('amigo').value;
    //validacion
    if (nombreAmigo != ""){
        //asignamos a la lista el elemento validado
        nombresAmigos.push(nombreAmigo);
    }
    //en caso de estar Vacio
    else {
        alert("Por favor, Inserte un nombre");
    }
    //comprobacion de que almacena correctamente
    console.log(nombresAmigos);
    //reinicio de la caja de texto desde el query por ID
    document.querySelector('#amigo').value = '';
    //trayendo a ejecutar la funcion para enlistar los nombres
    enlistarAmigos();
}

//funcion para generar la lista de amigos en pantalla
function enlistarAmigos() {
    //variable para insertar eklementos en la lista del html
    let elemntos = "";
    //insertando elemntos
    for(let i = 0; i < nombresAmigos.length; i++ ) {
        elemntos += '<li>' + nombresAmigos[i] + '</li>';
    }
    //utilizando el innerHTML para insertar los elementos con sus etiquetas <li> correspondientes
    document.getElementById("listaAmigos").innerHTML = elemntos;
    
}

//funcion para sortear el amigo
function sortearAmigo() {
    //validar que no esta vacia la lista de nombres
    if (nombresAmigos.length != 0) {
        //variable para el indice alearotio
        let indiceAleatorio = Math.floor(Math.random()*nombresAmigos.length);
        //variable para el nombre sorteado
        let nombreSorteado = '<li>' + nombresAmigos[indiceAleatorio] + '</li>';
        //utilizar el inner para colocar el nombre sorteado en pantalla
        document.getElementById("resultado").innerHTML = nombreSorteado;
    }
    //en caso de estar la lista vacia
    else {
        alert("No se han ingresado nombres aún, favor de ingresarlos primero");
    }
}
