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
