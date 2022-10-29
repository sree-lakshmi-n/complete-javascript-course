'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: (starterIndex, mainCourseIndex) => {
    return [
      restaurant.starterMenu[starterIndex],
      restaurant.mainMenu[mainCourseIndex],
    ];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Object destructuring

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Assigning alias names for object properties
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables

//////////////////////////////////////////////////////////

// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // Array destructuring

// const [x, y, z] = arr;
// console.log(a, b, c, x, y, z);

// const [first, second] = restaurant.categories;
// const [, , third, fourth] = restaurant.categories;
// console.log(first, second);
// console.log(third, fourth);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// // Swapping main and secondary without destructuring
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // Swapping with destructuring
// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested arrays
// const nested = [1, 2, [3, 4]];
// // const [i, , j] = nested;
// // console.log(i, j);

// // destructuring inside of destructuring
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Setting default value for variables when we're extracting them
// // const [p, q, r] = [8, 9];
// // console.log(p, q, r); // r comes undefined
// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // Output: 8 9 1

//////////////////////////////////////////////////////////

// Object destructuring
