// const array=[12,21,34,41,51,66,76,86,97]
const arr=[1,2,2,3,4,6,7,8,9]

// map ,filter,reduce function is only use for array

// const array2=array.map((x)=> x*2)
// console.log(array2);

//filter

// const array3=array.filter((y)=>y%2===0)

// console.log(array3);


// const array4=array.filter((index)=>(index+1)%3===0)

// console.log(array4);


// const array5=arr.filter((x,index)=>x===index)

// console.log(array5);

const sum=arr.reduce((curr,acc)=>curr+acc)

console.log(sum);
