/* 
    Quiz Object
*/
const quizData = [
  {
    question: "What country has the highest life expectancy?",
    a: "Hong Kong",
    b: "Australia",
    c: "England",
    d: "United States of America",
    correct: "a",
  },
  {
    question: "What is the most common surname in the United States?",
    a: "Edson",
    b: "Howard",
    c: "Smith",
    d: "Tompson",
    correct: "c",
  },
  {
    question: "Aureolin is a shade of what color?",
    a: "Red",
    b: "Yellow",
    c: "Blue",
    d: "Green",
    correct: "b",
  },
  {
    question: 'What city is known as "The Eternal City"?',
    a: "Istambul",
    b: "London",
    c: "Bangkok",
    d: "Rome",
    correct: "d",
  },
  {
    question: "How many bones do we have in an ear?",
    a: "3",
    b: "0",
    c: "9",
    d: "5",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerElement = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const dText = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

/* 
    Function
*/
const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;

  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;
};

const deselectAnswers = () => {
  answerElement.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElement.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
};

/* 
    Event Listeners
*/
submitButton.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
            <h2>You scored: ${score} points out of ${quizData.length}</h2>
            <button onclick="location.reload()">Try again?</button>
        `;
    }
  }
});

loadQuiz();
