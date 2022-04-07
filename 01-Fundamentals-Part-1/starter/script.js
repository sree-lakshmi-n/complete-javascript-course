let js = 'amazing';
console.log(40 + 8 + 23 - 10);

let age = 31;
age = 30; // reassigning value to a variable
// mutated age variable

//const keyword holds values that cannot be changed
const birthYear = 1991
// birthYear = 1990 // assignmnet to const variable cannot be reassigned
// cannot be mutated. const variables are immutable.
// cannot declare empty const variables. Throws missing initialiser error.

// var keyword ideally should be completely avoided. Used prior to ES6.
var job = 'programmer'
job = 'teacher'
// mutation allowed
// let is block scoped
// var is function scoped

// Even if variables aren't declared, it works in js. 
//But such variables wouldn't be created in current scope, instead they would be added to global scope.
// Hence, properly declare variable everytime.
const now = 2022;
const myAge = now - 1991;
const friendAge = now - 1983;
console.log(myAge, friendAge);
console.log(myAge * 2, friendAge ** 3);
console.log(myAge / 2, friendAge / 10);

// '+' to concatenate strings
const firstName = 'Jane';
const lastName = 'Doe';
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10;
x++;
x--;
x += 10;
x -= 10;
x *= 10;
x /= 10;
x %= 10;

// Comparison operators
let y = 4;
x <= y;
x >= y;
x == y;
x < y;
x > y;