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
