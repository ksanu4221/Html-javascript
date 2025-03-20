// . Write an ES6 function that takes an array of strings and returns an object with the count of each
// string.
const fruits = [
  'apple',
  'banana',
  'banana',
  'cherry',
  'apple',
  'apple',
  'banana',
]
// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }
// let obj={}
// fruits.map((fruit,index)=> {
    
//   let  filteredFruits= fruits.filter((item)=>fruits[index]===item)
//        let count =filteredFruits.length
//         // obj[fruit]=count
//         obj={...obj,[fruit]:count}
//     }
// )
// console.log(obj);

// map iterate 1 loop toh filter saara loop 

const fun=()=>fruits.reduce((acc,curr)=>{  
   acc[curr]=1+(acc[curr]||0);
   return acc
},{}
)
console.log(fun());

