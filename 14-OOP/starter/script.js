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
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods outside constructor will be added to prototype (Instance methods)
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey, ${this.fullName}!`);
  }
  // Setters and Getters
  get age() {
    return 2037 - this.birthYear;
  }
  // Setting a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name.`);
  }
  get fullName() {
    return this._fullName;
  }
  // Static methods
  static hey() {
    console.log('Hey!');
    console.log(this);
  }
}
const jessica = new PersonCl('Jessica David', 1996);
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

// Setters and Getters
const account = {
  owner: 'Jonas',
  movement: [200, 530, 120, 300],
  get latest() {
    return this.movement.slice(-1).pop();
  },
  set latest(mov) {
    this.movement.push(mov);
  },
};
account.latest = 50;
console.log(account.latest);

console.log(jessica.age);

const walter = new PersonCl('Walter Watson', 1993);

// Static Methods
// In constructor functions
Person.hey = function () {
  console.log('Hey!');
  console.log(this);
};
Person.hey();
// In classes
PersonCl.hey();

// Object.create
const PersonProto = {
  calcAge() {
    return 2037 - this.birthYear;
  },
  init(name, birthYear) {
    // not constructor. can have any name
    this.name = name;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
console.log(steven);
console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);
steven.name = 'Steven';
steven.birthYear = 2000;
console.log(steven.calcAge());

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
console.log(sarah.calcAge());

/*
Coding Challenge #2
Your tasks:
1. Re-create Challenge#1, but this time using an ES6 class(call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h(divide by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h GOOD LUCK 😀
*/
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    return this.speed;
  }
  brake() {
    this.speed -= 5;
    return this.speed;
  }
  get speedUS() {
    return this.speed / 1.6 + ' mi/hr';
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const ford = new CarCl('Ford', 120);
console.log(ford.accelerate());

console.log(ford.brake());
console.log(ford.accelerate());
console.log(ford.brake());
console.log(ford.speedUS);
ford.speedUS = 10;
console.log(ford.speedUS);
console.log(ford.accelerate());
console.log(ford.speedUS);
console.log(ford.brake());
console.log(ford.speedUS);

// Inheritance using constructor functions
const Student = function (firstName, birthYear, course) {
  // Person(firstName, birthYear);
  // This acts as a usual function call without the 'new' keyword. For a usual function, this keyword is undefined.
  // Hence, this throws the error:
  // Uncaught TypeError: Cannot set properties of undefined (setting 'firstName')
  // We use Person.call() to resolve this as the call() can set a this keyword for the function call.

  Person.call(this, firstName, birthYear);
  this.course = course;
};
// Setting prototype manually using Object.create
Student.prototype = Object.create(Person.prototype);
Student.prototype.intro = function () {
  console.log(`My name is ${this.firstName} and I am studying ${this.course}`);
};
const mike = new Student('Mike', 2020, 'Computer Science');
mike.intro();
console.log(mike.calcAge());

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike.__proto__.constructor);
console.log(Student.prototype);
console.log(Student.prototype.constructor);
// Student.prototype.constructor should ideally point back to the student.
//But, here it points back to Person.
console.dir(Student.prototype.constructor);
// And the reason for that is we set the prototype property of Student with Object.create.
// This makes it so that the constructor of Student.prototype be Person.
// Since we rely on constructor property at times, we need to fix this.
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);
