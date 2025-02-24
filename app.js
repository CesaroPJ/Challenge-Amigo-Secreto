// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear una lista de array para almacenar los nombres
let amigos = [];
let lista = [];

//Funcion de boton de agregar nuevo nombre a la lista de amigos 
function agregarAmigo (){
    let nuevoAmigo = document.getElementById('amigo').value;
    let numero = saberSiEsNumero(nuevoAmigo);

    if (numero === true){
        if (nuevoAmigo === '')  {
            alert('Por favor, inserte un nombre')
        }else{
            buscaNombresSinRepeitr(nuevoAmigo); 
            actualizarListaDeAmigos();          
        }
        }else{
            alert('Ingresaste un numero, por favor ingresa un nombre valido')
            limpiar();
    }
}

///funcion para boton de  sortear un amigo 
function sortearAmigo(){
    if (amigos.length === 0){
        alert('Aun no has introducido nombres de amigos')
    }else{
        let numero = generarNumeroAleatorio();
        for (let j = 0; j <= amigos.length; j++) {
            if (j == numero){
                asignarTexto('resultado' , `${amigos[j]} es tu amigo secreto`);
                document.getElementById('sorteo').setAttribute('disabled', true);
                asignarTexto('nuevojuego' , 'Reinicie para nuevo juego');
            }      
        }
        console.log(numero);
    }

}

////funcion para boton de nuevo juego
function nuevoJuego(){
    limpiar(); 
    lista=[];
    amigos=[];
    asignarTexto('resultado', '');
    asignarTexto('nuevojuego' , '');
    actualizarListaDeAmigos();
    document.getElementById('sorteo').removeAttribute('disabled');
}

///funcion para determinar si colocaron un numero 
function saberSiEsNumero (nombre){
    let conversion = parseInt(nombre);
    if (isNaN(conversion)){
        return true; //retorna true si no es un numero 
    }else{
        return false;
    }
}
//funcion para no repetir nombres
function buscaNombresSinRepeitr(nombre){
    let nombreAmigo = nombre.toLowerCase();
        if (lista.includes(nombreAmigo)){
            alert('Nombre de amigo ya introducido, por favor ingrese otro.Gracias');
            limpiar();
        }else{
            lista.push(nombreAmigo);
            amigos.push(nombre);
            console.log(amigos);
            limpiar();            
            console.log(lista.length); //Visualizar tamaño del array

        }
    
}
///funcion para mostrar lista de amigos 
function actualizarListaDeAmigos(){
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ""; 
    for (let i=0; i < amigos.length; i++){
        let texto = amigos[i];
        let li = document.createElement('li');
        let p = document.createTextNode(texto)
        let padre = document.querySelector('.name-list');
        padre.appendChild(li);
        li.appendChild(p);
    }
}

function limpiar(){
    document.getElementById('amigo').value = '';
}
//funcion para generar numero aleatorio 
function generarNumeroAleatorio(){
    let numero = Math.floor(Math.random()*amigos.length);
    return numero;
}
///funcion para asignar texto 
function asignarTexto(elemento, texto){
    let elementoHTML= document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}
