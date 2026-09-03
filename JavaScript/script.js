console.log("Holla Amigos, I'm learning JavaScript.");

// Variables: They are used to store resusable values
// Definition can be: let, const, and var (not really supported)

let nickName = "Manny";
console.log(nickName);

// Primitive Data Types

// String
let firstName = "Emmanuel";
console.log(firstName);

// Number
let age = 24;
console.log(age);

// Boolean
let isCoding = true;
console.log(isCoding);

// Undefined
// let age;

// null
let emptyValue = null;
console.log(emptyValue);
console.log(typeof emptyValue);

// Typeof Operator
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isCoding);

// The Plus Operator
console.log("Holla  " + "my friends" + " " + "!");

console.log("10" + "5");
console.log(10 + 10);

// Arithmetic Operator

// Subtraction
console.log(30 - 5);

// Addition
console.log(60 + 40);

// Multiplication
console.log(10 * 5);

// Division
console.log(20 / 4);

// Modulus || Remainder
console.log(10 % 3);

// Power || Exponent
console.log(2 ** 3); //2*2*2 = 8

// The += || -= || /= || %=
let number = 20;
number += 30; // number = number(20) + 30 = 50
console.log(number);

// Increment
number++; // Increment by 1
console.log(number);

// Decremment
number--; // decrement by 1
console.log(number);

// The BODMAS & PEDMAS rule
let equationOne = 10 * 6 + 3;
// multiplication before addition
console.log(equationOne);

let equationTwo = 10 * (6 + 3);
//Bracket before multiplication
console.log(equationTwo);

// Escape Characters
// \n, \t, \\, \"\",
console.log('Hello \nAmigos!, I am learning "JavaScript" again');
// \n = New Line
// \t = New Tab (Space Bar)
// \\ = Backslash
// \"" = Quotation Mark

// String Functions

let userName = "    MannyTheGreat   ";
console.log(userName);

// .length fucntion
console.log(userName.length); // Even the white spaces are counted as characters.

//toUpperCase()
console.log(userName.toUpperCase());

// toLowerCase()
console.log(userName.toLowerCase());

// .includes()
console.log(userName.includes("Manny"));

// .startsWith()
console.log(userName.startsWith("M"));

// .endsWith()
console.log(userName.endsWith("t"));

// .indexOf()
console.log(userName.indexOf("T")); // Tells the index position of the string by counting from 0

// .trim()
console.log(userName.trim()); // Eliminates whitespaces

// .split()
console.log(userName.split(" ")); // splits the characters of a string by separating them with a comma, and keeping each character in a quote.

// Template Literals
let roleName = "Manny Johnson";
let roleTitle = "Software and Blockchain Dev.";
console.log(`I am ${roleName}, and I am learning ${roleTitle}`);

// Math Functions
console.log(Math.PI); // The value of PI
console.log(Math.round(2.9)); // To the nearest whole number
console.log(Math.ceil(9.99)); // Rounding up
console.log(Math.floor(4.5)); // Rounding down
console.log(Math.max(5, 10, 30, 7)); // Selects the maximum number
console.log(Math.min(2, 0.5, 9, 6, 4)); // Selects the minimum number
console.log(Math.sqrt(16)); // The Square root of the number
console.log(Math.pow(2, 3)); // Power 2^3
console.log(Math.abs(-10.5)); // The neutral or absolute value of the negative number
console.log(Math.random()); // Generates random numbers
console.log(Math.round(Math.random())); // Generates random numbers, and kepps them as a whole number
console.log(Math.random() * 100); // Generates random numbers, and multiplies them by 100
console.log(Math.round(Math.random() * 100)); // Generates random numbers, and multiplies them by 100 and rounds it to the nearest whole number

// Store User Input Project
let email = "manny@gmail.com";
let name = "Manny Johnson";
let userAge = 23;

console.log(`Welcome ${name},
your Email is ${email}, and your age is ${userAge}`);

// Arrays
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers);
console.log(numbers[5]); // Output = 5 'cause index 5 is the number 5

