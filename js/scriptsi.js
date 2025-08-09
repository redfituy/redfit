
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

        /**console.log(elementoLi);*/
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

    // seccion de testimoniales
    if (document.querySelector('#contenedortestimoniales') != null) {

        let actual = 0; // item
        // itempaginacion no va
        let conjunto = document.querySelector('#testimoniales'); //elementoul
        let caso = document.querySelectorAll('.testimonio'); // elementoli
        let stopCiclo = false;

        // console.log(caso); // deberia mostrar las 3 pictures

        /** width de las pictures */
        for ( let i = 0; i < caso.length; i++ ) {

            let xx = 100 / caso.length;
            caso[i].style.width = `${xx}%`;
        }
        let cW = 100 * caso.length;
        conjunto.style.width = `${cW}%`;

        // movimiento
        /** funcion movimiento */
        function movimientoSlide(item) {
            //for (let i = 0; i < itempaginacion.length; i++ ) {
                //itempaginacion[i].style.opacity = '0.5';
            //}
            //itempaginacion[item].style.opacity = '1';
            let lf = item * 100;
            conjunto.style.left = `-${lf}%`;
        }

        /** intervalo de tiempo */
        setInterval(function() {
            if(stopCiclo) {
                stopCiclo = false;
            } else {
                avanzar();
            }
        }, 2000)

        /**///////////////////////////////////////////////////////////////////

        /** funcion avanzar */
        function avanzar() {
            if (actual == caso.length - 1 ) {
                actual = 0;
            } else {
                actual++;
            }
            movimientoSlide(actual);
        }

        /** avanzar */
        document.querySelector('#nextt').addEventListener('click', ()=> {
            avanzar();
            detenerCiclo = true;
        })
        /** retroceder */
        document.querySelector('#prevt').addEventListener('click', ()=> {
            if (actual == 0) {
                actual = caso.length - 1;
            } else {
                actual--;
            }
            movimientoSlide(actual);
            stopCiclo = true;
        })

        // podemos duplicar el carrusel de testimonios y correrle una posicion al segundo carrusel y achicamos ambos a partir de los 768px 
        // esto generará que el segundo carrusel entre en la pantalla y se puedan ver dos testimonios a la vez en pc
        // la otra opcion es: duplico las fotos de modo que siempre van a ser par y solo cambio es tamaño a los 768px

        // hay que ver como hacer para que la imagen tenga el ancho del 100% y no se mueva cortada
    }
}

