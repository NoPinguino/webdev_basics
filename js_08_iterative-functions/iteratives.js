numbers = [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const squareNumbers = (numbers) => numbers.map((num) => Math.pow(num, 2));

const filterEvenNumbers = (numbers) => numbers.filter((num) => num % 2 !== 0);

// FILTER + ACCUMULATOR >>> numbers.filter(() => ...).reduce(() => ...)
const sumPositiveNumbers = (numbers) =>
  numbers.filter((num) => num > 0).reduce((acc, num) => acc + num, 0);

console.log(sumPositiveNumbers(numbers));

const people = [
  { name: "Ana", age: 25 },
  { name: "Luis", age: 30 },
  { name: "Carla", age: 22 },
  { name: "Miguel", age: 28 },
];

const getNames = (people) => people.map((person) => person.name);

console.log(getNames(people));

const palabras = [
  "nube",
  "faro",
  "cristal",
  "luna",
  "sendero",
  "puente",
  "abrazo",
  "tinta",
  "reloj",
  "viento",
];

console.log(`${palabras[2].length}`);

const findLongestWord = (palabras) =>
  palabras.reduce((maxLen, palabra) =>
    palabra.length > maxLen.length ? palabra : maxLen,
  );

console.log(findLongestWord(palabras));
