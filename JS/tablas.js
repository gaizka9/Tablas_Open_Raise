
fetchAndCreateTable("tabla");

document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', function() {
        
        const item = this.id;

        fetchAndCreateTable(item); 
    });
});


function fetchAndCreateTable(item) {
    fetch("./json/" + item + ".json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("Datos obtenidos:", data);
            crearTabla(data); 
        })
        .catch((error) => {
            console.error("Hubo un problema con la solicitud Fetch:", error);
        });
}


function crearTabla(manos) {
    // Crear la tabla
    const tabla = document.createElement('table');
    const body = tabla.createTBody();

    // Rellenar la tabla con los datos
    for (let i = 0; i < 13; i++) {
        const row = body.insertRow();
        for (let j = 0; j < 13; j++) {
            const cell = row.insertCell();
            const index = i * 13 + j; 

                const carta = manos[index];
                cell.textContent = carta.mano; // Agregar el texto de la mano
                cell.classList.add(carta.suit); // Añadir la clase suit
                cell.classList.add(carta.move); // Añadir la clase move
                cell.id = carta.mano;
                cell.setAttribute('data-move', carta.move);
        }
    }

    // Limpiar la tabla anterior
    const tablaDiv = document.querySelector('.tabla');
    tablaDiv.innerHTML = ''; // Limpiar el contenido anterior
    // Añadir la tabla al div con clase "tabla"
    tablaDiv.appendChild(tabla);



    celdaColor(".raise", "#ff0000")
    celdaColor(".limp", "#0b8300")
    celdaColor(".bluff", "#0000ff")
    celdaColor(".raiseV", "#25007a")
}


function celdaColor(clase, color) {
  const Cell = document.querySelectorAll(clase); 
    Cell.forEach(cell => {
        cell.style.backgroundColor = color;
        cell.style.color = "#fff";
    });
}