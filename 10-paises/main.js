// paises
// En un documento html crear una lista desordenada con distintos paises de cada continente (entre 2 y 4 por continente). Hacer un programa que al iniciarse pregunte mediante un prompt por un continente y destaque en rojo y en negrita aquellos paises de dicho continente.

// let paises = document.getElementById('paises');


//Declarar variables
let america = document.querySelector('#america')
let europa = document.querySelector('#europa')
let asia = document.querySelector('#asia')
let africa = document.querySelector('#africa')
let oceania = document.querySelector('#oceania')

let continente = prompt('Ingrese un continente (ej: asia)')

if(continente === 'america'){
    console.log("ES america👩");
    america.classList.add('continente')
}

if(continente === 'europa'){
    console.log("ES europa👩");
    europa.classList.add('continente')
}

if(continente === 'asia'){
    console.log("ES asia👩");
   asia.classList.add('continente')
}

if(continente === 'africa'){
    console.log("ES africa👩");
    africa.classList.add('continente')
}

if(continente === 'oceania'){
    console.log("ES oceania👩");
    oceania.classList.add('continente')
}

console.log(paises);

//console.log(america);