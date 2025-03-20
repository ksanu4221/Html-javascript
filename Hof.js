// function hof(...arg){

//     return ()=>{
       
//         return arg.map((item)=>item*2)
        
//     }
// }

// const fun=hof(2,3,4)
// console.log(fun());
//  inbuilt higher order functions are map,filter,reduce
// A higher-order function is a function that either takes
//  one or more functions as arguments or returns a function as its result


function HigherFun(name){

     return (add)=>{
        console.log(`Hi I am ${name} and my address is ${add}`);
        
     }
}

const newFun=HigherFun("sanu")

newFun("bangalore");

