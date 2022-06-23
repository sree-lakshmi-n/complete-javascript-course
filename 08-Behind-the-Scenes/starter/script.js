'use strict';
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName);
  function printAge() {
    const output = `${firstName} is ${age}, born in ${birthYear}`;
    console.log(output);
    // Block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh! You're a millenial, ${firstName}`;
      var millenial = true;
      console.log(str);
      console.log(millenial);

      function add(a, b) {
        return a + b;
      }
      add(2, 3);
    }
    // var is function scoped
    console.log(millenial);
    // let & const are block scoped
    // console.log(str);

    // functions are block scoped in strict mode
    // add(2, 3);
  }
  printAge();
  return age;
}

const firstName = 'Jo';
calcAge(1991);
// console.log(age);
// printAge();
