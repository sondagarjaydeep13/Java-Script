//...........................Java Sript Method................................//

// Replace and ReplaceAll

// const string = "Hello World";
// const newstring = string.replace("Hello", "Hii");
// console.log(newstring); // Here output:Hii World
// console.log(string); // output:Hello World

// var string =
//   "hii Lajk hii lak hi hii hii kale hii hii bms jkjs hii hii slslhi hii";
// var newString = string.replaceAll("hii", "Hello");
// console.log("Second :" + newString);
// console.log("first :" + string);

// string = newString;
// console.log(newString);

// toLowercase and toUppercase

// const string = "hjg D jljdld EHDKHDKHD khk HDDKjhdkjdh ";
// const result = string.toLowerCase();
// const result2 = string.toUpperCase();
// console.log(result2);

// const SKEY = "thisismykey";

// const user = "thIsISmykey";
// const user2 = user.toLowerCase();
// if (SKEY == user2) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// concat
// const str1 = "Hello";
// const str2 = "World";

// const result = str1.concat(" ", str2);
// console.log(result);

// trim() and trimStart() & trimEnd()

// const str = " Hello World ";

// const first = str.trim();
// const second = str.trimStart();
// const third = str.trimEnd();
// console.log(first.length);
// console.log(second.length);
// console.log(third);

// padStart()  and padEnd()
// const str = "5";
// const result = str.padEnd(3, "0");
// const result2 = str.padStart(3, "0");
// console.log(result);
// console.log(result2);

// const number = 500;
// const result = number.toString().padEnd("6", "X");
// console.log(result);

// charAt()-find char using index position

// const str = "Hello World";
// const result = str.charAt(6);
// console.log(result);
// const result = str.charCodeAt(4);
// console.log(result);

// console.log(str[1]);

// for (var i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// split()->converting string to array

// const str = "Hello World";
// const result = str.split("");
// console.log(result);

// reverse()
// const result = str.split(" ").reverse();
// console.log(result);

//join()
// const result = str.split(" ").reverse().join(" ");
// console.log(result);

// ------------------number-----------------------

// const a = Number.isSafeInteger(10.25);
// Number.isInteger(10);
// console.log(a);
// const num = BigInt(999999999999n);
// =>BigInt is second numeric data type in javascript
//toString()=>conver number to string
// const num = 12563;
// const result = num.toString();
// console.log(result);
// console.log(num + 10);

// const num = 1523.23658;
// const result = num.toFixed(2);
// console.log(result);

// const array = [155.23568, 125.3657, 458.256855, 542.58946, 466.45555];
// const result = array.forEach((e) => {
//   const data = e.toFixed(2);
//   console.log(parseFloat(data) + 10);
// });
//toPrecision() => returns a string, with a number written with a specified length

// const num = 124.052;
// const result = num.toPrecision(2);
// console.log(result);

// var student = {
//   name: "Kamal",
//   age: 22,
//   gender: "male",
// };
// const result = JSON.stringify(student);
// console.log(result);

localStorage.setItem("hello", "World");
const myhello = localStorage.getItem("hello");
console.log(myhello);
