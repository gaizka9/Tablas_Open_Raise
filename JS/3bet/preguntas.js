hacerPregunta(); 

function hacerPregunta() {
    // Reiniciar el color de los botones
    const options = document.getElementsByClassName('quiz-option');
    for (let option of options) {
        option.style.backgroundColor = '#0d6efd'; // Color por defecto
        option.disabled = false; // Habilitar los botones nuevamente
    }

    const posicion = [
        ["UTG", ["3bUTG/utg1", "3bUTG/mp", "3bUTG/mp1", "3bUTG/hijack", "3bUTG/cutoff", "3bUTG/button", "3bUTG/sb", "3bUTG/bb"]],
        ["UTG1", ["3bUTG1/mp", "3bUTG1/mp1", "3bUTG1/hijack", "3bUTG1/cutoff", "3bUTG1/button", "3bUTG1/sb", "3bUTG1/bb"]],
        ["MP", ["3bMP/mp1", "3bMP/hijack", "3bMP/cutoff", "3bMP/button", "3bMP/sb", "3bMP/bb"]],
        ["MP1", ["3bMP1/hijack", "3bMP1/cutoff", "3bMP1/button", "3bMP1/sb", "3bMP1/bb"]],
        ["HIJACK", ["3bHJ/cutoff", "3bHJ/button", "3bHJ/sb", "3bHJ/bb"]],
        ["CUTOFF", ["3bCO/button", "3bCO/sb", "3bCO/bb"]],
        ["BUTTON", ["3bBTN/sb", "3bBTN/bb"]],
        ["SB", ["3bSB/bb"]],
    ];

    const aleatorio = Math.floor(Math.random() * posicion.length);
    const villian = posicion[aleatorio][0]
    const heroPos = Math.floor(Math.random() * posicion[aleatorio][1].length);
    const hero = posicion[aleatorio][1][heroPos]

    fetch(`./../../json/3BET/${hero}.json`)
        .then((response) => response.json())
        .then((data) => {
            datosPregunta(data, hero, villian);
        })
        .catch((error) => {
            console.error("Hubo un problema con la solicitud Fetch:", error);
        });
}

function datosPregunta(data, hero, villian) {
    const aleatorio = Math.floor(Math.random() * data.length);
    const carta = data[aleatorio];

    const pos = hero.split('/')[1]; // Obtener la parte después del "/"

    const pregunta = document.getElementById("pregunta");
    pregunta.innerHTML = `<h4>Estas en la posición <b>${pos.toUpperCase()}</b> contra un villano en <b>${villian}</b> y tu mano es <b>${carta.mano}</b> <br>¿Qué deberías hacer?</h4>`;

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