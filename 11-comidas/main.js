// comidas
// En un documento html agregar imágenes de comidas, postres y bebidas (3 o 4 de cada uno). Dar estilos para que se muestren una al lado de la otra, que tengan algo de espacio con margenes y que tengan el mismo tamaño. Hacer un programa que al iniciarse pregunte mediante un prompt qué se desea ver (comidas, postres o bebidas) y mostrar sólo las imágenes de la categoría correspondiente.

const eleccion = prompt("Elija la categoría que desea ver:\n 1- comidas \n 2- postres \n 3- bebidas")

const $ = (selector) =>document.querySelector(selector);
const comidas = $('#comidas');
const postres = $('#postres');
const bebidas = $('#bebidas');
const h1 = $("h1");

const elegirCategoria = (eleccion)=>{
    if(eleccion === "comidas" || eleccion === '1'){
        h1.innerText=`Comidas`;
        postres.style.display= ('none')
        bebidas.style.display= ('none')
    }else if(eleccion === "postres" || eleccion === '2'){
        h1.innerText=`Postres`;
        bebidas.style.display= ('none')
        comidas.style.display= ('none')
    }else if(eleccion === "bebidas" || eleccion === '3' ){
        h1.innerText=`Bebidas`;
        postres.style.display= ('none')
        comidas.style.display= ('none')
    }else{
        alert('La opción no es válida');
    }
};

elegirCategoria(eleccion); 

