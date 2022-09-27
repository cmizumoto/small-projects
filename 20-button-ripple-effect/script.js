/* 
    Selectors
*/
const buttons = document.querySelectorAll(".ripple");

/* 
    Button effect
*/
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    const x = event.clientX;
    const y = event.clientY;

    const buttonTop = event.target.offsetTop;
    const buttonLeft = event.target.offsetLeft;

    const buttonX = x - buttonLeft;
    const buttonY = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = buttonY + "px";
    circle.style.left = buttonX + "px";

    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 500);
  });
});
