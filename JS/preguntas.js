hacerPregunta(); 

function hacerPregunta() {
    // Reiniciar el color de los botones
    const options = document.getElementsByClassName('quiz-option');
    for (let option of options) {
        option.style.backgroundColor = '#0d6efd'; // Color por defecto
        option.disabled = false; // Habilitar los botones nuevamente
    }

    const posicion = ["utg", "utg1", "mp", "mp1", "hijack", "cutoff", "button", "sb"];
    const aleatorio = Math.floor(Math.random() * posicion.length);

    fetch(`./json/RFI/${posicion[aleatorio]}.json`)
        .then((response) => response.json())
        .then((data) => {
            datosPregunta(data, posicion[aleatorio]);
        })
        .catch((error) => {
            console.error("Hubo un problema con la solicitud Fetch:", error);
        });
}

function datosPregunta(data, posicion) {
    const aleatorio = Math.floor(Math.random() * data.length);
    const carta = data[aleatorio];

    const pregunta = document.getElementById("pregunta");
    pregunta.innerHTML = `<h4>Estas en la posición <b>${posicion.toUpperCase()}</b> y tu mano es <b>${carta.mano}</b> <br>¿Qué deberías hacer?</h4>`;

    const correctAnswer = carta.move;

    // Obtener todos los botones de opción
    const buttons = document.querySelectorAll('.quiz-option');

    // Limpiar eventListeners antiguos y asignar nuevos a los botones
    buttons.forEach(button => {
        button.removeEventListener('click', handleButtonClick); // Eliminar cualquier eventListener previo
        button.addEventListener('click', handleButtonClick); // Agregar nuevo eventListener
        button.correctAnswer = correctAnswer; // Almacenar la respuesta correcta en el botón
    });
}


function handleButtonClick(event) {
    const selectedAnswer = this.getAttribute('data-answer');
    const correctAnswer = this.correctAnswer; 
    const buttons = document.querySelectorAll('.quiz-option');

    console.log("Respuesta seleccionada:", selectedAnswer);

    // Resetear todos los botones a su color por defecto
    buttons.forEach(button => {
        button.style.backgroundColor = '#0d6efd'; // Color por defecto
        button.disabled = true; // Deshabilitar botones para evitar múltiples clics
    });

    // Cambiar el color del botón seleccionado
    const incorrecto = document.querySelector('button[data-answer="' + selectedAnswer + '"]');
    incorrecto.style.backgroundColor = 'red';

    const correcto = document.querySelector('button[data-answer="' + correctAnswer + '"]');
    correcto.style.backgroundColor = 'green';

    // Espera un segundo y llama a hacerPregunta nuevamente
    setTimeout(hacerPregunta, 1000);
}