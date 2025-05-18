const questions = [
  {
    question: "¿Cuál es mi color favorito?",
    options: ["Negro", "Azul", "Rojo", "Verde"],
    answer: "Negro"
  },
  {
    question: "¿Dónde nos conocimos tú y yo?",
    options: ["En el barrio", "En el colegio", "En una fiesta", "Por redes sociales"],
    answer: "En el barrio"
  },
  {
    question: "¿Qué tipo de cosas disfruto ver?",
    options: ["Películas de acción", "Series románticas", "Anime", "Deportes"],
    answer: "Anime"
  },
  {
    question: "¿Me gustan mucho las fiestas?",
    options: ["Sí, me encantan", "Solo si tú vas", "No tanto", "¡Amo bailar sin parar!"],
    answer: "No tanto"
  },
  {
    question: "¿Qué me hace más feliz?",
    options: ["Estar contigo", "Tener mucho dinero", "Dormir todo el día", "Irme de fiesta"],
    answer: "Estar contigo"
  },
  {
    question: "¿Cuál es mi segundo  nombre?",
    options: ["carlos ", "luiz", "Andres", "No tiene segundo nombre"],
    answer: "Andres " // Cambia esto según tu novia 💘
  },
  {
    question: "¿Cuál es mi comida favorita?",
    options: ["Pizza", "Pasta", "Sushi", "Hamburguesa"],
    answer: "Pasta" // Personaliza según lo que le gusta a ella 🍕
  },
  {
    question: "¿Qué día es mi cumpleaños ?",
    options: ["14 de febrero", "7 de diciembre", "1 de mayo", "No recuerdo 😅"],
    answer: "7 de diciembre" // O el día real si tienen uno 💑
  }
];

let currentQuestionIndex = -1;
const quizContainer = document.getElementById("quiz-container");
const nextButton = document.getElementById("next-btn");

function getRandomQuestionIndex(excludeIndex) {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * questions.length);
  } while (newIndex === excludeIndex);
  return newIndex;
}

function showQuestion() {
  quizContainer.innerHTML = "";
  currentQuestionIndex = getRandomQuestionIndex(currentQuestionIndex);
  const q = questions[currentQuestionIndex];

  const questionElement = document.createElement("h2");
  questionElement.innerText = q.question;
  quizContainer.appendChild(questionElement);

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(btn, q.answer);
    quizContainer.appendChild(btn);
  });

  nextButton.disabled = true;
}

function checkAnswer(button, correctAnswer) {
  const options = document.querySelectorAll(".option");
  options.forEach(opt => opt.disabled = true);

  if (button.innerText === correctAnswer) {
    button.style.backgroundColor = "#a2f5a2";
    nextButton.disabled = false;
  } else {
    button.style.backgroundColor = "#f5a2a2";
    showSadFace();
    setTimeout(() => {
      alert("😢 ¡Ups! Te equivocaste... vamos con otra pregunta.");
      showQuestion();
    }, 1000);
  }
}

function showSadFace() {
  if (!document.querySelector(".sad-face")) {
    const sadFace = document.createElement("div");
    sadFace.className = "sad-face";
    sadFace.innerText = "😢 Esa no era la correcta...";
    quizContainer.appendChild(sadFace);
  }
}

nextButton.addEventListener("click", () => {
  showQuestion();
});

// Inicia el juego
showQuestion();

