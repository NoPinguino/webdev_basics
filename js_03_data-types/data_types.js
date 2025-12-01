const number_type = 19;
console.log("Type of first variable: " + typeof number_type);
const object_type = new Number(19);
console.log("Type of second variable: " + typeof object_type);

/*
Primitives: number, bigint, string, boolean, null, undefined, symbol.
Non-Primitives: Object, Array
*/

//Object:
const user = {
  user_name: "Misael",
  email: "misael@gmail.com",
  password: "password",
  logged: true,
};
// Altho object is defined as constant, atributes are mutable.
user.password = "123";
console.log(user);

const car = {
  brand: "Ford",
  price: 12000,
  "fabrication year": 2004,
  km: 15000,
};
car["fabrication year"] = 1999; // You can acces to string keys by using [<String>]
console.log(car);

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // Arrays are also non-primitive !

// JavaScript can convert variable types in run time.
console.log("Misael " + 123);
console.log(false + 1); // false and true can be interpreted as 0 and 1 too, be careful with that.
console.log(Number("123"));
console.log(Number("abc"));
console.log(Number("123"));
console.log(typeof Number("123"));
console.log(typeof Number("abc"));
