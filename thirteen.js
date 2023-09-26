// loops in js

let num = [3, 4, 5, 56, 60];

// Classical for loop
// for(let i = 0; i < num.length; i++){
//     console.log(num[i]);
// }

// for each loop

num.forEach((element)=>{
    console.log(element * element);
})

console.log(num);

let myName = "Rishi";
console.log(myName);
let arr1 = Array.from(myName);
console.log(arr1);

// for...of loop (shortcut of classical for loop)
for (let i of num){
    console.log(i);
}

// for..in loop (give the keys - indexes)
for(let i in num){
    console.log(i)
}


// map()

let arr = [34, 64, 76];
let a = arr.map((value)=>{
    console.log(value)
    return value * 2
})
console.log(a)

let arr2 = [34, 49, 50, 64, 76];
let a2 = arr2.map((value, index, array)=>{
    console.log(value, index, array)
    return value * 2
})
console.log(a2)


// filter()

let res = arr2.filter((value)=>{
    return value<=50;
})
console.log(res)

// reduce
// let res2 = arr2.reduce((v1, v2)=>{
//     return v1 + v2;
// })
// console.log(res2)
// console.log(typeof res2)

let reduce_function = (v1, v2)=>{
    return v1 + v2;
}
let total = arr2.reduce(reduce_function)
console.log(total)