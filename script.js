let questions = [
  {
  question: "Was ist die Hauptstadt von Spanien?",
  answers: ["Berlin", "Madrid", "Paris", "Rom"],
  correctAnswer: "Madrid"
  },
  {
  question: "Welcher Fluss fließt durch London?",
  answers: ["Seine", "Themse", "Donau", "Nil"],
  correctAnswer: "Themse"
  },
  {
  question: "Wie viele Kontinente gibt es?",
  answers: ["5", "6", "7", "8"],
  correctAnswer: "7"
  },
  {
  question: "Was ist die größte Insel der Welt?",
  answers: ["Grönland", "Australien", "Madagaskar", "Neuguinea"],
  correctAnswer: "Grönland"
  },
  {
  question: "Welches Element hat das chemische Symbol 'H'?",
  answers: ["Helium", "Hydrogen", "Stickstoff", "Sauerstoff"],
  correctAnswer: "Hydrogen"
  }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function renderQuestion() {
  let question = questions[currentQuestion];
  let questionElement = document.querySelector(".question h2");
  questionElement.textContent = question.question;
  let answerList = document.querySelector(".answer-list");
  answerList.innerHTML = "";
  question.answers.forEach(answer => {
  let answerItem = document.createElement("li");
  answerItem.classList.add("answer");
  answerItem.textContent = answer;
  answerList.appendChild(answerItem);
  });
  let resultContainer = document.querySelector(".result-container");
  resultContainer.innerHTML = "Du hast " + score + " von " + questions.length + " Fragen richtig beantwortet. ";
  }
  
  function displayResult() {
  let resultContainer = document.createElement("div");
  resultContainer.classList.add("result-container");
  let resultImage = document.createElement("img");
  resultImage.classList.add("result-image");
  if (score === questions.length) {
  resultImage.src = "winner.jpg";
  resultContainer.textContent = "";
  } else {
  resultImage.src = "try_again.jpg";
  resultContainer.textContent = "";
  }
  resultContainer.appendChild(resultImage);
  document.body.appendChild(resultContainer);
  
  let restartButton = document.querySelector(".restart-button");
  restartButton.style.display = 'block';
  
  restartButton.addEventListener("click", resetQuiz);
  }
  
  function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  renderQuestion();
  let resultContainer = document.querySelector(".result-container");
  resultContainer.innerHTML = "";
  resultContainer.style.display = 'block';
  document.querySelector(".restart-button").style.display = "none";
  let resultImage = document.querySelector(".result-image");
  resultImage.style.display = 'none';
  resultContainer.style.display = 'none';
  }
  
  document.querySelector(".restart-button").style.display = "none";
  
  document.querySelector(".restart-button").addEventListener("click", function() {
  let resultContainer = document.querySelector(".result-container");
  resultContainer.style.display = 'none';
  });
  
  document.querySelector(".result-container").innerHTML = "Du hast " + score + " von " + questions.length + " Fragen richtig beantwortet. ";
  
  document.querySelector(".answer-list").addEventListener("click", function(event) {
  if (event.target.classList.contains("answer")) {
  let selectedAnswer = event.target;
  let activeItems = document.querySelectorAll(".answer.active");
  activeItems.forEach(item => {
  item.classList.remove("active");
  });
  selectedAnswer.classList.add("active");
  }
  });
  
  document.querySelector(".submit-button").addEventListener("click", () => {
  let currentQuestionObject = questions[currentQuestion];
  let correctAnswer = currentQuestionObject.correctAnswer;
  let selectedAnswer = document.querySelector(".answer.active");
  if (selectedAnswer && selectedAnswer.textContent.trim() === correctAnswer) {
  score++;
  }
  
  currentQuestion++;
  if (currentQuestion < questions.length) {
  renderQuestion();
  } else {
  displayResult();
  document.querySelector(".restart-button").style.display = "block";
  }
  
  let resultContainer = document.querySelector(".result-container");
  resultContainer.innerHTML = "Du hast " + score + " von " + questions.length + " Fragen richtig beantwortet. ";
  });
  
  renderQuestion();
  