let fruits = ["apple", "orange", "banana"];
console.log(fruits);
console.log(fruits[1]);

let hasHighPower = [true, false, false, true];
console.log(hasHighPower[0]);

// Storing different data types with an array
let theCombo = ["Manny", 24, true, "Giant", null];
console.log(theCombo);

// Nested Array
let ageGroup = [
  [2, 4, 6],
  [5, 10, 15],
  [10, 20, 30],
];
console.log(ageGroup[2]);

// To access the number "30" from the list, we say...
console.log(ageGroup[2][2]);

// Multi-dimensional Arrays
let classList = [
  [
    [0.1, 0.2, 0.3],
    [0.4, 0.5, 0.6],
    [0.7, 0.8, 0.9],
  ],
  [4, 5, 6],
  [7, 8, 9],
];

// Accessing the number "0.6" from the array
console.log(classList[0][1][2]);

// Array functions
let favChar = ["Goku", "Manny", "Luffy"];
console.log(favChar);

// The length of the array
console.log(favChar.length);

// Adding a string to the end of the array
favChar.push("Shao Khan");
console.log(favChar);
console.log(favChar.length);

// Removing an item from the end of an array
favChar.pop();
console.log(favChar);

// Adding an item to the beginning of an array
favChar.unshift("Johnson");
console.log(favChar);

// Removing an item from the beginning of an array
favChar.shift();
console.log(favChar);

// Checking if an array includes an item
console.log(favChar.includes("Manny"));

// Checking for the index of an item
console.log(favChar);
console.log(favChar.indexOf("Goku"));

let greetText = "Holla amigos, I am learning JS";
// Text into an array
console.log(greetText.split(" "));
// Array into text
console.log(favChar.join(", "));
// Reversing the order of an array
console.log(favChar.reverse());
// Slicing an array
console.log(favChar.slice(0, 2));
// Targetting and changing individial item
favChar[0] = "Jason";
favChar[1] = "David";
favChar[2] = "Jackson";
console.log(favChar);

// FUNCTIONS
function heyManny() {
  console.log(heyManny);
}

heyManny("Hey, I'm Manny");

// Passing parmeters to a function

function welcomeUser(users, iq) {
  console.log(`Hello ${users}`);
  console.log("Your IQ is above " + iq);
}

welcomeUser("amigos", 90);
welcomeUser("new users", 70);

function addNumbers(num1, num2) {
  console.log(num1 + num2);
}

addNumbers(10, 20);
addNumbers(100, 200);

// Return in JS Functions

function sum(no1, no2) {
  return no1 + no2;
}

let calcSum = sum(40, 60);
console.log(calcSum);

// Default Values
function studentGreet(greetings = "MannyTheGreat", enrollYear = 2026) {
  console.log(`Hello ${greetings}, your enrollment year is ${enrollYear}.`);
}

studentGreet();

// Random Quote Generator Project
let quotes = [
  "The more you look, the less you see.",
  "Consistency is key",
  "God over everything",
  "Great men never gave up",
  "With God, all things are possible",
];

let randomNumber = Math.round(Math.random() * quotes.length - 1);
console.log(randomNumber);

console.log(quotes[randomNumber]);

// Arrow Functions

// Normal Function
function greetFriend(amigos) {
  console.log(`Hello ${amigos}`);
}

greetFriend("Manny");

// Arrow Function

const greetUerArrow = (username) => {
  console.log(`Hello ${username}`);
};

greetUerArrow("Johnson");

// Arrow Function without the "return" keyword

const addArrow = (add1, add2) => add1 + add2;

const addNumber = addArrow(60, 40);

console.log(addNumber);

// If Statements

// if --- else

let myAge = 24;
if (myAge >= 20) {
  console.log(`Hello Manny, you're ${myAge} years old.`);
} else {
  console.log(`Your age is not known`);
}

// if --- else if --- else

let teenClub = 17;

if (teenClub <= 17) {
  console.log(`You can join the club`);
} else if (teenClub >= 18) {
  console.log(`You are already an adult`);
} else {
  console.log(`Your age is not known to us`);
}

