/*
There is another way to define clases, look out prototype classes.
This is the modern and optimal way of OOP in JavaScript, ES6 classes.

I recommend you follow this order to understand OOP in JS:
1. constructor.js -> (you are here) class definition, instances and methods
2. inheritance.js -> inheritance (super, extends)
3. encapsulation.js -> encapsulation (private fields), error managgement, undefined fields, nesting functions in methods
4. complete_oop_example -> abstraction, polymorphism (override methods), enum data object
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
