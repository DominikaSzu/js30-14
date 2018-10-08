// start with strings, numbers and booleans

let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

// in case of primitive values, variables are copying the value

let name = 'Dominika';
let name2 = name;
console.log(name, name2);
name = 'Dosia';
console.log(name, name2);

// Let's say we have an array

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
// You might think we can just do something like this:
// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
// one way

const team = players.slice();

// or create a new array and concat the old one in

const team2 = [].concat(players);

// or use the new ES6 Spread

const team4 = [...players];

const team5 = Array.from(players);
team5[0] = 'helloo';
console.log(team5);

// now when we update it, the original one isn't changed
// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};
// and think we make a copy:
// how do we take a copy instead?
// We will hopefully soon see the object ...spread
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.