const question = "What planet is known as the 'Red Planet'";
const choices = ["Earth", "Mars", "Jupiter", "Saturn"];
const correctAnswer = "Mars";

function checkAnswer(button) {
  if (button.value === correctAnswer) {
    document.getElementById("result").innerHTML = "Correct!";
  } else {
    document.getElementById("result").innerHTML = "Wrong!";
  }
  for (let i = 0; i < choices.length; i++) {
    document.getElementById(`choice${i + 1}`).disabled = true;
  }
}

function displayQuestion() {
  let question_element = document.getElementById("question");
  question_element.innerHTML = question;
  for (let i = 0; i < choices.length; i++) {
    const btn = document.getElementById(`choice${i + 1}`);
    btn.innerHTML = choices[i];
    btn.value = choices[i];
  }
}

displayQuestion();
