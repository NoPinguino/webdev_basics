// Run console code with node.js -> node hello.js
console.log("hello world!");
//process.stdout.write("hello javascript");

/*
String
Number
Boolean
Bigint

Undefined
Null

Object
Symbol
*/

var global = 5; // Do not use vas to define variables
let age = 19;
let name = "Misael";
const likes_coffee = true; // Use constants whenever is posible! safer data :)

let last_name = "de la Morena González";
let full_name = name + " " + last_name;
let is_human = true;
let lenguages = ["JavaScript", "Java", "Python", "Kotlin"];
let Misael = {
  name: full_name,
  age: age,
  is_human: is_human,
  lenguages: lenguages,
};
console.log("Hello " + name);
//console.log(`Hello ${name}`); easier way to print variables inside strings
console.log(Misael);
