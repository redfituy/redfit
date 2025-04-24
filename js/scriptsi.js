
// seleccionar todos los divs pregunta y divs respuesta
const divsPregunta = document.querySelectorAll('.pregunta');
const divsRespuesta = document.querySelectorAll('.respuesta');
var indiceActivo = -1;
// asignarles el evento click
divsPregunta.forEach((element, index) => element.addEventListener('click', function() {
// utilizamos la siguiente analogia: cada div es un cajon el cual solo puede abrirse si los otros estan cerrados
// hay algun cajon abierto?
if(indiceActivo != -1) { 
    // si hay cajon abierto lo cierro
    divsRespuesta[indiceActivo].classList.toggle('mostrar');
    //cambio la "x" por el "+"
    divsPregunta[indiceActivo].childNodes[3].textContent = '+';
    // el cajón que toqué era el mismo que se cerró?
    if(index == indiceActivo) { //debo dejar null el indice activo
        indiceActivo = -1;
    } else { //era otro cajon, lo abro y activo el indice
        indiceActivo = index;
        divsRespuesta[indiceActivo].classList.toggle('mostrar');
        //cambio el "+" por la "x"
        divsPregunta[indiceActivo].childNodes[3].textContent = 'x';
        
    }
} else { // no hay ningun cajon abierto, lo abro y activo el indice
    indiceActivo = index;
    divsRespuesta[indiceActivo].classList.toggle('mostrar');
    //cambio el "+" por la "x"
    divsPregunta[indiceActivo].childNodes[3].textContent = 'x';
}

}));




