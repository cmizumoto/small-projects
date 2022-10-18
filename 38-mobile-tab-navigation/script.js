/* 
    Variables and selectors
*/
const contents = document.querySelectorAll(".content");
const navigation = document.querySelectorAll(".navigation ul li");

/* 
    Functions
*/
const removeClassContent = () => {
  contents.forEach((content) => {
    content.classList.remove("show");
  });
};
const removeClassIcon = () => {
  navigation.forEach((item) => {
    item.classList.remove("active");
  });
};

const changePage = (index) => {
  removeClassContent();
  removeClassIcon();
  contents[index].classList.add("show");
  navigation[index].classList.add("active");
};

/* 
    Event listeners
*/
navigation.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    changePage(index);
  });
});
