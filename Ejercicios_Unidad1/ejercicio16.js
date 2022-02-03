const enlaces = document.getElementsByTagName('a');
console.log("Número de enlaces de la página: ",enlaces.length);
console.log("Dirección a la que enlaza el penúltimo enlace: ", enlaces[enlaces.length-2].href);
const parrafos = document.getElementsByTagName('p');
console.log("Número de enlaces del tercer párrafo:", parrafos[2].getElementsByTagName('a').length);
