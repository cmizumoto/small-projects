/* 
    Selectors
*/
const screens = document.querySelectorAll(".screen");
const chooseInsectButton = document.querySelectorAll(".choose-insects-btn");
const startButton = document.getElementById("start-button");
const gameContainer = document.getElementById("game-container");
const timeElement = document.getElementById("time");
const scoreElement = document.getElementById("score");
const messageElement = document.getElementById("message");

/* 
    Variables
*/
let seconds = 0;
let score = 0;
let selectedInsect = {};

/* 
    Functions
*/
const getRandomLocation = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;

  return { x, y };
};

const increaseTime = () => {
  let second = seconds % 60;
  let minute = Math.floor(seconds / 60);
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;
  timeElement.innerHTML = `Time: ${minute}:${second}`;
  seconds++;
};

const startGame = () => {
  setInterval(increaseTime, 1000);
};

const increaseScore = () => {
  score++;
  if (score > 19) {
    messageElement.classList.add("visible");
  }

  scoreElement.innerHTML = `Score: ${score}`;
};

const addInsects = () => {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
};

/* 
  Using function declaration because of this, also makes it easier to work with in this case.
*/
const catchInsect = function () {
  increaseScore();
  this.classList.add("caught");
  setTimeout(() => this.remove(), 2000);
  addInsects();
};

const createInsect = () => {
  const insect = document.createElement("div");
  insect.classList.add("insect");

  const { x, y } = getRandomLocation();

  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;

  insect.innerHTML = `<img src="${selectedInsect.src}" alt="${
    selectedInsect.alt
  }" style="transform: rotate(${Math.random() * 360}deg)">`;

  insect.addEventListener("click", catchInsect);

  gameContainer.appendChild(insect);
};

/* 
    Event Listeners
*/
startButton.addEventListener("click", () => screens[0].classList.add("up"));

chooseInsectButton.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");

    selectedInsect = { src, alt };

    screens[1].classList.add("up");

    setTimeout(createInsect, 1000);

    startGame();
  });
});
