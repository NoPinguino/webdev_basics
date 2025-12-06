// 1. Count how many times an item appears on a list.

console.log("Exercise 1:");
const nums_list = [1, 2, 2, 3, 4, 3, 1, 2];
let counted_nums = {};
for (let num of nums_list) {
  if (!(num in counted_nums)) {
    counted_nums[num] = 1; // If it wasn't found before, we add it.
  } else {
    counted_nums[num] += 1; // If it was found already, we increase it.
  }
}
console.log(counted_nums);
console.log("");

// 2. Return the name of people older than 25.

console.log("Exercise 2:");
const people = [
  { name: "Ana", age: 25 },
  { name: "Luis", age: 30 },
  { name: "Carla", age: 22 },
  { name: "Miguel", age: 28 },
];
const people_older25 = people.filter((person) => person.age > 25);
console.log(people_older25);
console.log("");

// 3. Calculate and return the averange length of the words on a list.

console.log("Exercise 3:");
const words_list = ["luna", "lado", "faro", "flama", "cristal"];
const avg_len =
  words_list.reduce((acc, word) => acc + word.length, 0) / words_list.length;
console.log(avg_len);
console.log("");

// 4. Group words by their first letter (output type object).

console.log("Exercise 4:");
let words_first_letter = {};
for (let word of words_list) {
  // Create list as value in case is the first word with that first letter:
  if (!(word[0] in words_first_letter)) {
    words_first_letter[word[0]] = [];
  }
  // Add the word:
  words_first_letter[word[0]].push(word);
}
console.log(words_first_letter);

// Also, you can use ??= operator, wich comprobates if a position is null or undefined. This way we get a more optimal code.

console.log("Exercise 4 (second version):");
let words_first_letter_v2 = {};
for (let word of words_list) {
  words_first_letter_v2[word[0]] ??= []; // If null/undefined, creates a list.
  words_first_letter_v2[word[0]].push(word);
}
console.log(words_first_letter_v2);
console.log("");

// 5. Find the oldest person without using loops (only reduce)

console.log("Exercise 5:");
const oldest = people.reduce(
  (max_age, person) =>
    person.age > max_age.age ? (max_age = person) : max_age,
  people[0], // Initial value, not necesary in this specific case, but always a good practise
);
console.log(oldest);
console.log("");

// 6. Return an array on names without duplicates

console.log("Exercise 6:");
const names = [
  { name: "Anne", age: 25 },
  { name: "Luis", age: 30 },
  { name: "Anne", age: 28 },
  { name: "Paul", age: 15 },
  { name: "Mary", age: 30 },
];
let unique_names = names.reduce((unique, person) => {
  if (!unique.includes(person.name)) {
    unique.push(person.name);
  }
  return unique;
}, []);
console.log(unique_names);
console.log("");
