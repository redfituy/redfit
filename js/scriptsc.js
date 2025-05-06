document.addEventListener("DOMContentLoaded", function() {

    //querySelector

    // selecciono los botones
    const btnAddExer = document.querySelector("#btnAddExer"); //agregar ejercicio
    const btnListoExer = document.querySelector("#btnListoExer"); //listo
    // selecciono modal ejercicios
    const modalExer = document.querySelector("#modalejercicio");
    // selecciono los checked de tipos de ejercicios
    const cbEspalda = document.querySelector("#musc1");
    const cbPecho = document.querySelector("#musc2");
    const cbPiernas = document.querySelector("#musc3");
    const cbBrazos = document.querySelector("#musc4");
    // selecciono listas de ejercicios
    const listaEspalda = document.querySelector("#listaEspalda");
    const listaPecho = document.querySelector("#listaPecho");
    const listaPiernas = document.querySelector("#listaPiernas");
    const listaBrazos = document.querySelector("#listaBrazos");
    // selecciono los controles mas y menos, series
    const masS = document.querySelector("#masS");
    const menosS = document.querySelector("#menosS");
    const ContadorS = document.querySelector("#ContadorS");
    // selecciono los controles de las repeticiones
    //const masR = document.querySelector("#masR");
    //const menosR = document.querySelector("#menosR");
    const ContadorR = document.querySelector("#ContadorR");
    // selecciono el control del descanso
    const descanso = document.querySelector("#descanso");
    // selecciono el control de metodologia
    const metodologia = document.querySelector("#metodologia");
    // selecciono el control de notas
    const notas = document.querySelector("#notas");

    // selecciono los botones de editar ejercicios
    const btnEditar1 = document.querySelector("#btnEditar1");
    const btnEditar2 = document.querySelector("#btnEditar2");
    const btnEditar3 = document.querySelector("#btnEditar3");
    const btnEditar4 = document.querySelector("#btnEditar4");
    const btnEditar5 = document.querySelector("#btnEditar5");
    const btnEditar6 = document.querySelector("#btnEditar6");

    // selecciono el div de los ejercicios
    //const ejercicios = document.querySelector("#ejercicios");
    var cantidadejercicio = "0";
    var indiceejercicio = "0";
    // selecciono los items actuales
    var items = [];
    // var ejercicio = document.querySelector(`#ejercicio${indiceejercicio}`);

    // funcion de limpieza de controles
    function  limpiarControles() {

        if(cbBrazos.checked) {
            listaBrazos.classList.add("hidden");
            listaBrazos.value = "";
            cbBrazos.checked = false;
        }
        if(cbEspalda.checked) {
            listaEspalda.classList.add("hidden");
            listaEspalda.value = "";
            cbEspalda.checked = false;
        }
        if(cbPecho.checked) {
            listaPecho.classList.add("hidden");
            listaPecho.value = "";
            cbPecho.checked = false;
        }
        if(cbPiernas.checked) {
            listaPiernas.classList.add("hidden");
            listaPiernas.value = "";
            cbPiernas.checked = false;
        }

        ContadorS.textContent = "3";
        ContadorR.value = "";
        metodologia.value = "";
        descanso.value = "";
        notas.value = "";
     }

    // funcion auxiliar de los botones editar
    function auxEdit(e) {
        console.log("editando ejercicio...");
        // mostrar modal
        modalExer.showModal();
        // asignamos el indice del ejercicio al ejercicio actual
        //console.log(e.target.getAttribute("numej"));
        indiceejercicio = parseInt(e.target.getAttribute("numej"));
        //indiceejercicio = e.target.getAttribute("numej");
        //indiceejercicio = event.target.getAttribute("numej");
        // asignamos los items actuales
        items = document.querySelectorAll(`p.item${indiceejercicio}, button.item${indiceejercicio}`);

        //cargo los controles con la informacion del ejercicio
        if(items.length == 0 ) {
            console.log("arreglo vacio");
            console.log("indice ejercicio:");
            console.log(indiceejercicio);
            console.log("e.target: ");
            console.log(e.target);
            
        }
        items[0].textContent = "seleccione ejercicio";
        ContadorS.textContent = items[1].textContent;
        ContadorR.value = items[2].textContent;
        metodologia.value = items[3].textContent // revisar si la opcion original sigue ahi
        descanso.value = items[4].textContent; // el formato servira?
        notas.value = items[7].textContent;


    }

    // evento del boton agregar ejercicio
    btnAddExer.addEventListener("click",(e)=>{
        // e.preventDefault();
        console.log("modal abierto");
        // mostrar modal
        modalExer.showModal();
        // colocamos la variable numerodeejercicio en un valor igual a la cantidad actual de ejercicios + 1
        cantidadejercicio++; // el boton "listo" va a utilizar este numero para asignarle los valores a los <p> console.log(numeroejercicio);
        indiceejercicio = cantidadejercicio; 
        // asignamos los items actuales
        items = document.querySelectorAll(`p.item${indiceejercicio}, button.item${indiceejercicio}`);
        // asignamos un valor por defecto al ejercicio para evitar errores
        items[0].textContent = "seleccione ejercicio";

        //mostramos los elementos nuevos
        items[0].classList.remove("hidden");
        items[1].classList.remove("hidden");
        items[2].classList.remove("hidden");
        items[3].classList.remove("hidden");
        items[4].classList.remove("hidden");
        items[5].classList.remove("hidden");
        items[6].classList.remove("hidden");
        items[7].classList.remove("hidden");
        
    });
    // evento del boton listo
    btnListoExer.addEventListener("click",(e)=>{
        // asignar los valores de los controles a fila en edicion
        items[1].textContent = ContadorS.textContent;
        items[2].textContent = ContadorR.value;
        items[3].textContent = metodologia.value;
        items[4].textContent = descanso.value;
        items[7].textContent = notas.value;

        //items[0].disabled = true;
        // cerrar el modal
        modalExer.close();
        // limpiamos los controles
        limpiarControles();
    });
    // evento de los botones editar ejercicios
    btnEditar1.addEventListener("click",(e)=>{  auxEdit(e); });
    btnEditar2.addEventListener("click",(e)=>{  auxEdit(e); });
    btnEditar3.addEventListener("click",(e)=>{  auxEdit(e); });
    btnEditar4.addEventListener("click",(e)=>{  auxEdit(e); });
    btnEditar5.addEventListener("click",(e)=>{  auxEdit(e); });
    btnEditar6.addEventListener("click",(e)=>{  auxEdit(e); });
    
    // evento de los cb
    cbEspalda.addEventListener("change",(e)=>{

        if (event.target.checked) {
            console.log("checked si");
            // le quitamos el disabled a listaEspalda
            listaEspalda.classList.remove("hidden");
        } else {
            console.log("checked no");
            listaEspalda.classList.add("hidden");
        }
    });
    cbPecho.addEventListener("change",(e)=>{
        
        if (event.target.checked) {
            console.log("checked si");
            // le quitamos el disabled a listaEspalda
            listaPecho.classList.remove("hidden");
        } else {
            console.log("checked no");
            listaPecho.classList.add("hidden");
        }
    });
    cbPiernas.addEventListener("change",(e)=>{
        
        if (event.target.checked) {
            console.log("checked si");
            // le quitamos el disabled a listaEspalda
            listaPiernas.classList.remove("hidden");
        } else {
            console.log("checked no");
            listaPiernas.classList.add("hidden");
        }
    });
    cbBrazos.addEventListener("change",(e)=>{
        
        if (event.target.checked) {
            console.log("checked si");
            // le quitamos el disabled a listaEspalda
            listaBrazos.classList.remove("hidden");
        } else {
            console.log("checked no");
            listaBrazos.classList.add("hidden");
        }
    });
    // eventos de las listas de ejercicios de espalda, pecho, piernas y brazos 
    listaEspalda.addEventListener("change", (e)=>{
        console.log("cambio de ejercicio de espalda");
        items[0].textContent = e.target.value;
    });
    listaPecho.addEventListener("change", (e)=>{
        console.log("cambio de ejercicio de pecho");
        items[0].textContent = e.target.value;
    });
    listaPiernas.addEventListener("change", (e)=>{
        console.log("cambio de ejercicio de piernas");
        items[0].textContent = e.target.value;
    });
    listaBrazos.addEventListener("change", (e)=>{
        console.log("cambio de ejercicio de brazos");
        items[0].textContent = e.target.value;
    });
    // eventos de los botones mas y menos series
    menosS.addEventListener("click",(e)=>{
        var res = parseInt(ContadorS.textContent)-1;
        ContadorS.textContent = res.toString();        
    });
    masS.addEventListener("click",(e)=>{
        var res = parseInt(ContadorS.textContent)+1;
        ContadorS.textContent = res.toString();        
    });

    // eventos de los botones mas y menos repeticiones
    //menosR.addEventListener("click",(e)=>{
        //var res = parseInt(ContadorR.textContent)-1;
        //ContadorR.textContent = res.toString();        
    //});
    //masR.addEventListener("click",(e)=>{
        //var res = parseInt(ContadorR.textContent)+1;
        //ContadorR.textContent = res.toString();        
    //});

});



// creamos en elemento correspondiente al nuevo ejercicio en la rutina
        //var newContent = document.createTextNode("Hola!¿Qué tal?");
        //var newElement1 = document.createElement("div");
        //newElement1.classList.add("itemA");
        //ejercicios.appendChild(newContent);
        //document.body.insertBefore(newContent, ejercicios);