// Comparison Operators
// Greater-than
console.log(10 > 5);

// Greater-than or Equal to
console.log(20 >= 15);

// Less-than
console.log(15 < 20);

// Less-than or equal to
console.log(15 <= 20);

// Loose Equality Operator
console.log(20 == 20);
console.log("10" == 10); // It only read the number, not the data type

// Strict Equality Operator
console.log(20 === 20);
console.log(20 === "20"); // This checked for the data type

// Loose Not Equal-to
console.log(10 != 10);
console.log("15" != 15);

// Strict Not Equal-to
console.log(20 !== 15);
console.log("15" !== 15);

// Logical Operators
let isFast = false;
let isStrong = true;

// Logical AND
if (isFast && isStrong) {
  console.log(`You are fast and strong`);
} else {
  console.log(`You are not strong and fast`);
}

// Logical OR
if (isFast || isStrong) {
  console.log(`You are fast or strong`);
}

// Logical NOT
if (!isFast) {
  console.log(`You're not fast`);
}

// Switch Statements
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's Monday, today!");
    break;
  case "Tuesday":
    console.log("It's Tuesda, today!");
    break;
  case "Wednesday":
    console.log("It's Wednesday, today!");
    break;
  case "Thursday":
    console.log("It's Thursday, today!");
    break;
  case "Friday":
    console.log("It's Friday, today!");
  default:
    console.log("Please enter a day of the week from Monday to Friday only!");
}

// The Ternary Operator
let accessAge = 24;

let result = age >= 18 ? "You are permitted" : "Go back home";
console.log(result);

let testAge = 18;

let testOutput =
  testAge >= 18
    ? testAge < 25
      ? "You are within the age bracket"
      : "You are not within the age brackte"
    : "Go back!";
console.log(testOutput);

// Project Coin Flip Game using Ternary Operator
let coinFlip = Math.round(Math.random());
console.log(coinFlip);

let flipResult =
  coinFlip === 1 ? "HEAD" : coinFlip === 0 ? "TAIL" : "NOT IN RANGE";
coinFlip === 1 ? "HEAD" : "TAIL";
console.log(flipResult);

// Using Switch Statement for the game
switch (coinFlip) {
  case 0:
    console.log("TAILS");
    break;
  case 1:
    console.log("HEADS");
    break;
  default:
    console.log("Number is not in range");
}

// Scope

// Local Scope
function outputMessage() {
  let message = "Hey guys";
  console.log(message);

  if (1 === 1) {
    console.log(message);
  }
}

outputMessage();
// The vaiable decalred within a sub-block cannot be accessed by the main block.
//console.log(message); // This will throw an error

// Global Scope
let greetMessage = "Holla Amigos";

function giveMessage() {
  console.log(greetMessage);
}

// console.log(greetMessage); // This will work because the variable was declared outside the scope and can be used anywhere

giveMessage();

// Objects

let mannyJohnson = {
  height: 180,
  firstName: "Manny",
  lastName: "Johnson",
  income: 0,
  isSmart: true,
};

// Accessing all the properties of an object
console.log(mannyJohnson);

// Accessing the property of an object
console.log(mannyJohnson.firstName);
// console.log(mannyJohnson["lastName"]); // Alternative method to access an object

// Adding a property externally
mannyJohnson.biceps = 100;
mannyJohnson["weight"] = "80kg";

// Modifying?Overriding an existing property
mannyJohnson["income"] = "$2k";
console.log(mannyJohnson);

// Deleting a property
delete mannyJohnson["isSmart"];
console.log(mannyJohnson);

// Nested Objects: Objects in an object, and an array in an object

const devProfile = {
  name: "MannyJ",
  phone: `+44896645948`,
  address: {
    street: "Random Street in UK",
    city: "Manchester City",
    country: "Multiverse",
  },
  favoriteBrands: ["Chevrolette", "Mercedez", "Lamborghini", "Ferrari", "BMW"],
};

// Object Functions

