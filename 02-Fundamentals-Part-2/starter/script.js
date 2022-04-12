//Strict mode activated in JS helps write a secure code
'use strict';
// This single statement activates strict mode for the whole page
// This should be the first line of the script file, else strict mode won't work. (comments excluded)
// You can also activate strict mode blockwise/ function wise, but there's no point in doing that.

// ALWAYS PUT STRICT MODE AT THE BEGINNING OF YOUR SCRIPTS
// It helps you write secure code.
// It helps us avoid accidental errors.
// It forbids us to do certain things. 
// It will create visible errors for us in certain situations. Else, JavaScript will simply fail silently without letting us know that we did a mistake.

console.log(`--------------------- 
Practice
--------------------- 
`);
let hasDriversLicense = false;
const passTest = true;
if (passTest) {
    //hasDriverLicense = true;
    hasDriversLicense = true;
}
if (hasDriversLicense) {
    console.log('I can drive :D');
}

/**
 * Without strict mode on, you would see no result in the log.
 * JS fails silently and not show the intended result.
 * A new variable, hasDriverLicense is set to true and not the original hasDriversLicense, so this one is still false and that's why here, this logging does not happen.
 *
 * With strict mode on, you get the error,'Uncaught ReferenceError: hasDriverLicense is not defined'.
 */

/**
 * strict mode does introduces a short list of variable names that are reserved for features that might be added to the language a bit later.
 * They are keywords and hence can't be used as variable names.
 */
//const interface = 'audio';
// Throws 'Uncaught SyntaxError: Unexpected strict mode reserved word' error
//const private = true;
// Unexpected strict mode reserved word' error

// Function
function mylogger() {
    console.log('My name is Jane Doe');
}
// calling/ running/ invoking the function
mylogger();
// Function can reuse a piece of code, take in and return data we need.

// choose descriptive names for variable and functions 
function fruitProcessor1(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
console.log(fruitProcessor1(5, 0));
console.log(fruitProcessor1(4, 5));
// functions allow us to write more maintainable code.
// DRY - Don't Repeat Yourself
// console.log(), Number(), String() all are functions.

// Function declarations vs Expressions

// Function declaration

// We can call function declarations before they are defined in code
console.log(calcAge1(1994));

function calcAge1(birthYear) {
    return 2022 - birthYear;
}
console.log(calcAge1(1994));

// Anonymous function
// Function expression is assigned to a variable to form an anonymous function.
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}
console.log(calcAge2(1991));

// Function is not a type, it's a value. Hence, stored in a variable.

//We can call function declarations before they are defined in code.
// We cannot access function expressions before they're defined and initialised. Due to hoisting.

// Arrow functions
// Very useful for one liner functions. 
// No curly braces. We don't have to explicitly write return keyword.
// 2022 - birthYear will be returned.
const calcAge3 = birthYear => 2022 - birthYear;
console.log(calcAge3(1989));

// return keyword can be omitted only in one liner arrow functions
const yearsUntilRetirement1 = birthYear => {
    const age = 2022 - birthYear;
    const retirementAge = 60 - age;
    return retirementAge;
}
console.log(yearsUntilRetirement1(1996));

const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirementAge = 60 - age;
    return `${firstName} retires in ${retirementAge} years`;
}
console.log(yearsUntilRetirement2(1998, 'Jane'));

// arrow function do not get this keyword.

// Functions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

// Reviewing Functions
const yearsUntilRetirement3 = function (birthYear, firstName) {
    const age = calcAge2(birthYear);    // calling fns from other fns
    const retirementAge = 60 - age;
    if (retirementAge > 0) {
        console.log(`${firstName} retires in ${retirementAge} years`);
        return retirementAge;
        console.log(`${firstName} retires in ${retirementAge} years`);
        // non-reachable. after return statement
    }
    console.log(`${firstName} has already retired 🎊`);
    return -1;

}
console.log(yearsUntilRetirement3(1891, 'John'));   // already retired. Hence, -1 will be output at console

/**
 * Function declarations - can be used before it's declared
 * Function expressions - function value stored in a variable
 * Arrow function - Great for one-liner functions. Has no 'this' keyword.
 *
 * Three diff ways of writing functions. But, they all work in the similiar way - receive input data, transform data, and output data.
 *
 * return statement - output a value from function and terminates its execution.
 */

// data structure 1 - arrays
// Arrays and Objects - very important data structures

// Arrays

// need for arrays
const friend1 = 'John';
const friend2 = 'Jane';
const friend3 = 'Mark';
const friend4 = 'Joe';
const friend5 = 'Ann';

const friends = ['John', 'Jane', 'Mark', 'Joe', 'Ann']; // literal syntax
console.log(friends);

const years = new Array(1991, 1992, 1993, 1994, 1995);
console.log(years);

// JS Arrays are zero-based. Index from 0 to arr.length-1
console.log(friends[0]);
console.log(friends[2]);

// to get length of array
console.log(friends.length);
// to get last element of array
console.log(friends[friends.length - 1]);//you can put expressions inside that square bracket.

// changing array element
friends[2] = 'Jay';
console.log(friends);
/**
 * We declared the friends variable with const, but I was still able to change one element of the Array from Mark to Jay.

Only primitive values are immutable. But an Array is not a primitive value. And so we can actually always change it so we can mutate it.

And it works this way because of the way that JavaScript stores things in memory.
 */
/**
But we cannot replace the entire Array.

 friends = ['Bob','Ellis'];
This would be illegal.
We get 'assignment to constant variable' error.
 */

//An array can hold values of different types
// It's because in each position, JS expects an expression.
const person = ['Jane', 'Doe', calcAge3(1994), friends];
console.log(person);

calcAge3(years); // doesn't work
//We get NaN
// We can't subtract an  array from number (here, 2022)

years + 10
// Output: '1991,1992,1993,1994,199510'
// Converts whole array to string and adds 10 at the end
// Not meaningful

years - 10
// Output: NaN
// Again, not meaningful

// We cannot do operations on array
// We can only do operations on individual elements of array, not the whole array.

const age1 = calcAge3(years[0]);
const age2 = calcAge3(years[2]);
const age3 = calcAge3(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge3(years[0]), calcAge3(years[1]), calcAge3(years[2]), calcAge3(years[3]), calcAge3(years[4])];
console.log(ages);

// 