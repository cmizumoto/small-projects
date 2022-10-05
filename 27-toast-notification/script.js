/* 
    Selectors
*/
const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

// Toast Messages
const messages = ["Message 1", "Message 2", "Message 3", "Message 4", "Message 5"];
const types = ["danger", "warning", "success", "hello"];

/* 
    Event listeners
*/
button.addEventListener("click", () => createNotification(randomMessage(), randomType()));

/* 
    Functions
*/
const createNotification = (message, type) => {
  const toastElement = document.createElement("div");
  toastElement.classList.add("toast");
  toastElement.classList.add(type);
  toastElement.innerText = message;

  //   Put ternary in case we want to have a default value in the toast
  //   toastElement.classList.add(type ? type: randomType());
  //   toastElement.innerText = message ? message : randomMessage();

  toasts.appendChild(toastElement);

  setTimeout(() => {
    toastElement.remove();
  }, 3000);
};

const randomMessage = () => {
  const randomValue = Math.floor(Math.random() * messages.length);
  const messageText = messages[randomValue];
  return messageText;
};
const randomType = () => {
  const randomValue = Math.floor(Math.random() * types.length);
  const messageType = types[randomValue];
  return messageType;
};
