const preguntas = [
  {
    pregunta: "¿Cuándo nací?",
    opciones: ["7 de diciembre", "14 de febrero", "25 de diciembre", "1 de enero"],
    respuesta: "7 de diciembre"
  },
  {
    pregunta: "¿Qué tipo de series o películas me gustan más?",
    opciones: ["Comedia", "Anime", "Terror", "Drama"],
    respuesta: "Anime"
  },
  {
    pregunta: "¿Cuál es mi película favorita?",
    opciones: ["Titanic", "Rápidos y Furiosos", "Rocky", "Avengers"],
    respuesta: "Rocky"
  },
  {
    pregunta: "¿Dónde nací?",
    opciones: ["Bogotá", "Maracaibo", "Caracas", "Lima"],
    respuesta: "Caracas"
  },
  {
    pregunta: "¿Qué estudio?",
    opciones: ["Medicina", "Arquitectura", "Ingeniería Electrónica", "Derecho"],
    respuesta: "Ingeniería Electrónica"
  }
];

let preguntaActual = 0;
let puntaje = 0;

const contenedor = document.getElementById('quiz-container');
const botonSiguiente = document.getElementById('next-btn');
const puntajeElemento = document.getElementById('score');

function mostrarPregunta() {
  const actual = preguntas[preguntaActual];
  contenedor.innerHTML = `
    <h2>${actual.pregunta}</h2>
    ${actual.opciones.map(opcion => `
      <button class="opcion">${opcion}</button>
    `).join('')}
  `;

  const botones = document.querySelectorAll('.opcion');
  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      if (boton.textContent === actual.respuesta) {
        puntaje++;
        boton.style.backgroundColor = '#b3ffb3'; // verde
      } else {
        boton.style.backgroundColor = '#ffb3b3'; // rojo
      }

      puntajeElemento.textContent = `Puntaje: ${puntaje}`;
      botones.forEach(b => b.disabled = true);
      botonSiguiente.disabled = false;
    });
  });
}

botonSiguiente.addEventListener('click', () => {
  preguntaActual++;
  if (preguntaActual < preguntas.length) {
    mostrarPregunta();
    botonSiguiente.disabled = true;
  } else {
    let mensajeFinal = "";
    if (puntaje === preguntas.length) {
      mensajeFinal = "🌟 ¡Vaya, me conoces! Te mando un beso 😘";
    } else if (puntaje === 0) {
      mensajeFinal = "💀 Tas jodida 😬";
    } else if (puntaje <= preguntas.length / 2) {
      mensajeFinal = "😢 Pensé que me conocías mejor...";
    } else {
      mensajeFinal = "😊 ¡Lo hiciste bien, pero hay cosas que mejorar!";
    }

    contenedor.innerHTML = `<h2>💖 ¡Juego terminado! 💖</h2>
    <p>Tu puntaje final fue: <strong>${puntaje} / ${preguntas.length}</strong></p>
    <p>${mensajeFinal}</p>`;
    botonSiguiente.style.display = 'none';
  }
});

mostrarPregunta();
