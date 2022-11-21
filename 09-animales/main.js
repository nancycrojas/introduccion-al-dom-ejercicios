// animales
// En un documento html agregar al menos tres imágenes de distintos animales, una por cada animal. Hacer un programa que al iniciarse pregunte mediante un prompt por un animal (indicando en el mensaje las opciones disponibles) y muestre solamente la imagen del animal elegido.

const animal = prompt("Ingrese que animal desea ver:\n 1: perro,\n 2: gato,\n 3: mono");

const $ = (selector) =>document.querySelector(selector);
const perro = $('#perro');
const gato = $('#gato');
const mono = $('#mono');

const animalElegido = (animal)=>{
    if(animal === 'perro' || animal === '1'){
        gato.style.display = ('none')
        mono.style.display = ('none')
    }else if(animal === 'gato' || animal === '2'){
        perro.style.display = ('none')
        mono.style.display = ('none')
    }else if(animal === 'mono' || animal === '3'){
        gato.style.display = ('none')
        perro.style.display = ('none')
    }else{
        alert('La opción no es válida');
    }
};
        
animalElegido(animal);
