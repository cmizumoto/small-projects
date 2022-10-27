/* 
    Variables and selectors
*/
const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUl = document.getElementById("todos");

/* 
    Functions
*/
/* It is a bad practice to put a function to do multiple things, but in this case I think it's the best idea to keep track of which element the user is interacting to */
const todosFunctionality = (todo) => {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoElement = document.createElement("li");
    if (todo && todo.completed) {
      todoElement.classList.add("completed");
    }

    todoElement.innerText = todoText;

    todoElement.addEventListener("click", () => {
      todoElement.classList.toggle("completed");
      updateLocalStorage();
    });

    todoElement.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      todoElement.remove();
      updateLocalStorage();
    });

    todosUl.append(todoElement);

    input.value = "";

    updateLocalStorage();
  }
};

const updateLocalStorage = () => {
  const todosElements = document.querySelectorAll("li");
  const todos = [];

  todosElements.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
};

/* 
    Event listener
*/
form.addEventListener("submit", (event) => {
  event.preventDefault();

  todosFunctionality();
});

/* Local Storage */
const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => todosFunctionality(todo));
}
