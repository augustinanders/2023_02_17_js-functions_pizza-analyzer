console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
  let diameter1 = pizzaInput1.value;
  let diameter2 = pizzaInput2.value;
  calculatePizzaGain(diameter1, diameter2);
  updatePizzaDisplay(pizza1, pizzaInput1.value);
});
pizzaInput2.addEventListener("input", () => {
  // write your code here
  let diameter1 = pizzaInput1.value;
  let diameter2 = pizzaInput2.value;
  calculatePizzaGain(diameter1, diameter2);
  updatePizzaDisplay(pizza2, pizzaInput2.value);
});

// Task 1

function calculatePizzaGain(diameter1, diameter2) {
  // write your code here
  const area1 = Math.PI * (diameter1 / 2) ** 2;
  const area2 = Math.PI * (diameter2 / 2) ** 2;
  const pizzaGain = ((area2 - area1) / area1) * 100;
  output.textContent = Math.round(pizzaGain);
  updateOutputColor(pizzaGain);
}
// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  // write your code here
  const newDiameter = (newSize / 24) * 100;
  pizzaElement.style.width = newDiameter + "px";
}

// Task 3

function updateOutputColor(value) {
  // write your code here
  if (value > 0) {
    outputSection.style.backgroundColor = "green";
  } else {
    outputSection.style.backgroundColor = "red";
  }
}
