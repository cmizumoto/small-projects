/* 
    Selectors and variables
*/
const steps = document.querySelectorAll(".steps span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.getElementById("replay");

/* 
    Function
*/
const runAnimation = () => {
  steps.forEach((step, index) => {
    const finalStep = steps.length - 1;

    step.addEventListener("animationend", (event) => {
      if (event.animationName === "inActive" && index !== finalStep) {
        step.classList.remove("in");
        step.classList.add("out");
      } else if (event.animationName === "outActive" && step.nextElementSibling) {
        step.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
};

const resetDOM = () => {
  counter.classList.remove("hide");
  finalMessage.classList.remove("show");

  steps.forEach((step) => {
    step.classList.value = "";
  });

  steps[0].classList.add("in");
};

/* 
    Event Listener
*/
replay.addEventListener("click", () => {
  resetDOM();
  runAnimation;
});

runAnimation();
