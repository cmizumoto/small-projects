/* 
    Selectors and variables
*/
const addButton = document.getElementById("add");

/* 
    Event Listeners
*/
addButton.addEventListener("click", () => addNewNote());

/* 
    Functions
*/
// Since I'm not using a complex database or working with IDs, these functions will handle the creation and deletion of the items
const addNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
        <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
      </div>

      <div class="main ${text ? "" : "hidden"}"></div>
      <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

  const editButton = note.querySelector(".edit");
  const deleteButton = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = text;
  main.innerHTML = marked.parse(text);

  deleteButton.addEventListener("click", () => {
    note.remove();
    updateLocalStorage();
  });

  editButton.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (event) => {
    const { value } = event.target;

    main.innerHTML = marked.parse(value);
    updateLocalStorage();
  });

  document.body.appendChild(note);
};

/* 
    Local Storage Functions
*/
// Grabbing notes from the local storage
const notes = JSON.parse(localStorage.getItem("notes"));
// Display the note if there is any stored
if (notes) {
  notes.forEach((note) => {
    addNewNote(note);
  });
}

const updateLocalStorage = () => {
  const notesText = document.querySelectorAll("textarea");
  const notes = [];

  notesText.forEach((note) => {
    notes.push(note.value);
  });

  localStorage.setItem("notes", JSON.stringify(notes));
};
