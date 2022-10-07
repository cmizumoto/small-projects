/* 
    Selectors and stores
*/
const image = document.querySelector(".image");
const times = document.querySelector("#times");

const images = [
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
];

/* 
    Event listener
    dbclick exists, but reinventing the wheel for fun
*/
// It does work, but will overlap the timeouts and behave strangely
/* 

let clickTimes = 0;
image.addEventListener("click", (event) => {
    clickTimes++;
    if (clickTimes === 2) {
        console.log("double click");
        clickTimes = 0;
    }
    setTimeout(() => {
        clickTimes = 0;
    }, 300);
});

*/

// Kinda better than the last one using setTimeout, but we get into 2 ifs
let clickTime = 0;
image.addEventListener("click", (event) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 200) {
      createLike(event);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

let timesClicked = 0;

const createLike = (event) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");
  const posX = event.clientX;
  const posY = event.clientY;

  const leftOffset = event.target.offsetLeft;
  const topOffset = event.target.offsetTop;

  const insideX = posX - leftOffset;
  const insideY = posY - topOffset;

  heart.style.top = insideY + "px";
  heart.style.left = insideX + "px";

  image.appendChild(heart);

  times.innerHTML = ++timesClicked;

  setTimeout(() => {
    heart.remove();
  }, 500);
};
