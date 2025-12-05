// A function is an executable code block, you can call it any time :)

// Normal function:
function sum(num1, num2) {
  return num1 + num2; // Returns addition
}
let num1 = 1;
let num2 = 2;
console.log(`Addition function: ${sum(num1, num2)}`);

// Arrow function
const substract = (num1, num2) => num1 - num2;
console.log(`Substract function: ${substract(num1, num2)}`); // Returns substraction

// Function as a parameter:
let balance = 200;
let amount = 50;
const validateAmount = (balance, amount) => balance > amount;
const substractAmount = (balance, amount) => balance - amount;

function payAmpunt(validateFun) {
  if (validateFun(balance, amount)) {
    balance = substractAmount(balance, amount);
    console.log(`You payed ${amount}, new balance: ${balance}`);
  } else {
    console.log("Unsuficient money on your account.");
  }
}
payAmpunt(validateAmount);

// High-order function / First-class function:
const hello = (name) => `Hello ${name}`; // First-class function: Function stored as a variable.
const printHello = (helloFun, username) => console.log(helloFun(username)); // Higher-order function: Function who recives a function as a parameter.
printHello(hello, "Misael");

// Context vs Scope.
//
// Context:
// "context" refers to the value of 'this' inside a piece of code.
// It depends on *how* a function is called (obj.say() → this = obj).
//
// Scope:
// "scope" defines where variables are visible and accessible.
// It depends on *where* the variable is declared (global, function, block).

const obj = {
  name: "Misael",
  say() {
    console.log(this.name); // Contect in this case is "Misael", the scope of funct say() is inside obj.
  },
};
obj.say();
// We could say that context is the same of the scope
