// Inheritance
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Administrator extends Person {
  constructor(name, age, username, password) {
    super(name, age); // super() for inheritance
    this.username = username;
    this.password = password;
  }
}
const myAdmin = new Administrator("Misael", 19, "NoPinguino", "mypassword123");
console.log(myAdmin);
