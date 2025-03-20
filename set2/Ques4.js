// 5.	Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.
const studentName = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"]
// Your code here
// console.log(studentNames);
// Output: ["Anjali", "Arpit", "Ankit"]
const newArray=studentName.filter((item)=>item.startsWith('A'))
console.log(newArray);
