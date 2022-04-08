console.log(`--------------------- 
Practice
--------------------- 
`);
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

// String and template literals
const str = 'I\'m ' + firstName + ' ' + lastName + '. My job is ' + job + '.';
console.log(str);

// template literals makes this easier
const temp = `I'm ${firstName} ${lastName}. My job is ${job}.`;
console.log(temp);

// Mutiline strings
const multistr = 'One\n\
Two\n\
Three';
console.log(multistr);

//Template literals makes this cleaner
const multitemp = `One
Two
Three`;
console.log(multitemp);

//Temp literals can be used for just strings too. No apostrophe issues.
console.log(`We're John Doe & Jane Doe.`)

// if/else statements
const givenAge = 12;
const isOldEnough = givenAge >= 18;
if (isOldEnough) {
    console.log('Sarah can start driving license. 🚗');
}
else {
    console.log(`Sarah is too young. Wait another ${18 - givenAge} years :-)`);
}

// tells the century in which a person was born
if (birthYear <= 2000)
    console.log('20th century');
else
    console.log('21st century');