const goku = {
  powerLevel: 9000,
  punch: function () {
    console.log("Goku can punch!");
  },
  fight: function (enemy) {
    console.log("Goku can fight " + enemy);
  },
  // powerUpgrade: function () {
  //   this.powerLevel += 1000;
  // },
  // short syntax
  powerUpgrade() {
    this.powerLevel += 1000;
  },
};

goku.punch();
goku.fight("Savitar😂");

goku.powerUpgrade();
console.log(goku.powerLevel);

// Classes
class Superhero {
  constructor(superheroName, powerForce) {
    this.superheroName = superheroName;
    this.powerForce = powerForce;
  }

  printName() {
    console.log(this.superheroName);
  }
  printPower() {
    console.log(this.powerForce);
  }
}

const superman = new Superhero("Super Man", "200X");
const wolverine = new Superhero("Wolverine", "100X");

superman.printName();
superman.printPower();

wolverine.printName();
wolverine.printPower();

// Project: User Profile System.
class UserProfile {
  constructor(username, age, country) {
    this.username = username;
    this.age = age;
    this.country = country;
    this.loginStatus = false;
  }

  login() {
    this.loginStatus = true;
    console.log(`The user ${this.username} is now logged in`);
  }
  logout() {
    this.loginStatus = false;
    console.log(`The user ${this.username} is now logged out`);
  }

  getUserInfo() {
    console.log(`
      Username: ${this.username}
      Age: ${this.age}
      Country: ${this.country}
      Login Status: ${this.loginStatus}
      `);
  }
}

const manny = new UserProfile("MannyTheGreat", 24, "Multiverse");
const jonex = new UserProfile("J-Jonex", 19, "London");

manny.logout();
manny.getUserInfo();

jonex.login();
jonex.getUserInfo();

// Keys, Values, and Entries

const user = {
  username: "Manny",
  subscriber: 1300,
  funds: "$100k",
};
// Key
console.log(Object.keys(user));
// value
console.log(Object.values(user));
// Entries
console.log(Object.entries(user));
// Accessing the entries
console.log(Object.entries(user)[2][1]);

// Object.freeze
const newUser = {
  age: 24,
  username: "MannyTheGreat",
};

// Manipulting an object
newUser.job = "Developer";
console.log(newUser);

// ======> Using the object.freeze
Object.freeze(newUser);

newUser.username = "Manny Dev";
console.log(newUser);

// Primitive and Complex Types
// Primitive
let score = 100;

const scoreCopy = score;
score += 100;
console.log(score);
console.log(scoreCopy);

// Complex: an Array or Object
const scores = [1, 2, 3, 4, 5];
const userDetail = {
  name: "Johnson",
  age: 19,
  isIntelligent: true,
};

const scoresCopy = scores;
scores[0] = 20;
console.log(scores);
console.log(scoresCopy);

// Objects in JavaScript
console.log(typeof console);
// Breaking the build of console.log
const console1 = {
  speed: 100,
  log(greet = "Hello guys") {
    // I passed the value into the METHOD/FUNCTION directly from the parameters part
    console.log(greet);
  },
};

console1.log();
console1.log(typeof console1.log);

Math.random();

// Breaking the build of Math.random()
const Math1 = {
  random(randomNumber) {
    return Math.random(randomNumber);
  },
};

console.log(typeof Math1.random());

// For Loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// While Loop
let figure = 0;

while (figure < 10) {
  console.log(figure);
  figure++;
}

// Do-while Loop
let scoreD = 10;
do {
  console.log(scoreD);
  scoreD++;
} while (scoreD < 10);

// For-in Loop
const animeChar = {
  name: "Scorpion 🦂",
  powerLevel: 10000,
};

for (let profile in animeChar) {
  console.log(profile);
  console.log(animeChar[profile]);
}

// For-of Loop
const mortalKombat = [
  "Liu Kang",
  "Scorpion",
  "Shao Khan",
  "Johnny Cage",
  "Raiden",
  "Sub-Zero",
];

for (let characters of mortalKombat) {
  console.log(characters);
}

