class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const producto1 = new Producto("Almohadon y Antifaz", 500);
const producto2 = new Producto("Almohadones", 500);
const producto3 = new Producto("Conejo de Ceramica", 700);
const producto4 = new Producto("Conejo con Luz", 1000);
const producto5 = new Producto("Conejos Tejidos", 500);
const producto6 = new Producto("Kit Creativo", 1000);
const producto7 = new Producto("Marineras", 600);
const producto8 = new Producto("Mochila de Peluche", 1200);
const producto9 = new Producto("Mochila con Brillo", 1200);

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9];

let compra;
let total = 0;
let cantidad = 0;

function sumar(precio, cant) {
    total = total + (precio * cantidad);
}

do {
    compra = prompt('Que productos desea comprar?\n\nAlmohadon y Antifaz  -  Almohadones\nConejo de Ceramica  -  Conejo con Luz  -  Conejos Tejidos\nKit Creativo  -  Marineras\nMochila de Peluche  -  Mochila con Brillo\n\nIngrese TOTAL cuando haya finalizado\n');
    if (compra != 'TOTAL') {
        let existeProducto = productos.some((producto) => compra === producto.nombre);
        if (existeProducto === false) {
            alert("No existe el producto ingresado, vuelva a intentar");
            continue
        }
        cantidad = prompt('Cuantos quiere comprar?\n');

        if (compra == "Almohadon y Antifaz") {
            sumar(producto1.precio);
        } else if (compra == "Almohadones") {
            sumar(producto2.precio);
        } else if (compra == "Conejo de Ceramica") {
            sumar(producto3.precio);
        } else if (compra == "Conejo con Luz") {
            sumar(producto4.precio);
        } else if (compra == "Conejos Tejidos") {
            sumar(producto5.precio);
        } else if (compra == "Kit Creativo") {
            sumar(producto6.precio);
        } else if (compra == "Marineras") {
            sumar(producto7.precio);
        } else if (compra == "Mochila de Peluche") {
            sumar(producto8.precio);
        } else if (compra == "Mochila con Brillo") {
            sumar(producto9.precio);
        } else if (compra == "TOTAL") {
            total = total;
        } else {
            alert("No existe el producto ingresado, vuelva a intentar")
        }
    }
} while (compra != "TOTAL");


alert("El total a pagar es: $" + total);