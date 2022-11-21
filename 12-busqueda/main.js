// busqueda
// En un documento html crear una lista desordenada con al menos 10 items que consistan en oraciones, frases o citas. Hacer un programa que al iniciarse pregunte mediante un prompt por una palabra y destaque en rojo y en negrita aquellos items de la lista cuyo texto contenga dicha palabra.

const $ = (selector) => document.querySelector(selector);
const palabra = prompt('Ingrese una palabra');

const oracionUno = $('#oracionUno');
const oracionDos = $('#oracionDos');
const oracionTres = $('#oracionTres');
const oracionCuatro = $('#oracionCuatro');
const oracionCinco = $('#oracionCinco');
const oracionSeis = $('#oracionSeis');
const oracionSiete = $('#oracionSiete');
const oracionOcho = $('#oracionOcho');
const oracionNueve = $('#oracionNueve');
const oracionDiez = $('#oracionDiez');


console.log(oracionUno)

let textoOracionUno = oracionUno.innerText;
let textoOracionDos = oracionDos.innerText;
let textoOracionTres = oracionTres.innerText;
let textoOracionCuatro = oracionCuatro.innerText;
let textoOracionCinco = oracionCinco.innerText;
let textoOracionSeis = oracionSeis.innerText;
let textoOracionSiete = oracionSiete.innerText;
let textoOracionOcho = oracionOcho.innerText;
let textoOracionNueve = oracionNueve.innerText;
let textoOracionDiez = oracionDiez.innerText;

if(textoOracionUno.includes(palabra)){
  oracionUno.style.color = 'red';
  oracionUno.style.fontWeight = 'bold';
}

if(textoOracionDos.includes(palabra)){
  oracionDos.style.color = 'red';
  oracionDos.style.fontWeight = 'bold';
}

if(textoOracionTres.includes(palabra)){
  oracionTres.style.color = 'red';
  oracionTres.style.fontWeight = 'bold';
}

if(textoOracionCuatro.includes(palabra)){
    oracionCuatro.style.color = 'red';
    oracionCuatro.style.fontWeight = 'bold';
}

if(textoOracionCinco.includes(palabra)){
    oracionCinco.style.color = 'red';
    oracionCinco.style.fontWeight = 'bold';
}

if(textoOracionSeis.includes(palabra)){
    oracionSeis.style.color = 'red';
    oracionSeis.style.fontWeight = 'bold';
}
  
if(textoOracionSiete.includes(palabra)){
    oracionSiete.style.color = 'red';
    oracionSiete.style.fontWeight = 'bold';
}

if(textoOracionOcho.includes(palabra)){
    oracionOcho.style.color = 'red';
    oracionOcho.style.fontWeight = 'bold';
}

if(textoOracionNueve.includes(palabra)){
    oracionNueve.style.color = 'red';
    oracionNueve.style.fontWeight = 'bold';
}

if(textoOracionDiez.includes(palabra)){
    oracionDiez.style.color = 'red';
    oracionDiez.style.fontWeight = 'bold';
}

