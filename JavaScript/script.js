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
