/* 
    Variables and selectors
*/
const range = document.getElementById("range");

/* 
    Event listeners
*/
range.addEventListener("input", (event) => {
  const value = +event.target.value;
  const label = event.target.nextElementSibling;
  const root = document.documentElement;

  //   Get the css properties of the Range and Label
  const rangeWidth = getComputedStyle(event.target).getPropertyValue("width");
  const labelWidth = getComputedStyle(label).getPropertyValue("width");
  const thumbWidth = getComputedStyle(root).getPropertyValue("--thumb-width");

  //   Removing the pixel in the string
  const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
  const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2);
  const numThumbWidth = +thumbWidth.substring(0, thumbWidth.length - 2);

  //   Getting the minimum and maximum range values
  const max = +event.target.max;

  const left = value * ((numWidth - numThumbWidth) / max) - (numLabelWidth - numThumbWidth) / 2;

  console.log(left);

  label.style.left = `${left}px`;

  label.innerHTML = value;
});
