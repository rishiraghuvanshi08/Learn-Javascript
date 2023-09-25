// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// The Object Datatype
// The object data type can contain:

// 1. An object
// 2. An array
// 3. A date

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");


// Most programming languages have many number types:

// Whole numbers (integers):
// byte (8-bit), short (16-bit), int (32-bit), long (64-bit)

// Real numbers (floating-point):
// float (32-bit), double (64-bit).

// Javascript numbers are always one type:
// double (64-bit floating point).

let a = BigInt("123456789012345678901234567890");
console.log(a);

let u;

// typeof ""             // Returns "string"
// typeof "John"         // Returns "string"
console.log(typeof a);
console.log(typeof length);
console.log(typeof lastName);
console.log(typeof x);
console.log(typeof person);
console.log(typeof cars);
console.log(typeof date);
console.log(u);

