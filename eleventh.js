// String Methods:

let text = "I'm Rishi Raghuvanshi working as a Trainee Software Developer."

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

let one = text.slice(4,21);     // include 4, not include 21th
let two = text.slice(34);       // 34th to last
let two2 = text.slice(-5);       // will start from last
let three = text.substring(5, 10)
console.log(one);
console.log(two2);
console.log(three);

// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().

// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.


// Replacing String Content
// The replace() method replaces a specified value with another value in a string:
let four = text.replace("Raghuvanshi", "Raghu1c");
console.log(four);

// The replace() method does not change the string it is called on.

// The replace() method returns a new string.

// The replace() method replaces only the first match


// text = text.replaceAll("Cats","Dogs"); // will replace all Cats with Dogs

let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2);

text2 = text1.toLowerCase();
console.log(text2);

let text3 = "Hello";
let text4 = "World";
let text5 = text3.concat(" ", text4);
console.log(text5);

// The trim() method removes whitespace from both sides of a string:
let text6 = "     Hell      ";
console.log(text6.trim());

// The trimStart() method works like trim(), but removes whitespace only from the start of a string.

// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

// There are 3 methods for extracting string characters:

// charAt(position)     
// charCodeAt(position)     ASCII code at position
// Property access [ ]


const arr = text.split(" ");    // will split string by spaces
console.log(arr);


// String Search Methods
// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()