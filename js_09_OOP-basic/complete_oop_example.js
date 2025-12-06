/*
Abstraction consist in declare only the necessary fields so you can apply them to multiple child-classes.
- All animals (i think, I'm not a biologist) can sleep for example.
- Dogs only play with tennis ball.
- Labrador has specific furr-colors (black, brown and beige).

Polymorphism consist in giving a method different utilities.
Create Bird class with fly method.
- Any bird can fly (hummingbird, pidgeon, hawk, etc.).
- Penguin can't fly.
*/
class Animal {
  constructor(name, specie) {
    this.name = name;
    this.specie = specie;
  }
  sleep() {
    console.log(`${this.name} took a nap and now is feeling better.`);
  }
}
class Dog extends Animal {
  // Inheritance from Animal:
  constructor(name, breed) {
    super(name, "dog");
    this.breed = breed;
  }
  // Methods applicable to all Dogs (abstraction):
  bark() {
    console.log(`${this.name} says "woof woof woof!".`);
  }
  playWithTennisBall() {
    console.log(`${this.name} is playing with a tennis ball, he's a good boy.`);
  }
}
class Labrador extends Dog {
  // Kind of like Enum. Enum is not really implement in JS but we can restric the value by validation and data freezing.
  static FurrColor = Object.freeze({
    BLACK: "black",
    CHOCOLATE: "chocolate",
    YELLOW: "yellow",
  });
  // Constructor defining specie as dog and breed as labrador.
  constructor(name, fur_color) {
    super(name, "dog", "labrador");
    // Data validation:
    if (!Object.values(Labrador.FurrColor).includes(fur_color)) {
      throw new Error(`Invalid furr color for labrador: ${fur_color}`);
    }
    this.fur_color = fur_color;
  }
}
// Bird class
class Bird extends Animal {
  constructor(name, specie) {
    super(name, specie);
  }
  // Fly method, try with different instances to test polymorphism
  fly() {
    console.log(`${this.name} is now flying.`);
  }
}
class Penguin extends Bird {
  constructor(name) {
    super(name, "penguin");
  }
  // By creating a method with the same name we can override it.
  fly() {
    console.log(`${this.name} is cannot fly, but it's pretty cool tho.`);
  }
}

// Also valid way to specify the Enum value:
// const dogTango = new Labrador("Tango", "black");

const dogTango = new Labrador("Tango", Labrador.FurrColor.BLACK);
dogTango.bark();

const penguinMisael = new Penguin("Misael");
penguinMisael.fly();
