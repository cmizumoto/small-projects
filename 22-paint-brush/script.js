/* 
    Selectors
*/
const canvas = document.getElementById("canvas");
const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");
const sizeElement = document.getElementById("size");
const colorElement = document.getElementById("color");
const clearCanvas = document.getElementById("clear");

const ctx = canvas.getContext("2d");

/* 
    Canvas functions
*/
let size = 10;
let color = "black";
let isPressed = false;
let x;
let y;

canvas.addEventListener("mousedown", (event) => {
  isPressed = true;

  x = event.offsetX;
  y = event.offsetY;
});

canvas.addEventListener("mouseup", () => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (event) => {
  if (isPressed) {
    const x2 = event.offsetX;
    const y2 = event.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

/* 
    Tools function
*/
const updateSizeDOM = () => {
  sizeElement.innerText = size;
};

colorElement.addEventListener("change", (event) => {
  return (color = event.target.value);
});

decreaseButton.addEventListener("click", () => {
  size -= 5;
  if (size <= 1) {
    size = 1;
  }
  updateSizeDOM();
});

increaseButton.addEventListener("click", () => {
  size += 5;
  if (size >= 50) {
    size = 50;
  }
  updateSizeDOM();
});

clearCanvas.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
