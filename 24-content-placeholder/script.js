/*
    Selectors
 */
const header = document.getElementById("header");
const title = document.getElementById("title");
const cardText = document.getElementById("card-text");
const profile = document.getElementById("profile-img");
const nameElement = document.getElementById("name");
const date = document.getElementById("date");

const animatedBackgrounds = document.querySelectorAll(".animated-bg");
const animatedBackgroundsText = document.querySelectorAll(".animated-bg-text");

/* 
    Functions
*/
// We are emulating a fetch request so we can see the placeholder effect
const getData = () => {
  header.innerHTML = `<img src="cookie-the-pom-gySMaocSdqs-unsplash.jpg" alt="" />`;
  title.innerHTML = "Lorem ipsum dolor sit amet.";
  cardText.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dolores!";
  profile.innerHTML = `<img src="charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg" alt="" />`;
  nameElement.innerHTML = "John Boi";
  date.innerHTML = "30 Sep, 2022";

  animatedBackgrounds.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  animatedBackgroundsText.forEach((bg) => {
    bg.classList.remove("animated-bg-text");
  });
};

// Set 2.5 seconds and then display the info
setTimeout(getData, 2500);
