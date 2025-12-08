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
  const updateCounter = () => {
    inpCounter.value = counter;
    // When toggle a class use ("class-name", condition)
    inpCounter.classList.toggle("text-red-500", counter < 0);
  };

  btnIncrease.addEventListener("click", () => {
    counter++;
    updateCounter();
  });
  btnDecrease.addEventListener("click", () => {
    counter--;
    updateCounter();
  });

  const btnChangeText = document.getElementById("btnChangeText");
  const inpChangeText = document.getElementById("inpChangeText");
  const paragraphChangeText = document.getElementById("paragraphChangeText");
  btnChangeText.addEventListener("click", () => {
    paragraphChangeText.textContent = inpChangeText.value;
    inpChangeText.value = "";
  });
});
