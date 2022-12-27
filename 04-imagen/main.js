//imagen
//Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:

// Opción elegida	Ancho de imagen
// chica	200px
// mediana	500px
// grande	800px


let $ = (selector) => document.querySelector(selector);

let tamanioDeImagen= prompt('Ingrese un tamaño de imagen: c: chica, m: mediana y g: grande');
let imagen = $('img');
function tamanioElegido(tamanioImagen){
    if(tamanioImagen === 'c'){
        imagen.style.width = "200px";
    }
    else if(tamanioImagen === 'm'){
        imagen.style.width = "500px";
    }
    else if(tamanioImagen === 'g'){
        imagen.style.width = "800px";
    }
    else{
        alert(`No es una opción válida`)
    }
}

tamanioElegido(tamanioDeImagen);

