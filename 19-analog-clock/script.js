/* 
    Selectors
*/
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const needleSecond = document.querySelector(".needle.second");
const needleMinute = document.querySelector(".needle.minute");
const needleHour = document.querySelector(".needle.hour");

/* 
    Dates
*/
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/* 
    Toggle dark and light mode
*/
toggle.addEventListener("click", (event) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    event.target.innerText = "Dark Mode";
  } else {
    html.classList.add("dark");
    event.target.innerText = "Light Mode";
  }
});

/* 
    Scale function helper
*/

/* 
    Time functions, get time and set time
*/
const setTime = () => {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();
  const hoursForClock = (hours % 12) + minutes / 60;
  const ampm = hours >= 12 ? "PM" : "AM";

  console.log();

  hourElement.style.transform = `translate(-50%, -100%) rotate(${(hoursForClock / 12) * 360}deg)`;
  minuteElement.style.transform = `translate(-50%, -100%) rotate(${(minutes / 60) * 360}deg)`;
  secondElement.style.transform = `translate(-50%, -100%) rotate(${(seconds / 60) * 360}deg)`;

  needleHour.style.transition = `${hours === 0 ? "none" : "all 0.5s ease-in"}`;
  needleMinute.style.transition = `${minutes === 0 ? "none" : "all 0.5s ease-in"}`;
  needleSecond.style.transition = `${seconds === 0 ? "none" : "all 0.5s ease-in"}`;

  timeElement.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
  dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${day}</span>`;
};

setTime();

/* 
    Set interval to keep the clock running
*/
setInterval(setTime, 1000);
