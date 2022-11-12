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
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

//////////////////////////////////////////////////////////

// // Array destructuring

// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

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

// // Object destructuring

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // Assigning alias names for object properties
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Setting default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };

// // We can't declare a and b with const since it's already declared before.
// // We can't declare it with let as well since it would create new variables, but we want to reuse the previously declared variables.

// // { a, b } = obj;
// // We can't do like above as JS will throw syntax error. When JS come across {}, it expects a code block. And we can't assign anything to a code block, hence this error, 'Unexpected token '='

// // The trick to mutate variables is to wrap all into a paranthesis
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const { fri } = openingHours;
// console.log(fri);
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// // Usage of object destructuring
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via Del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: 'Via Del Sole, 21',
//   starterIndex: 1,
// });

//////////////////////////////////////////////////////////

// // The Spread Operator
// const arr = [3, 4, 5];

// // Adding new elements to an existing array
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// // Passing multiple arguments to a function
// function add(a, b, c) {
//   return a + b + c;
// }
// console.log(add(...arr));

// const ingredients = [
//   prompt(`Let's make pasta!
// Ingredient 1?`),
//   prompt(`Ingredient 2?`),
//   prompt(`Ingredient 3`),
// ];

// restaurant.orderPasta(...ingredients);

// // Creating shallow copies of arrays
// const cpyArr = [...newArr];
// console.log(cpyArr);
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Combining arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Trying out with strings
// const firstName = 'Jane';
// const lastName = 'Doe';
// const fullName = [...firstName, ' ', ...lastName];
// console.log(fullName);

// // Objects
// // Copying objects
// const newRestaurant = { ...restaurant, founder: 'Guiseppe', foundedIn: 1998 };
// console.log(newRestaurant);

// const copyRestaurant = { ...restaurant };
// copyRestaurant.name = 'Ristorante Roma';

// // Address is not copied. Hence, the changes aren't reflected in org object
// console.log(restaurant.name);
// console.log(copyRestaurant.name);

//////////////////////////////////////////////////////////
// // Rest pattern
// // Spread -> Used on RHS of =
// const arr = [1, 2, ...[3, 4, 5]];
// // Rest -> Used on LHS of =
// const [a, b, ...others] = arr;
// // Rest pattern collects the elements that are unused in the destructuring assignment. It does not include skipped elements.
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);
// // const [p, , r, ...o,b] = [
// //   ...restaurant.mainMenu,
// //   ...restaurant.starterMenu,
// // ];
// // throws 'Uncaught SyntaxError: Rest element must be last element' error
// // => there can be only one rest element in a destructuring assignment

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;

// console.log(sat, weekdays);

// // Functions - condenses multiple arguments to an array
// const add = (...numbers) => {
//   return numbers.reduce((a, b) => a + b, 0);
// };
// console.log(add(1, 2, 3, 4));
// console.log(add(9, 8, 7, 6, 5, 4, 3, 2, 1));
// console.log(add(2, 1));

// // Spread is the opposite of rest
// const x = [23, 5, 7];
// console.log(add(...x));

// restaurant.orderPizza('Mushrooms', 'Onion', 'Olives', 'Spinach');
// restaurant.orderPizza('Mushrooms');

//////////////////////////////////////////////////////////
// // Short Circuiting (&& and ||)
// // OR Operator (||)
// console.log(3 || 'Jonas'); // 3
// // Logical Operators can
// // - Use ANY data type
// // - Return ANY data type
// // - Do short-circuiting/ short circuit evaluation
// //OR - (If the first value is a truthy value, it would immediately return that value)
// console.log('' || 'Jonas'); // 'Jonas'
// console.log(true || 0); // true
// console.log(0 || undefined); // undefined
// console.log(undefined || null); // null
// // Last operand will be returned if all prev ones are falsy values
// console.log(0 || undefined || null || 'Hello' || 23 || ''); // Hello (the first truthy value is returned)

// const guests = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests);

// // Doing above with short-circuiting
// const guests1 = restaurant.numGuests || 10;
// console.log(guests1);

// restaurant.numGuests = 23;
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// // This won't work with 0 as 0 is considered falsy value
// restaurant.numGuests = 0;
// const guests3 = restaurant.numGuests || 10; //10
// console.log(guests3);

// // AND Operator (&&)
// console.log(0 && 'Jonas');
// // And operator short circuits on encountering the first falsy value
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'Jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Mushrooms', 'spinach');
// }
// restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'spinach');

// // OR
// // Will return first truthy value or last value is all operands are falsy
// // Used to set default values

// // AND
// // Will return first falsy value or last value is all operands are truthy
// // Used to execute code in second operand if first operand is truthy

// // Nullish Coalescing Operator (??)
// const guests4 = restaurant.numGuests ?? 10;
// console.log(guests4);
// // Works with the concept of nullish values, instead of falsy values
// // Nullish values - null, undefined
// // Doesn't include 0, ''

////////////////////////////////////////////////////////////

// // Logical Assignment Operators

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // OR Assignment Operator

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(rest1.numGuests, rest2.numGuests);
// // Works beautifully except when 0 is encountered.
// rest1.numGuests = 0;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(rest1.numGuests, rest2.numGuests);

// // Nullish Assignment Operator
// // Solves 0 issue
// rest1.numGuests = 0;
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// console.log(rest1.numGuests, rest2.numGuests);

// // AND Assignment Operator
// // Making restaurant owner's name anonymous
// rest1.owner = rest1.owner && '<ANONYMOUS>'; // undefined
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // <ANONYMOUS>
// console.log(rest1.owner, rest2.owner);

// rest1.owner &&= '<ANONYMOUS>'; // undefined
// rest2.owner &&= '<ANONYMOUS>'; // <ANONYMOUS>
// console.log(rest1.owner, rest2.owner);

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
