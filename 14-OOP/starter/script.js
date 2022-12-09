'use strict';
const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Instance Methods
  //   NEVER do this. If we do this, for every instance we create, the instance method would be copied for that.
  //   This would impact code performance
  //   this.calcAge = function () {
  //     return 2037 - this.birthYear;
  //   };
};
const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(jonas instanceof Person);
console.log(jonas, matilda, jack);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  return 2037 - this.birthYear;
};

console.log(jonas.calcAge());
console.log(jonas);
// The jonas object doesn't have calcAge(), but still have access to it due to prototypal inheritance.
console.log(matilda.calcAge());
console.log(jack.calcAge());

// __proto__ is the prototype of an object.
// The prototype of an object (__proto__) is the prototype property of the constructor function.
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));

// Setting properties using prototype
Person.prototype.species = 'Homo Sapiens';
// this property is not in object, but in __proto__
console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false
//species is inside __proto__, not in jonas object itself.

// Prototype Chain

console.log(jonas.__proto__); // Person.prototype
console.log(jonas.__proto__.__proto__); // Object.prototype
console.log(jonas.__proto__.__proto__.__proto__); // null

console.log(Person.prototype.constructor);
console.log(Person.prototype.constructor);

// Prototypal inheritance on built-in objects
const arr = [1, 2, 3, 4, 1, 1, 1, 1, 3, 3, 3, 34, 4, 4, 4];
console.log(arr.__proto__); // Array.prototype
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__); // Object.prototype
console.log(arr.__proto__.__proto__.__proto__); // null

// extending the prototype of a built-in object
Array.prototype.unique = function () {
  return [...new Set(arr)];
};
console.log(arr.unique());
/**
 * Extending the prototype of a built-in object is generally not a good idea:-
 * 1. The next version of JavaScript might add a method with the same name but it might work in a different way. When your code will then use that new method, then that will probably break your code.
 * 2. When you work on a team of developers, and  if multiple developers implement the same method with a different name, then that's just going to create many bugs.
 */

// DOM elements
const h1 = document.querySelector('h1');
console.dir(h1);

// Functions
console.dir(x => x + 1);

/*
Coding Challenge #1
Your tasks:
1. Use a constructor function to implement a'Car'.A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5,and log the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  return this.speed;
};
Car.prototype.brake = function () {
  this.speed -= 5;
  return this.speed;
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(bmw.accelerate());
console.log(bmw.accelerate());
console.log(bmw.brake());
console.log(bmw.accelerate());
console.log(bmw.brake());
console.log(mercedes.brake());
console.log(mercedes.accelerate());
console.log(mercedes.brake());
console.log(mercedes.accelerate());
console.log(mercedes.brake());

// ES6 Classes
// Class expressions
// const PersonCl = class {

// }
// Class declarations
class PersonCl {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }
  // Methods outside constructor will be added to prototype
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey, ${this.name}!`);
  }
}
const jessica = new PersonCl('Jessica', 1996);
jessica.calcAge();
console.log(jessica);
console.log(jessica.__proto__);
console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey, ${this.name}!`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens. We can pass them into functions and return them from functions.
// 3. Classes are executed in strict mode.
