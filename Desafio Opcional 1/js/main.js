// Ejercicio 1

let resultado = 0;

let numero = parseInt (prompt("Ingrese un numero:  "));
let numero2 = parseInt (prompt("Ingrese otro numero:  "));
resultado = numero + numero2;
alert ("El Resultado es:  " + resultado);

if (numero != 0);
while (numero2 != "0") {
numero2 = parseInt (prompt("Ingrese otro numero:  "));
resultado = resultado + numero2;
alert ("El Resultado es:  " + resultado);
}

// Ejercicio 2

let nombre = 0;

while (nombre != "esc") {
    nombre = prompt("Ingrese su nombre:");
    if (nombre != "esc")
    alert ("Bienvenido/a:  " + nombre);   
}


// Ejercicio 3 

let repetir = parseInt (prompt("Ingrese un numero:  "));

for (let i = 0; i < repetir; i++) {
    alert ("HOLA");
}