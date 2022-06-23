'use strict';
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName);
  function printAge() {
    const output = `${firstName} is ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jo';
calcAge(1991);
// console.log(age);
// printAge();
