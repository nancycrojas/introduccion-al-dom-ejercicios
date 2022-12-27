//saludo
//Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.

// h1 = document.querySelector(selectores)

let $ = (selector) => document.querySelector(selector);
let h1 = $("h1");
let nombre = prompt("Ingrese su nombre");
h1.innerText=`Hola ${nombre}`;
h1.classList.add(`titulo`);