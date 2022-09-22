const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    // Could use Number or ParseInt, but "+"" in front works too
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    // Value to increment and reach the maximum value
    const increment = target / 50;

    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;

      setTimeout(updateCounter);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
