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
    }
    // var is function scoped
    console.log(millenial);
    // let & const are block scoped
    // console.log(str);
  }
  printAge();
  return age;
}

const firstName = 'Jo';
calcAge(1991);
// console.log(age);
// printAge();
