let currentQuestionId = 1;
let score = 0;
let selectedAnswer = "";
let nextCount = 0;
let skipCount = 0;

function fetchQuestion(id) {
  fetch(`backend/get_question.php?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.message) {
        alert("Quiz Completed! Your Score: " + score);
      } else {
        document.getElementById("number").innerText = data.id;
        document.getElementById("question").innerText = data.question;
        document.getElementById("option_a").innerText = data.option_a;
        document.getElementById("option_b").innerText = data.option_b;
        document.getElementById("option_c").innerText = data.option_c;
        document.getElementById("option_d").innerText = data.option_d;
      }
    });
}

function selectOption(selectedOption) {
  fetch("backend/submit_answer.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `id=${currentQuestionId}&answer=${selectedOption}`,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.correct) score += 1;
      else score -= 0.33;
    });
  document.querySelectorAll(".answers").forEach((button) => {
    button.classList.remove("selected-answer");
  });

  selectedAnswer = selectedOption;
  const selectedButton = document.getElementById(
    `option_${selectedOption.toLowerCase()}`
  );
  selectedButton.classList.add("selected-answer");
}

function nextQuestion() {
  currentQuestionId += 1;
  fetchQuestion(currentQuestionId);
  document.querySelectorAll(".answers").forEach((button) => {
    button.classList.remove("selected-answer");
  });
}

function skipQuestion() {
  currentQuestionId += 1;
  fetchQuestion(currentQuestionId);
  document.querySelectorAll(".answers").forEach((button) => {
    button.classList.remove("selected-answer");
  });
}

function goToQuestion(questionNumber) {

  fetchQuestion(questionNumber);

  const questionItems = document.querySelectorAll(".questions-list li");
  questionItems.forEach((item) => {
    item.classList.remove("active"); 
  });


  questionItems[questionNumber - 1].classList.add("active");
    document.querySelectorAll(".answers").forEach((button) => {
      button.classList.remove("selected-answer");
    });
}

window.onload = () => fetchQuestion(currentQuestionId);
