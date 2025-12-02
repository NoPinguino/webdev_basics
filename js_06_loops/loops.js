// A loop has two parts:
// HEAD (condition check) -> BODY (instructions)
// In do-while the BODY runs first, then the HEAD is checked.
//
// There are a bunch of type of loops in JS:
// Main types:
// - while
// - do-while
// - for
// - for in
// - for of
// - forEach

// WHILE:
let cont = 5;
let countdown = [];
while (cont >= 1) {
  countdown.push(cont);
  cont--;
}
//console.log("Countdown: " + countdown);

// DO-WHILE:
let nums = [];
let num = 0;
do {
  nums.push(num);
  num++;
} while (nums.length < 10);

// FOR:
for (let i = 0; i < nums.length; i++) {
  if (i % 2 == 0 && i > 5) {
    //console.log("Number: " + nums[i]);
  }
}
const cities = ["Madrid", "Barcelona", "Vigo", "Zaragonza", "Sevilla"];
let cities2 = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] == "Barcelona") {
    continue; // Skips Barcelona
  }
  cities2.push(cities[i]);
}

// FOR OF (not objects):
for (const city of cities) {
  if (city == "Barcelona") cities2.push(city);
}

// FOR IN (objects):
const menu = {
  pasta: 10.9,
  steak: 14.95,
  salad: 8.45,
  cheesecake: 4.9,
};
for (const meal in menu) {
  if (menu[meal] > 10) {
    //console.log(`${meal} is expensive,`);
  } else {
    //console.log(`${meal} is cheap.`);
  }
}

// FOR EACH:
// forEach is actually an iterable function, like map (we saw that on last section, arrays)
let visitedCities = ["Madrid", "Barcelona", "Sevilla"];
cities.forEach(function (city) {
  if (!visitedCities.includes(city)) console.log(`You should visit ${city}`);
});

// Filter iterable, similar to map or forEach:
// Filter lets you create a new list with an iterable.
const cars = [
  ["Toyota", 8500],
  ["Honda", 9200],
  ["Ford", 7600],
  ["BMW", 15000],
  ["Kia", 6800],
  ["Mercedes", 18000],
  ["Hyundai", 7200],
  ["Volkswagen", 9400],
];
let cheapCars = cars.filter(function (car) {
  return car[1] < 10000;
});

/*
- forEach: iterable function, doesn't creat a new Array.
- filter: creates a new Array with the elements returned.
- map: modifies each elements and returns a new Array.
*/
