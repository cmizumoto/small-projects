/* 
    Variables and selectors
*/
const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendButton = document.getElementById("send");
const panel = document.getElementById("panel");
let selectedRating = "Satisfired";

/* 
    Functions
*/
const removeActive = () => {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
};

/* 
    Event Listeners
*/
// Instead looping through all the elements and adding eventListeners, we check which element was clicked, and add the class based on its parentnode
// So if the small or img is clicked, we go to the parent of this element and check if has the rating class
ratingsContainer.addEventListener("click", (event) => {
  if (event.target.parentNode.classList.contains("rating")) {
    removeActive();
    event.target.parentNode.classList.add("active");
    selectedRating = event.target.nextElementSibling.innerHTML;
  }
  if (event.target.classList.contains("rating")) {
    removeActive();
    event.target.classList.add("active");
    selectedRating = event.target.children[1].innerHTML;
  }
});

sendButton.addEventListener("click", () => {
  panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <p><strong>Thank you!</strong></p>
        <br>
        <p><strong>Feedback: ${selectedRating}</strong></p>
        <p>We will use your feedback to improve our customer support</p>
    `;
});
