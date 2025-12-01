// Some conditional examples and challenges.
// Understand that what we are compering, must return true or false.
// If it returns true, we will execute the code block.

// Basic structure:
const num = 5;
if (num > 0) {
  console.log(`${num} is positive`);
} else if (num < 0) {
  console.log(`${num} is negative`);
} else {
  console.log(`${num} is neutral`);
}

// Type comparation
const strNum = "5";
if (num == strNum) {
  console.log("Equal.");
} else {
  console.log("Not equal.");
}
if (num === strNum) {
  console.log("Same type.");
} else {
  console.log("Different type.");
}

// Boolean condition
const understood = true;
if (understood) {
  console.log("Understood.");
}

// Found on array
const colors = ["red", "blue", "green"];
if (colors.includes("green")) {
  console.log("Green found.");
}
