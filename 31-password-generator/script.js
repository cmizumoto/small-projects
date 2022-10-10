/* 
    Selectors and Variables
*/
const resultElement = document.getElementById("result");
const clipboardButton = document.getElementById("clipboard");
const lengthElement = document.getElementById("length");
const lowercaseElement = document.getElementById("lowercase");
const uppercaseElement = document.getElementById("uppercase");
const numbersElement = document.getElementById("numbers");
const symbolsElement = document.getElementById("symbols");
const generateElement = document.getElementById("generate");

/* 
    Functions
*/
// The numbers added to the random corresponds to the ASCII table
// https://www.rapidtables.com/code/text/ascii-table.html
const getRandomLower = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomUpper = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getRandomNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const getRandomSymbol = () => {
  // We could get them from the ASCII table, but is way faster just getting them from a string
  const symbols = "!@#$%^&*(){}[]=<>/.,";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

// object to access these functions
const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

const generatePassword = (lower, upper, number, symbol, length) => {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  //   Here we create an array to store the option and if it is checked or not
  //   after that, we only store the options that are true
  //   This sintax is kinda weird, but we are drilling into the object to see the value and if it is true
  // {number:true} > [true] > true
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  console.log(typesArr);

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const functionTypes = Object.keys(type)[0];
      generatedPassword += randomFunction[functionTypes]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
};

/* 
    Event listeners
*/
generateElement.addEventListener("click", () => {
  // + sign to convert to a number
  const length = +lengthElement.value;
  const hasLower = lowercaseElement.checked;
  const hasUpper = uppercaseElement.checked;
  const hasNumber = numbersElement.checked;
  const hasSymbol = symbolsElement.checked;

  resultElement.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

clipboardButton.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultElement.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("password copied to clipboard");
});
