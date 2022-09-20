const jokeElement = document.getElementById("joke");
const jokeButton = document.getElementById("joke-btn");

const generateJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const responseData = await response.json();

  jokeElement.innerHTML = responseData.joke;
};

jokeButton.addEventListener("click", generateJoke);

generateJoke();
