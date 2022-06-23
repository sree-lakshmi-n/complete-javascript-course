'use strict';
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName);
  function printAge() {
    let output = `${firstName} is ${age}, born in ${birthYear}`;
    console.log(output);
    // Block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      /*
        JS tries to look for the variable name in the current scope. Right now, firstName actually is in the current scope. So first name is indeed, in this same block. Therefore, JS will then use that variable and not perform any variable look up in the scope chain.
        
        So the scope chain isn't necessary at all, if the variable that we're looking for is already in the current scope.
        */
      // Creating new variable with same name as outer scope variable
      const firstName = 'Steven';
      const str = `Oh! You're a millenial, ${firstName}`;
      var millenial = true;
      console.log(str);
      console.log(millenial);

      function add(a, b) {
        return a + b;
      }
      add(2, 3);
      // Reassigning a variable with same name as outer scope variable
      output = 'New Output!';
    }
    // var is function scoped
    console.log(millenial);
    // let & const are block scoped
    // console.log(str);

    // functions are block scoped in strict mode
    // add(2, 3);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jo';
calcAge(1991);
// console.log(age);
// printAge();

// Hoisting and Temporal Dead Zone(TDZ) in practice

// hoisting with variables
console.log(me);
// console.log(age);
// console.log(job);

var me = 'sophie';
let age = 30;
const job = 'teacher';

// hoisting with functions
console.log(addDecl(2, 3));
// console.log(addExp(2, 3));
// console.log(addArr(2, 3));
// console.log(addExpVar(2, 3));
// console.log(addArrVar(2, 3));
// undefined is the initially assigned value. It's like calling undefined(2,3) here. Hence, it throws error.

console.log(addArrVar);

function addDecl(a, b) {
  return a + b;
}
const addExp = function (a, b) {
  return a + b;
};
// ReferenceError: Cannot access 'addExp' before initialization

const addArr = (a, b) => {
  return a + b;
};
// ReferenceError: Cannot access 'addArr' before initialization

var addExpVar = function (a, b) {
  return a + b;
};
//  TypeError: addExpVar is not a function

var addArrVar = (a, b) => {
  return a + b;
};
// TypeError: addArrVar is not a function
