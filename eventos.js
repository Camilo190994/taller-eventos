document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos el div que contiene el botón
    let div = document.querySelector('.contenedor-boton');
    // Seleccionamos el botón
    let boton = document.querySelector('button');

    // Manejador de eventos para el div
    div.addEventListener('click', function() {
        alert('Hola! Soy el div');
    });

    // Manejador de eventos para el botón
    boton.addEventListener('click', function(event) {
        event.stopPropagation(); // Detiene la propagación del evento hacia el div
        alert('Hola! Soy el botón');
    });
});