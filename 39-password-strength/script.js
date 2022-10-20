/* 
    Variables and selectors
*/
const background = document.getElementById("background");
const password = document.getElementById("password");
const strengthText = document.getElementById("strength-text");
const popup = document.getElementById("popup");
let symbol = false;

/* 
    Functions
*/
const passwordLength = () => {
  let blurValue = 20;
  blurValue -= password.value.length;
  if (blurValue < 0) {
    blurValue = 0;
  }
  background.style.filter = `blur(${blurValue}px)`;
};

const passwordSymbols = (password) => {
  const regex = /[^\p{L}\d\s@#]/u;
  symbol = false;
  popup.classList.remove("active");
  if (regex.test(password) && symbol === false) {
    symbol = true;
    popup.classList.add("active");
    strengthText.innerText = "Nice! Contains a symbol!";
  }
};

/* 
    Event listeners
*/
password.addEventListener("input", (event) => {
  const pass = event.target.value;
  passwordLength();
  passwordSymbols(pass);
});
