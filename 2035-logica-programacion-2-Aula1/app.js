let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMáximo = 10;
function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMáximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verficarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');            
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');            
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMáximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    if (listaNumeroSorteado.length == numeroMáximo ){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');    
    } else {
    if (listaNumeroSorteado.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
    }     
    }
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
