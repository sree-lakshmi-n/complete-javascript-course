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
