// 8.	Write an ES6 function that takes an array of strings and returns the first string that is longer than
// 8 characters.
// const names = ["Mohan", "Anjali", "Geetanjali", "Ankit", "Bhanu Kumar", "Ramakrishnan"]  
// Your code here
// console.log(isNamesGreaterThan8(names));
// Output: "Geetanjali"

// console.log(names.filter((item)=>item.length>8)[0]);


const students = [
    { name: "John", grade: "B" },
    { name: "Mary", grade: "A" },
    { name: "Sam", grade: "C" },
    { name: "Sarah", grade: "A" },
  ];
 console.log(  students.filter((student)=>student.grade==="A")[0]);
  