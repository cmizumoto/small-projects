/*  API being used https://randomuser.me/ */
/* 
    Variables and selectors
*/
const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

/* 
    Functions
*/
const getData = async () => {
  const response = await fetch("https://randomuser.me/api?results=50");
  const { results } = await response.json();

  //   Clear Results
  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");

    listItems.push(li);

    li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
    `;

    result.appendChild(li);
  });
};

/* 
    We could add and remove items from the array and display them accordinly
    but I'm trying this approach of hiding and showing the content
*/
const filterData = (searchTerm) => {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
};

/* 
    Event listeners
*/
filter.addEventListener("input", (event) => filterData(event.target.value));

getData();
