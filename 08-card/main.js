// card
// Hacer un programa que al iniciarse pregunte mediante prompts por

// un título
// una url de una imagen
// una url a un artículo
// Utilizar esos datos para completar en el html una card que tenga

// una imagen, con la url de la imagen ingresada
// un título, con el texto del título ingresado
// un link que diga Leer más, con la url al artículo ingresado
// Dar algunos estilos mínimos a la card:

// centrarla con respecto a la pantalla
// agregarle un borde
// agregarle un sombreado
// cambiarle la tipografía
// cambiarle los tamaños de fuente
// cambiarle los colores por defecto

const $ = (selector) => document.querySelector(selector);

const titulo = prompt('Ingrese un título');
const urlImagen = prompt('Ingrese una url de una imagen');
const urlArticulo = prompt('Ingrese una url de un artículo');

const card = $('.card');

card.innerHTML =`<img src="${urlImagen}">
<h1>"${titulo}"</h1>
<a href="${urlArticulo}">Leer más</a>`


