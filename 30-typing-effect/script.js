/* 
    Selectors and variables
*/
const textElement = document.getElementById("text");
const speedElement = document.getElementById("speed");
const text = "We love mexican food!";

let index = 1;
let speed = 300 / speedElement.value;

/* 
    Functions
*/
const writeText = () => {
  textElement.innerText = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 1;
  }

  setTimeout(writeText, speed);
};

/* 
    Event listeners
*/
speedElement.addEventListener("input", (event) => {
  speed = 300 / event.target.value;
});

writeText();
