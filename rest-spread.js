// // SPREAD OPERATOR

// // spread operator spread out the existing array and make copy of that array pointing to diff ref number
// // const arr1=[1,2,3,4]
// // const arr2=["sanu","kumar"]

// // const arr3=[...arr1,...arr2]

// // const arr4=[...arr1]

// // console.log(arr1===arr4);


// let obj={"name":"sanu","age":21}

// const obj2={"add":"bangalore"}

// // const obj3={...obj,...obj2}

// // console.log(obj3);

// // obj.names="kumar"


// console.log(obj);

// console.log({...obj,age:23});


// REST OOPERATOR

// rest operator is used to create a array for numbers of parameter passed into a function
function fun(...num){
    console.log(num);
    
}
fun(1,"Sanu",2)



