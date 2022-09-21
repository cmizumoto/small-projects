const faqBoxes = document.querySelectorAll(".faq");

faqBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.toggle("active");
  });
});
