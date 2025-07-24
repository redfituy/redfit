
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
        divsRespuesta[indiceActivo].classList.toggle('mostrar');    // puedo usar este mismo toggle para girar la img con una clase?
        divsPregunta[indiceActivo].childNodes[3].classList.toggle('girar');
        //cambio la "x" por el "+"
        //divsPregunta[indiceActivo].childNodes[3].textContent = '+';
        // el cajón que toqué era el mismo que se cerró?
        if(index == indiceActivo) { //debo dejar null el indice activo
            indiceActivo = -1;
        } else { //era otro cajon, lo abro y activo el indice
            indiceActivo = index;
            divsRespuesta[indiceActivo].classList.toggle('mostrar');
            divsPregunta[indiceActivo].childNodes[3].classList.toggle('girar');

            //cambio el "+" por la "x"
            //divsPregunta[indiceActivo].childNodes[3].textContent = 'x';
        }
    } else { // no hay ningun cajon abierto, lo abro y activo el indice
    indiceActivo = index;
    divsRespuesta[indiceActivo].classList.toggle('mostrar');
    //cambio el "+" por la "x"
    //divsPregunta[indiceActivo].childNodes[3].textContent = 'x';
    divsPregunta[indiceActivo].childNodes[3].classList.toggle('girar');

    }
}));

// funcion para gestionar el banner
window.onload = function() {
    
    if (document.querySelector('#slide') != null) {

        let item = 0;
        let itempaginacion = document.querySelectorAll('#paginacion li');
        let elementoUl = document.querySelector('#slide ul');
        let elementoLi = document.querySelectorAll('#slide ul li');
        let detenerCiclo = false;

        console.log(elementoLi);
        /** width ul li */
        for ( let i = 0; i < elementoLi.length; i++ ) {

            let x = 100 / elementoLi.length;
            elementoLi[i].style.width = `${x}%`;

        }

        let ulW = 100 * elementoLi.length;
        elementoUl.style.width = `${ulW}%`;

        /** paginacion */
        for ( let i = 0; i < itempaginacion.length; i++ ) {
            itempaginacion[i].addEventListener('click', ()=> {
                item = i;
                movimientoSlide(i);
            })
        }

        /** funcion avanzar */
        function avanzar() {
            if (item == elementoLi.length - 1 ) {
                item = 0;
            } else {
                item++;
            }
            movimientoSlide(item);
        }

        /** avanzar */
        document.querySelector('#next').addEventListener('click', ()=> {
            avanzar();
            detenerCiclo = true;
        })
        /** retroceder */
        document.querySelector('#prev').addEventListener('click', ()=> {
            if (item == 0) {
                item = elementoLi.length - 1;
            } else {
                item--;
            }
            movimientoSlide(item);
            detenerCiclo = true;
        })

        /** funcion movimiento */
        function movimientoSlide(item) {
            for (let i = 0; i < itempaginacion.length; i++ ) {
                itempaginacion[i].style.opacity = '0.5';
            }
            itempaginacion[item].style.opacity = '1';
            let lf = item * 100;
            elementoUl.style.left = `-${lf}%`;
        }

        /** intervalo de tiempo */
        setInterval(function() {
            if(detenerCiclo) {
                detenerCiclo = false;
            } else {
                avanzar();
            }
        }, 6000)
    }
}
