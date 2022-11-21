//color
//Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.

let $ = (selector) => document.querySelector(selector);
let color= prompt('Ingrese un color en sistema hexadecimal. Ej: #FF9900 Puede incluir números del 0 al 9 o letras de la A a la F ');
let body=$('body');
body.style.backgroundColor = color;
