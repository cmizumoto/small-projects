/* 
    Selectors and variables
*/
const images = document.querySelectorAll("#images img");
const imageContainer = document.getElementById("images");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const dotsContainer = document.querySelector(".dots");

const imagesLength = images.length;

let imageIndex = 0;

/* 
  Timmer to keep the gallery looping
*/
const run = () => {
  imageIndex++;
  if (imageIndex >= imagesLength - 1) {
    imageIndex = 0;
  }
  changeDot(imageIndex);
  changeImage();
  buttonCheck();
};

let interval = setInterval(run, 3000);

const resetInterval = () => {
  clearInterval(interval);
  interval = setInterval(run, 3000);
};

/* 
    Functions
*/
const changeImage = () => {
  imageContainer.style.transform = `translateX(${imageIndex * -500}px)`;
};

// This function is not needed, and doesn't make sense in this project, but I added for practice and to have this functionality written somewhere
const buttonCheck = () => {
  if (imageIndex === 0) {
    leftButton.disabled = true;
    leftButton.style.cursor = "not-allowed";
  } else {
    leftButton.disabled = false;
    leftButton.style.cursor = "pointer";
  }

  if (imageIndex >= imagesLength - 1) {
    rightButton.disabled = true;
    rightButton.style.cursor = "not-allowed";
  } else {
    rightButton.disabled = false;
    rightButton.style.cursor = "pointer";
  }
};

/* 
  Dots functions
*/
const createDots = () => {
  for (let i = 0; i < imagesLength; i++) {
    const dot = document.createElement("button");
    dot.classList.add("dot");
    dot.id = i;
    dot.innerHTML = "&#8226;";

    dot.addEventListener("click", (event) => {
      changeDot(+event.target.id);
    });

    dotsContainer.appendChild(dot);
    dotsContainer.firstChild.classList.add("active");
  }
};

const changeDot = (event) => {
  removeDotClass();

  dotsContainer.childNodes[event].classList.add("active");
  imageIndex = event;

  buttonCheck();
  changeImage();
};

const removeDotClass = () => {
  dotsContainer.childNodes.forEach((dot) => {
    dot.classList.remove("active");
  });
};

createDots();

/* 
    Eventlisteners
*/
leftButton.addEventListener("click", () => {
  imageIndex--;
  if (imageIndex === 0) {
    imageIndex = 0;
  }
  changeDot(imageIndex);
  changeImage();
  buttonCheck();
  resetInterval();
});

rightButton.addEventListener("click", () => {
  imageIndex++;
  if (imageIndex > imagesLength) {
    imageIndex = imagesLength;
  }
  changeDot(imageIndex);
  changeImage();
  buttonCheck();
  resetInterval();
});

buttonCheck();
