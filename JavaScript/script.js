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

// Power
console.log(2 ** 3); //2*2*2 = 8

// The += || -= || /= || %=
let number = 20;
number += 30; // number = 20 + 30 = 50
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

// String Functions

let userName = "    MannyTheGreat   ";
console.log(userName);

// .length fucntion
console.log(userName.length);

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
console.log(userName.indexOf("T"));

// .trim()
console.log(userName.trim());

// .split()
console.log(userName.split(""));

// Template Literals
let roleName = "Manny Johnson";
let roleTitle = "Software and Blockchain Dev.";
console.log(`I am ${roleName}, and I am learning ${roleTitle}`);

// Math Functions
console.log(Math.PI);
console.log(Math.round(2.9));
console.log(Math.ceil(9.99));
console.log(Math.floor(4.5));
console.log(Math.max(5, 10, 30, 7));
console.log(Math.min(2, 0.5, 9, 6, 4));
console.log(Math.sqrt(16));
console.log(Math.pow(2, 3)); // 2^3
console.log(Math.abs(-10.5));
console.log(Math.random());
console.log(Math.round(Math.random()));
console.log(Math.random() * 100);
console.log(Math.round(Math.random() * 100));

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

// if (day === "Monday") {
//   console.log("It's a Monday, today!");
// }
// else if (day === "Tuesday") {
//   console.log("It's Tuesday, today!");
// }
// else if (day === "Wednesday") {
//   console.log("It's Wednesday, today!");
// }
// else if (day === "Thursday") {
//   console.log("It's Thursday, today!");
// }
// else if (day === "Friday") {
//   console.log("It's Friday, today!");
// }
// else if (day === "Saturday") {
//   console.log("It's Saturday, today!");
// }
// else if (day === "Sunday") {
//   console.log("It's Sundday, today!");
// }
