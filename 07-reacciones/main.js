// reacciones
// En un documento html hacer un post de una red social que contenga:

// un h3 con la usuaria
// un p con un lorem ipsum
// 3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) más un número con la cantidad
// Dar estilos para que

// la tipografía sea distinta a la default
// los spans estén en línea, separados con márgenes, tengan un color de fondo gris suave y un border radius
// Hacer un programa que al iniciarse pregunte mediante tres prompts por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes

const $ = (selector) => document.querySelector(selector);

const cantMeGusta = prompt("Ingrese la cantidad de me gusta");
const cantMeEncanta = prompt("Ingrese la cantidad de me encanta");
const cantMeSorprende = prompt("Ingrese la cantidad de me sorprende");

const gusta = $('#me-gusta')
const encanta = $('#me-encanta')
const sorprende = $('#me-sorprende')


const resultado = (cantMeGusta, cantMeEncanta, cantMeSorprende) =>{
    gusta.innerHTML=`👍 ${cantMeGusta}`;  
    encanta.innerHTML=`😍 ${cantMeEncanta}`; 
    sorprende.innerHTML=`😲 ${cantMeSorprende}`;
}

resultado(cantMeGusta, cantMeEncanta, cantMeSorprende);