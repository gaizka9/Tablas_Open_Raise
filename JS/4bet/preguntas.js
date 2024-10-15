hacerPregunta(); 

function hacerPregunta() {
    // Reiniciar el color de los botones
    const options = document.getElementsByClassName('quiz-option');
    for (let option of options) {
        option.style.backgroundColor = '#0d6efd'; // Color por defecto
        option.disabled = false; // Habilitar los botones nuevamente
    }

    const posicion = [
        ["UTG", ["4bUTG/utg1", "4bUTG/mp", "4bUTG/mp1", "4bUTG/hijack", "4bUTG/cutoff", "4bUTG/button", "4bUTG/sb", "4bUTG/bb"]],
        ["UTG1", ["4bUTG1/mp", "4bUTG1/mp1", "4bUTG1/hijack", "4bUTG1/cutoff", "4bUTG1/button", "4bUTG1/sb", "4bUTG1/bb"]],
        ["MP", ["4bMP/mp1", "4bMP/hijack", "4bMP/cutoff", "4bMP/button", "4bMP/sb", "4bMP/bb"]],
        ["MP1", ["4bMP1/hijack", "4bMP1/cutoff", "4bMP1/button", "4bMP1/sb", "4bMP1/bb"]],
        ["HIJACK", ["4bHJ/cutoff", "4bHJ/button", "4bHJ/sb", "4bHJ/bb"]],
        ["CUTOFF", ["4bCO/button", "4bCO/sb", "4bCO/bb"]],
        ["BUTTON", ["4bBTN/sb", "4bBTN/bb"]],
        ["SB", ["4bSB/bb"]],
    ];

    const aleatorio = Math.floor(Math.random() * posicion.length);
    const hero = posicion[aleatorio][0]
    const villianPos = Math.floor(Math.random() * posicion[aleatorio][1].length);
    const villian = posicion[aleatorio][1][villianPos]

    fetch(`./../../json/4BET/${villian}.json`)
        .then((response) => response.json())
        .then((data) => {
            datosPregunta(data, villian, hero);
        })
        .catch((error) => {
            console.error("Hubo un problema con la solicitud Fetch:", error);
        });
}

function datosPregunta(data, villian, hero) {
    const aleatorio = Math.floor(Math.random() * data.length);
    const carta = data[aleatorio];

    const pos = villian.split('/')[1]; // Obtener la parte después del "/"

    const pregunta = document.getElementById("pregunta");
    pregunta.innerHTML = `<h4>Estas en la posición <b>${hero}</b> contra un villano en <b>${pos.toUpperCase()}</b> y tu mano es <b>${carta.mano}</b> <br>¿Qué deberías hacer?</h4>`;

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