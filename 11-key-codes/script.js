const key = document.getElementById("key");
const keyCode = document.getElementById("key-code");
const code = document.getElementById("code");

// We could use Template Literals to insert all the values, but doing HTML programmatically is not a good approach

window.addEventListener("keydown", (event) => {
  console.log(event);
  key.innerText = event.key;

  if (event.key === " ") {
    key.innerText = "space";
  }
  //   keyCode is deprecated but I'm using for this exercise purpose (:
  keyCode.innerText = event.keyCode;
  code.innerText = event.code;
});
