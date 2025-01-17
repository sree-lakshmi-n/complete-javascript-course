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
// Maps
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
// Set method returns the updated map
console.log(rest.set(2, 'Lisbon, Portugal'));
// => We can chain the set method
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are Open :D')
  .set(false, 'We are Close :(');

// Data types are important while fetching values in maps
console.log(rest.get('name'));
console.log(rest.get('1')); // undefined
console.log(rest.get(1));
console.log(rest.get(2));
console.log(rest.get(true));
console.log(rest.get('true')); // undefined

const time = 21;
console.log(rest.get(rest.get('open') > 10 && rest.get('close') < 24));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
// rest.clear();  // clears all from map
// console.log(rest);

// Assigning arrays as keys
rest.set([1, 2], 'Test');
console.log(rest.get([1, 2])); // undefined
// this won't work as arrays are not primitive values and the [1,2] in get() and set() may have diff m/y locations

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr)); // 'Test'

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.get(document.querySelector('h1')));

console.log(rest.size);

const questions = new Map([
  ['questions', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again :('],
]);

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

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5.
// const { team1, x: draw, team2 } = game.odds;
// // OR
// // const {odds:{team1,x:draw,team2}} = game;
// console.log(team1, draw, team2);

// // 6.
// game.printGoals = (...playerNames) => {
//   console.log(
//     `${playerNames.length} goals were scored and players are ${playerNames}`
//   );
// };

// game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// game.printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log('Team 1');
// team2 < team1 && console.log('Team 2');

//////////////////////////////////////////////////////////
// // The for-of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//   console.log(item);
// }
// // To get indices
// for (const item of menu.entries()) {
//   console.log(item);
// }
// for (const [index, item] of menu.entries()) {
//   console.log(`${index + 1}: ${item}`);
// }
//////////////////////////////////////////////////////////
// // Enhanced Object Literals
// // 01 - When key name and variable name are same
// const daySubjects = {
//   mon: ['phy', 'math'],
//   tue: ['chem', 'bio'],
//   wed: ['science', 'social'],
//   thu: ['comp', 'PT'],
//   fri: ['eng', 'math'],
// };
// const school = {
//   name: 'Dynamic School',
//   daySubjects, // instead of daySubjects: daySubjects
// };

// // 02 - Functions assignment
// const faculty = {
//   school: 'Dynamic School',
//   daySubjects,
//   // new way of defining fns inside object
//   facultyName(name) {
//     console.log(name);
//   },
// };

// // 03 - Computing property names instead of writing manually
// const hobbies = ['reading', 'singing', 'dancing', 'drawing'];
// const studentCount = {
//   [hobbies[0]]: 9,
//   [hobbies[1]]: 10,
//   [hobbies[1 + 1]]: 2,
//   [`hobby - ${1 + 2}`]: 4, // any expression can be given inside []
// };
// console.log(studentCount);

//////////////////////////////////////////////////////////
// // Optional Chaining
// // let's pretend we don't know on which all days the restaurant is open and we try fetching openingHours for mon
// // console.log(restaurant.openingHours.mon); // undefined
// // console.log(restaurant.openingHours.mon.open);
// // we're trying to fetch open value of undefined. Throws error, 'Uncaught TypeError: Cannot read properties of undefined (reading 'open')'

// // to avoid this error, we need to check if it exists first
// restaurant.openingHours.mon && console.log(restaurant.openingHours.mon);
// // what if we don't even know if openingHours exist. We would've to place a check for that as well
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon);
// }
// // This can become very compliated in case of real world objects with deeply nested optional properties

// // with optional chaining - if a certain property does not exist, it'll return undefined immediately
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   // console.log(day);
//   // const open = restaurant.openingHours[day]?.open;
//   // console.log(`On day ${day}, we open at ${open}`);
//   //Outputs 'On day mon, we open at undefined' for days which are not present in openingHours
//   // To make the output more meaningful, we can use OR
//   // const open = restaurant.openingHours[day]?.open || 'closed';
//   // console.log(`On day ${day}, we open at ${open}`);
//   // It shows 'On day sat, we open at closed', even though sat has a valid open key (0 issue)
//   // solving it with nullish coalescing operator
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On day ${day}, we open at ${open}`);
// }

// //Methods
// console.log(restaurant.order?.(0, 1) ?? `method doesn't exist`);
// console.log(restaurant.orderRisotto?.(0, 1) ?? `method doesn't exist`);

// // Array
// const users = [
//   {
//     name: 'Jonas',
//     email: 'abc@def.com',
//   },
// ];
// console.log(users[0]?.name ?? 'users array empty');

//////////////////////////////////////////////////////////
// Looping Objects

//
// Keys
// for (const day of Object.keys(restaurant.openingHours)) {
//   console.log(day);
// }

// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// console.log(`We are open on ${properties.length} days`);

// // Values
// const values = Object.values(restaurant.openingHours);
// console.log(values);

// // Entries
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const item of Object.entries(restaurant.openingHours)) {
//   console.log(item);
// }
// for (const [day, { open, close }] of Object.entries(restaurant.openingHours)) {
//   console.log(`On ${day}, we open at ${open} and close at ${close}`);
// }

//////////////////////////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// for (const [goalNum, player] of Object.entries(game.scored)) {
//   console.log(`Goal ${+goalNum + 1}: ${player}`);
// }

// //2.
// let sum = 0;
// for (const odd of Object.values(game.odds)) {
//   sum += odd;
// }
// let avg = sum / Object.values(game.odds).length;
// console.log(avg.toFixed(2));

// //3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   console.log(`Odd of victory ${game[team] ?? 'draw'}: ${odd}`);
// }

// // BONUS
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// //////////////////////////////////////////////////////////
// // Sets
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// const nameSet = new Set('Jonas');
// const emptySet = new Set();
// console.log(ordersSet, nameSet, emptySet, ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// console.log(ordersSet);
// ordersSet.delete('Risotto');
// console.log(ordersSet);
// // to clear all elements of a set
// // ordersSet.clear();
// // console.log(ordersSet);

// for (const order of ordersSet) {
//   console.log(order);
// }

// // to remove duplicates of an array
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
// console.log(staff, staffUnique);
// // To convert set to array (set is an iterable, hence we can use spread operator for this)
// const staffUniqueArr = [...staffUnique];
// console.log(staffUniqueArr);

// // counting unique chars in a string
// const name = 'Jonas Schmedtmann';
// console.log(new Set(name).size);
