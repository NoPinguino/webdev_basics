//Array creation:
let colors = ["Red", "Blue", "Green", "Black", "White"];
const fruits = new Array("Apple", "Pear", "Banana", "Peach", "Kiwi");
//Acces by index, count start in zero.
console.log(`First fruit: ${fruits[0]}`);
console.log(`We have ${fruits.length} fruits.`);
// Modify array:
if (!colors.includes("Purple")) {
  colors.push("Purple"); // Add element at the end
  console.log("Purple added.");
  console.log(colors);
}
if (colors.includes("Purple")) {
  let deleted = colors.pop(); // Removes last element and returns it.
  console.log(`${deleted} has been deleted.`);
  console.log(colors);
}
if (!colors.includes("Orange")) {
  colors.unshift("Orange"); // Add element at the start
  console.log("Orange added.");
  console.log(colors);
}
if (colors.includes("Orange")) {
  let deleted = colors.shift(); // Removes first element and returns it.
  console.log(`${deleted} has been deleted.`);
  console.log(colors);
}
// Soft and Hard copy.
const colorsSoftCopy = colors;
const colorsHardCopy = colors.slice(); // Slice() makes a HardCopy
console.log(`${colors.pop()} deleted from original array.`);
console.log(`Soft copied array: ${colorsSoftCopy}`); // As you can see, White was deleted from BOTH arrays, that's known as a soft copy
console.log(`Hard copied array: ${colorsHardCopy}`); // HardCopy stays the same.
// Merge arrays
const hello_world = ["Hello", "World"];
const goodbye_world = ["Goodbye", "World"];
console.log(hello_world + goodbye_world); // Creates an string
const merged = hello_world.concat(goodbye_world); // Created an array merging the other two, DOES NOT modify original array
console.log(merged);
// Search for an element or index
if (colors.includes("Red")) console.log("Red is a color.");
console.log(`Red is at position ${colors.indexOf("Red") + 1}.`);
// Filtrados y transformación:
const ColorsUPPER = colors.map((f) => f.toUpperCase());
console.log("UPPER colors: " + ColorsUPPER);
const ColorsLengthMin5 = colors.filter((color) => color.length >= 5); // New list with the colors who have at least length 5
console.log("Min length colors: " + ColorsLengthMin5);
const ColorsTotalLength = colors.reduce((acc, color) => acc + color.length, 0); // Acumulator, Color, Initial value
console.log("Total length colors: " + ColorsTotalLength);
// Other useful methods to explore:
// - splice()
// - join()
// - sort(), reverse()  (modify original array!)
// - flat()
// - some(), every()
// - find(), findIndex()

// Spread Operator: please, watch a video about it.
const numbers = [1, 2, 3, 4, 5];
console.log("Biggest number: " + Math.max(...numbers)); // You can get all values from a list
const HardCopyNumbers = [...numbers];
console.log("Hard copy using spread: " + HardCopyNumbers); // You can make a hard (shalow) copy too!
const concatColors = [...colors, ...ColorsUPPER];
console.log(concatColors); // You can concat using it too, it has a bunch of uses :)
