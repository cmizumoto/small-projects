/* 
    Selectors
*/
const toggles = document.querySelectorAll(".toggle");
const money = document.querySelector("#money");
const energy = document.querySelector("#energy");
const time = document.querySelector("#time");

/* 
    Function
*/
const changeToggles = (clickedElement) => {
  if (money.checked && energy.checked && time.checked) {
    if (money === clickedElement) {
      time.checked = false;
    }
    if (energy === clickedElement) {
      money.checked = false;
    }
    if (time === clickedElement) {
      energy.checked = false;
    }
  }
};

/* 
    Event listeners
*/
toggles.forEach((toggle) => {
  toggle.addEventListener("change", (event) => {
    changeToggles(event.target);
  });
});
