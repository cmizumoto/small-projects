const labels = document.querySelectorAll(".form-control label");
// here we select the labels
// each label we split the letters into an array
// we add the span tags
// and join everything together
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map((letter, index) => {
      return `<span style="transition-delay: ${index * 50}ms">${letter}</span>`;
    })
    .join("");
});