// Using For Loop to get the same result
for (let i = 0; i < mortalKombat.length; i++) {
  console.log(`
    ${mortalKombat[i]}
    `);
}

// Nested For Loops
for (i = 0; i < 3; i++) {
  for (j = 0; j < 5; j++) {
    console.log(`Therefore: 
      I: ${i}
      J: ${j}`);
  }
}

const arrayNumbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let arr of arrayNumbers) {
  for (let number of arr) {
    console.log(number);
  }
}

// converting a string to another data type
// To Number
console.log(Number("10") + 20);

// To float
console.log(parseFloat("10.5") + 30);

// converting a number to a string
console.log(String(10) + 45); // ===> 1045

// Converting to Boolean
console.log(Boolean(20));
console.log(Boolean(0));
console.log(Boolean(-5));
console.log(Boolean("Hello"));
console.log(Boolean(""));

let testUsername = "";

if (testUsername) {
  console.log("Valid username!");
} else {
  console.log("Input a username");
}

// Map method

const numArr = [2, 4, 6, 8, 10];
let newNumArr = numArr.map((num) => num * 2);
console.log(newNumArr);

let tripleNumArr = numArr.map((num) => num * 3);
console.log(tripleNumArr);

let squareNumArr = numArr.map((num) => num * num);
console.log(squareNumArr);

// Filter Method
const filterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterArr);

// Filter for Even Number

const evenFilter = filterArr.filter((num) => num % 2 === 0);
console.log(evenFilter);

// Filter for Odd Numbers

const oddFilter = filterArr.filter((num) => num % 2 === 1);
console.log(oddFilter);

// Reduce Method

const reduceArr = [1, 2, 3, 4, 5, 6, 7, 8];

// const reduceResult = reduceArr.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );

const reduceResult = reduceArr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(reduceResult);

// For each method

const forEachArr = [1, 2, 3, 4, 5];
console.log(forEachArr);

forEachArr.forEach((num) => {
  console.log(num * 10);
});

// Find Method

const usersArr = [
  {
    name: "Manny",
    powerLevel: 10000,
  },
  {
    name: "Jonex",
    powerLevel: 12000,
  },
  {
    name: "Ikwish",
    powerLevel: 15000,
  },
];

const foundUser = usersArr.find((user) => {
  return user.name === "Manny";
});

console.log(foundUser);

// Some and Every
const arraySE = [1, 9, 20, 42, 15, 63];

// SOME method

const somePassed = arraySE.some((num) => {
  return num > 10;
});
console.log(somePassed);

// EVERY method
const everyPassed = arraySE.every((num) => {
  return num > 90;
});
console.log(everyPassed);

// Sort method
const devRoles = [
  "DevOps",
  "Software Dev.",
  "Blockchain Dev.",
  "QA Automation Engineer",
];

console.log(devRoles.sort());

const numSort = [2, 11, 32, 5, 21, 9];

// Sorting according to number order
console.log(numSort.sort());

// Sorting according to number and the of order value
console.log(
  numSort.sort((a, b) => {
    return a - b;
  })
);

// Reverse order of value
console.log(
  numSort.sort((a, b) => {
    return b - a;
  })
);

// PROJECT: Todo App in the console

// The Todo Class
class Todo {
  constructor(title) {
    this.title = title;
    this.completed = false;
  }

  completeTodo() {
    this.completed = true;
  }
}

const toDos = [];

function addTodo(title) {
  const toDo = new Todo(title);
  toDos.push(toDo);
}

function changeCompletionStatus(index) {
  toDos[index].completeTodo();
}

function removeTodo(index) {
  toDos.splice(index, 1);
}

addTodo("Learn Coding");
addTodo("Go gyming");
addTodo("Go hiking");
addTodo("Go skydiving");

changeCompletionStatus(0);
changeCompletionStatus(1);

removeTodo(0); // Initially, todo was 4, but it's now 3 'cause of the .splice method that was used to reduce the array
console.log(toDos);

// The new things I am about to do...
