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
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
console.log(fruitProcessor(5, 0));
console.log(fruitProcessor(4, 5));
// functions allow us to write more maintainable code.
// DRY - Don't Repeat Yourself
// console.log(), Number(), String() all are functions.