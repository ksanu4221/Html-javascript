
const people = [
 { name: 'Raj', age: 28 },
 { name: 'Swapnil', age: 42 },
 { name: 'Anushka', age: 35 }
];
// Your code here
// console.log(names); // Output: ['Raj', 'Swapnil', 'Anushka']

const names=people.map((item)=>item.name)
console.log(names);
