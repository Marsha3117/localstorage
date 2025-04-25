document.getElementById("agregar").addEventListener('click', function(){
    const input = document.getElementById("tareaingresada");
    const tarea = input.value.trim();

    if(tarea){

        const nuevoitem = document.createElement("li"); //creo una constante y creo los li
        nuevoitem.textContent = tarea; // esa constante guarda lo que pongo en el input
        document.getElementById("list").appendChild(nuevoitem); // Voy a la lista, la llamo po ID y Agrego el nuevo li a la lista ul
        input.value = ''; // borra el input

        
        const botonborrar = document.createElement("button"); //Crear el elemento botón - está creado en js pero no se muestra
        botonborrar.textContent = 'Eliminar'; //Establecer el texto del botón
        nuevoitem.appendChild(botonborrar); //Se muestra el Botón
        //Agregar un evento listener para que el botón haga algo al ser clickeado
        botonborrar.addEventListener('click', function() {
            nuevoitem.remove()
            botonborrar.remove()           
        });

        const botontachar = document.createElement("button");
        botontachar.textContent = 'Completada';
        nuevoitem.appendChild(botontachar);

        botontachar.addEventListener('click', function() {
            if (nuevoitem.style.textDecoration === 'line-through') {
                nuevoitem.style.textDecoration = ''; // Quita el tachado
            } else {
                nuevoitem.style.textDecoration = 'line-through'; // Aplica el tachado
            }
        });

     } else {
         document.getElementById("saludo").innerHTML = "Debe escribir una tarea";
     }


     //botón eliminar lista
     const borrarlista = document.getElementById("borrarlista");
     borrarlista.addEventListener("click", function() {
         document.getElementById("list").innerHTML = ''
         localStorage.removeItem(localStorageKey); // Limpiar localStorage al borrar todo
     });

 });


    