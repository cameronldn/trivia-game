const question = "What planet is known as the 'Red Planet'";
const choices = ["Earth", "Mars", "Jupiter", "Saturn"];
const correctAnswer = "Mars";

function checkAnswer(button) {

}

function displayQuestion() {
  let question_element = document.getElementById("question");
  question_element.innerHTML = question;
}

displayQuestion();