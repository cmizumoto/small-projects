const tagsElement = document.getElementById("tags");
const textareaElement = document.getElementById("textarea");

const createTags = (input) => {
  // here we create the tags, avoiding empty tags and whitespaces in them
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsElement.innerHTML = "";

  tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.classList.add("tag");
    tagElement.innerText = tag;
    tagsElement.appendChild(tagElement);
  });
};

const highlightTag = (tag) => {
  tag.classList.add("highlight");
};
const removeHighlightTag = (tag) => {
  tag.classList.remove("highlight");
};

const pickRandomTag = () => {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
};

const randomSelect = () => {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);

    setTimeout(() => {
      removeHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
};

textareaElement.focus();

textareaElement.addEventListener("keyup", (event) => {
  createTags(event.target.value);

  if (event.key === "Enter") {
    setTimeout(() => {
      event.target.value = "";
    }, 10);
    randomSelect();
  }
});
