/* 
    Variables and Selectors
*/
const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random";
const rows = 10;

/* 
    Functions
*/
const getRandomValue = () => {
  return Math.floor(Math.random() * 10) + 300;
};

/* 
    Loop and populate the dom with images corresponding to rows times three
*/
for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${unsplashURL}/${getRandomValue()}x${getRandomValue()}`;
  container.appendChild(img);
}
