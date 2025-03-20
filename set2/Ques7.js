// 7.	Write an ES6 function that takes an array of numbers and returns the first number that is divisible by 7.
const numbers = [1, 2, 3, 21, 14, 7];

const newArray=numbers.filter((num)=>num%7===0)
console.log(newArray[0]);


