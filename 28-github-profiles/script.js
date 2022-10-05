/* 
    Selectors and variables
*/
const API_URL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

/* 
    Functions
*/
const getUser = async (username) => {
  const response = await fetch(API_URL + username);
  const responseData = await response.json();
  createUserCard(responseData);
  getRepositories(username);
  if (!response.ok) {
    createErrorCard("No profile with this username, try another one");
  }
};

const getRepositories = async (username) => {
  const response = await fetch(API_URL + username + "/repos?sort=created");
  const responseData = await response.json();

  addReposToCard(responseData);

  if (!response.ok) {
    createErrorCard("Problem fetching repositories");
  }
};

const createErrorCard = (message) => {
  const cardHTML = `
    <div class="card">
        <h2>${message}</h2>
    </div>
    `;

  main.innerHTML = cardHTML;
};

const addReposToCard = (repos) => {
  const reposEl = document.getElementById("repositories");
  repos.slice(0, 5).forEach((repo) => {
    const repoLink = document.createElement("a");
    repoLink.classList.add("repository");
    repoLink.href = repo.html_url;
    repoLink.target = "_blank";
    repoLink.innerText = repo.name;

    reposEl.appendChild(repoLink);
  });
};

const createUserCard = (user) => {
  const cardHTML = `
    <div class="card">
        <div>
          <img src="${user.avatar_url}" alt="${user.name}" class="avatar" />
        </div>
        <div class="user-info">
          <h2>${user.name}</h2>
          <p>${user.bio === null ? "This user has no bio written" : user.bio}</p>
          <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repositories</strong></li>
          </ul>

          <div id="repositories">
          </div>
        </div>
      </div>
    `;

  main.innerHTML = cardHTML;
};

/* 
    Event listeners
*/
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});
