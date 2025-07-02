const questions = [
  "What planet is known as the 'Red Planet'?",
  "Who painted the Mona Lisa?",
  "What is the largest ocean on Earth?",
  "Which language is primarily spoken in Brazil?",
  "What is the capital of Japan?",
  "What is the chemical symbol for water?",
  "Who wrote 'Romeo and Juliet'?",
  "Which animal is known as the King of the Jungle?",
  "What is the smallest prime number?",
  "Which continent is the Sahara Desert located on?",
];
const choicesArray = [
  ["Earth", "Mars", "Jupiter", "Saturn"],
  ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
  ["Atlantic", "Indian", "Arctic", "Pacific"],
  ["Spanish", "Portuguese", "French", "English"],
  ["Beijing", "Seoul", "Tokyo", "Bangkok"],
  ["H2O", "O2", "CO2", "NaCl"],
  ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
  ["Tiger", "Lion", "Elephant", "Bear"],
  ["0", "1", "2", "3"],
  ["Asia", "Africa", "Europe", "Australia"],
];
const correctAnswers = [
  "Mars",
  "Da Vinci",
  "Pacific",
  "Portuguese",
  "Tokyo",
  "H2O",
  "William Shakespeare",
  "Lion",
  "2",
  "Africa"
];
let currentQuestionIndex = 0;
let score = 0;
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const resultsElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const retryButton = document.getElementById("retry");

function checkAnswer(button) {
  if(button.value === correctAnswers[currentQuestionIndex]) {
    score += 1;
  }
  currentQuestionIndex += 1;
  displayQuestion();
}

function displayQuestion() {
  if(currentQuestionIndex < questions.length) {
    questionElement.innerHTML = questions[currentQuestionIndex];
    for (let i = 0; i < choicesArray[currentQuestionIndex].length; i++) {
      const btn = document.getElementById(`choice${i + 1}`);
      btn.innerHTML = choicesArray[currentQuestionIndex][i];
      btn.value = choicesArray[currentQuestionIndex][i];
    }
  } else {
    resultsElement.hidden = false;
    scoreElement.innerHTML = `Your score: ${score} / ${questions.length}`;
    retryButton.innerHTML = "Retry";
    questionElement.innerHTML = "";
    choicesElement.hidden = true;
  }
}

function reset() {
  score = 0;
  currentQuestionIndex = 0;
  choicesElement.hidden = false;
  resultsElement.hidden = true;
  scoreElement.innerHTML = "";
  displayQuestion();
}

resultsElement.hidden = true;
displayQuestion();
