// Functions

let test = 1000;

function myFunction(a, b){
    // let test = 2000;     // this will not replace the 100 value
    test = 2000;            // this will replace the 1000 value
    return a * b;
}

let a = 10;
let b = 20;
let c = myFunction(a, b);
console.log(c);             // 200
console.log(test);          // 2000