/*
"GOOD PRACTICES":
- Don't use "onClick" html statement >>> Use eventListener instead
- Don't attach your script at the end of the body >>> use eventListener("DOMContentLoaded", ...)
*/

// First exercise, counter input + buttons:
document.addEventListener("DOMContentLoaded", () => {
  const inpCounter = document.getElementById("inp-counter");
  let counter = 0;
  inpCounter.value = counter;

  const btnIncrease = document.getElementById("btn-increase");
  const btnDecrease = document.getElementById("btn-decrease");

  btnIncrease.addEventListener("click", () => {
    counter += 1;
    if (counter >= 0) inpCounter.classList.remove("text-red-500");
    inpCounter.value = counter;
  });
  btnDecrease.addEventListener("click", () => {
    counter -= 1;
    if (counter < 0) inpCounter.classList.add("text-red-500");
    inpCounter.value = counter;
  });
});
