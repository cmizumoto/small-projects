/* 
    API stuff
*/
// put your API key here
const API = "";
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + API + "&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=" + API + '&query="';

/* 
    DOM stuff
*/
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

/* 
    Display Movies
*/
const getClassByRate = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
};

const showMovies = (movies) => {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}" />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          <p>
            ${overview}
          </p>
        </div>
    `;

    main.appendChild(movieEl);
  });
};

/* 
    Get movies list
*/
const getMovies = async (url) => {
  const response = await fetch(url);
  const responseData = await response.json();

  showMovies(responseData.results);
};

getMovies(API_URL);

/* 
    Search bar
*/
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchQuery = search.value;

  if (searchQuery && searchQuery !== "") {
    getMovies(SEARCH_URL + searchQuery);

    search.value = "";
  } else {
    window.location.reload();
  }
});
