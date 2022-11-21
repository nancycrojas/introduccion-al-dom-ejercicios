// temperatura
// Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura, y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo, Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada, siguiendo las siguientes reglas:

// Temperatura	Color
// Menor a 0°	Azul
// Mayor o igual a 0° y menor a 15°	Celeste
// Mayor o igual a 15° y menor a 25°	Verde
// Mayor o igual a 25° y menor a 30°	Amarillo
// Mayor o igual a 30° y menor a 35°	Naranja
// Mayor a 35°	Rojo

let $ = (selector) => document.querySelector(selector);

let temperatura = prompt("Ingrese una temperatura");

let h1 = $("h1")
h1.innerText=`Temperatura actual: ${temperatura}°.`;

function temperaturaElegida(){
    if(temperatura<0){
        h1.classList.add(`azul`);
    }else if(temperatura>=0 && temperatura<15){
        h1.classList.add(`celeste`);
    }else if(temperatura>=15 && temperatura<25){
        h1.classList.add(`verde`);
    }else if(temperatura>=25 && temperatura<30){
        h1.classList.add(`amarillo`);
    }else if(temperatura>=30 && temperatura<35){
        h1.classList.add(`naranja`);
    }else if(temperatura>=35){
        h1.classList.add(`rojo`);
    }
}   

temperaturaElegida(temperatura);