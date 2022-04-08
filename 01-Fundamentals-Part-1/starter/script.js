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

// Type conversion and type coercion
// Type conversion -> when we typecast one variable to another (explicit type conversion)
// Type coercion -> When js typecasts variables under some circumstances (implicit type conversion)

/* Type Conversion */
const inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear), inputYear);  // type conv of inputYear from String to number
console.log(Number(inputYear) + 18);

// Converting a non-number to number
console.log(Number('Jane'));    // results in NaN
console.log(typeof NaN);    // typeof NaN is number, interestingly
// NaN denotes invalid number

// to type cast to String
console.log(18, String(18));
console.log(inputYear + String(18));

// We cannot type cast to undefined or null
// We can convert to Number, String, or Boolean

/* Type Coercion */
console.log('I am ' + 23 + ' years old.');  // 23 is converted to String by JS and then concatenated.
console.log('23' - '10' - 3);   // Strings converted to numbers by JS
// '-' triggers to numbers coercion
console.log('23' + '10' + 3);
// '-' triggers to strings coercion

let n = 1 + '1';    // '11'
n -= 1;     // '11'-1 -> 11-1 = 10
console.log(n);     // 10

console.log(2 + 3 + 4 + '5'); //2+3+4+'5' = 9+'5' = '95'
console.log('10' - '4' - '3' - 2 + '5');
// '10' - '4' - '3' - 2 + '5' = 1 + '5' = 15

// truthy and falsy values

// Falsy values
// 0, '', undefined, null, NaN
// When type converted/coerced to boolean, these falsy values will become false.
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('define'));
console.log(Boolean([]));
console.log(Boolean(''));

// if-else conditions and conditional operators type coerce falsy/truthy values to boolean
const money = 0;
if (money)
    console.log('Don\'t spend it all!');
else
    console.log('You should get a job!');

// to check if a variable is defined
let height;
// let height = 0 // BUG!
// 0  is a perfectly valid value. Still, it's a falsy value.
if (height) {
    console.log('Yay! height is defined.');
}
else {
    console.log('height is undefined.');
}

console.log(Number(''))
// Number('') is 0 which can be a valid value too. It's a falsy value, but.
// Hence, take care while using falsy value concepts to check if a variable is defined

