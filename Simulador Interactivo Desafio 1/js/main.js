const mochila = 1500;
const peluche = 1000;
const taza = 500;
const cajaDulce = 1700;
let total = 0;
let producto;

function sumar(resultado, precio) {
    total = resultado + precio;
}

do {
    producto = prompt("¿Que productos quiere comprar? \n  \n - Mochila \n - Peluche \n - Taza \n - Caja dulce \n \n Ingrese TOTAL cuando haya finalizado de elegir los productos ");

    if (producto == "Mochila") {
        sumar(total, mochila);
    } else if (producto == "Peluche") {
        sumar(total, peluche);
    } else if (producto == "Taza") {
        sumar(total, taza);
    } else if (producto == "Caja dulce") {
        sumar(total, cajaDulce);
    } else if (producto == "TOTAL") {
        total = total;
    } else {
        alert("No ingreso ningun producto, vuelva a intentar")
    }

} while (producto != "TOTAL");

alert("El total a pagar es: $" + total);