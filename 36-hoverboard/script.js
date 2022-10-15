/* 
    Selector and variables
*/
const container = document.getElementById("container");
const inputOptions = document.querySelectorAll(".color-option input");
const squares = 750;
const colors = [
  ["#338309", "#C9D46C", "#E48716", "#FAAB01", "#DFBCB2"],
  ["#583E26", "#A78B71", "#F7C815", "#EC9704", "#9C4A1A"],
  ["#469597", "#5BA199", "#BBC6C8", "#E5E3E4", "#DDBEAA"],
];

let selectedColor = 0;

for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

/* 
    Functions
*/

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[selectedColor][Math.floor(Math.random() * colors.length)];
}

/* 
    Event listeners
*/
inputOptions.forEach((input) => {
  input.addEventListener("click", (event) => {
    selectedColor = event.target.value;
  });
});
