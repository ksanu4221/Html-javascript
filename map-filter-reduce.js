// these three functions are of array methods

// map==>return a array with same number of elements
// filter==>  return array with filterred element 
// reduce==> return a value of accumulations of array's elements


const array=[1,2,3,4,3]
const objs=[{"name":"sanu","age":21},{"name":"sa","age":24},{"name":"san","age":26}]
const newObj=objs.map((item,index)=>item.name)

console.log(newObj);

// const newArray=array.filter((item,index)=>item%2===0);
// console.log(newArray);
// console.log(newArray.map((item)=>item*3));
// people=[
//     { name: 'John', age:25},
//     { name: 'Jane', age:30},
//     { name: 'Alex', age:22}
//     ]
console.log(array.reduce((acc,curr)=>acc*curr,1));
    
