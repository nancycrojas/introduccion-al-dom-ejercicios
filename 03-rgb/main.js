//rgb
//Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.

let $ = (selector) => document.querySelector(selector);
let color1 = prompt('Ingrese un número de 0 a 255');
let color2 = prompt('Ingrese un número de 0 a 255');
let color3 = prompt('Ingrese un número de 0 a 255');
let body=$('body');
body.style.backgroundColor = `rgb(${color1} , ${color2} , ${color3})`;
