/*
There is another way to define clases, look out prototype classes.
This is the modern and optimal way of OOP in JavaScript, ES6 classes.
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Mehods, like functions for Classes
  greetings() {
    return `${this.name} says hello.`;
  }
}
let objPerson = new Person("Jhon", 20);
console.log(`Person is ${typeof objPerson}`);
console.log(objPerson);
console.log(objPerson.greetings());
