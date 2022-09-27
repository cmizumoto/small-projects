const body = document.body;
const images = document.querySelectorAll(".image");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

let activeImage = 0;

/* 
    Setting background images
*/
const setBackgroundToBody = () => {
  body.style.backgroundImage = images[activeImage].style.backgroundImage;
};

setBackgroundToBody();

const setActiveImage = () => {
  images.forEach((image) => {
    image.classList.remove("active");
  });

  images[activeImage].classList.add("active");
};

/* 
    Arrows Logic
*/
const moveRight = () => {
  activeImage++;
  if (activeImage > images.length - 1) {
    activeImage = 0;
  }
  setBackgroundToBody();
  setActiveImage();
};

const moveLeft = () => {
  activeImage--;
  if (activeImage < 0) {
    activeImage = images.length - 1;
  }
  setBackgroundToBody();
  setActiveImage();
};
// For the buttons in the DOM
rightButton.addEventListener("click", moveRight);
leftButton.addEventListener("click", moveLeft);

// For the keyboard events
document.onkeyup = (event) => {
  if (event.key === "ArrowRight") {
    moveRight();
  }
  if (event.key === "ArrowLeft") {
    moveLeft();
  }
};
