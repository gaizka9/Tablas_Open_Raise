hacerPregunta(); 

function hacerPregunta() {
    
    const options = document.getElementsByClassName('quiz-option');
    for (let option of options) {
        option.style.backgroundColor = '#0d6efd'; // Color por defecto
    }

    const posicion = ["utg", "utg1", "mp", "mp1", "hijack", "cutoff", "button", "sb"];
    const aleatorio = Math.floor(Math.random() * posicion.length);

    fetch(`./json/${posicion[aleatorio]}.json`)
        .then((response) => {
            return response.json();
        })
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
    pregunta.innerHTML = `<h4>Estas en la posicion <b>${posicion.toUpperCase()}</b> y tu mano es <b>${carta.mano}</b> <br>¿Qué deberías hacer?</h4>`;

    const correctAnswer = carta.move;

    // Quitar eventos de clic anteriores para evitar múltiples disparos
    const buttons = document.querySelectorAll('.quiz-option');
    buttons.forEach(button => {
        button.removeEventListener('click', handleButtonClick); // Quitar el evento anterior
        button.addEventListener('click', handleButtonClick); // Añadir el nuevo evento
    });

    function handleButtonClick() {
        const selectedAnswer = this.getAttribute('data-answer');
        console.log("Respuesta seleccionada:", selectedAnswer); // Para depurar

        // Resetear todos los botones a su color por defecto
        buttons.forEach(button => {
            button.style.backgroundColor = '#0d6efd'; // Color por defecto
        });

        const incorrecto = document.querySelector('button[data-answer="' + selectedAnswer + '"]');
        incorrecto.style.backgroundColor = 'red';

        const correcto = document.querySelector('button[data-answer="' + correctAnswer + '"]');
        correcto.style.backgroundColor = 'green';

        // Espera un segundo y llama a hacerPregunta nuevamente
        setTimeout(hacerPregunta, 1000);
    }
}
