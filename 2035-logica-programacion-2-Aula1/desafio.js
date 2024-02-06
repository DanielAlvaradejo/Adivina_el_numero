

function hola() {
    alert("¡Hola ,mundo!");
    return;
}

function name(nombre){
    console.log(`Hola, ${nombre}`);
    return;
}

name("Daniel");

function calcularDoble(numero) {
    return numero * 2;
  }
  
  let resultadoDoble = calcularDoble(5);
  console.log(resultadoDoble);

function calcularPromedio(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let promedio = calcularPromedio(4, 7, 10);
  console.log(promedio);

function encontrarMayor(a, b) {
    return a > b ? a : b;
  }
  
  let numeroMayor = encontrarMayor(15, 9);
  console.log(numeroMayor);

function cuadrado(numero) {
    return numero * numero;
  }
  
  let resultado = cuadrado(2);
  console.log(resultado);