// JavaScript Variables can be declared in 4 ways:

// Automatically
// Using var
// Using let
// Using const

x = "100";
y = 200;
console.log(typeof x);
console.log(typeof y);

let a;
console.log(a);     // Undefined
// let a = 20; // give error - can only be declared once and can assign multiple times

const c = 20;
// c = 10;     // will give error
// console.log(c); 

console.log("-------------");

// **let**
// The let keyword was introduced in ES6 (2015)

// Variables defined with let cannot be Redeclared

// Variables defined with let must be Declared before use

// Variables defined with let have Block Scope

let xy = 10;
// Here xy is 10
console.log(xy);
{
    xy = 2;
    console.log(xy);
    // Here xy is 2
}

console.log(xy);
// Here xy is 2

// --------------------------------
// var q = 2;   // Allowed
// let q = 3;   // Not allowed

{
// let q = 2;   // Allowed
// let q = 3;   // Not allowed
}

{
// let q = 2;   // Allowed
// var q = 3;   // Not allowed
}


// **const**
// The const keyword was introduced in ES6 (2015)

// Variables defined with const cannot be Redeclared

// Variables defined with const cannot be Reassigned

// Variables defined with const have Block Scope

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
console.log(cars);