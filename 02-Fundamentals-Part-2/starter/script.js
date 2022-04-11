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
    hasDriverLicense = true;
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
