const obj={
    "add":"bangalore",
    "age":23,
    "print":function(a='kumar sanu',b='naina kumari'){
        console.log(`this is my address ${this.add} ${this.age} ${a} ${b}`);
    }
}
function print(name){
    console.log(`this is my address ${this.add} and my name is ${name}`);
}

const newObj={
    "add":"bhopal",
    "age":24
}
// obj.print.call(newObj)
obj.print();
// apply

// obj.print.apply(newObj,['sanu','motki naina'])

// this keyword is not available in arrow function.use regular function instead
// obj.print.call(newObj)
// print.call(newObj,"sanu")
// call(), apply(), and bind() are used to control the this keyword in JavaScript functions.
// They are commonly used when borrowing methods or setting explicit this values.
// borrowing methods means ,suppose obj2 dont have a function like as obj1 have.then using call we can use borrow method of 
// obj1 to obj2
// call method is use to invoke function immediately after passing a argument
// apply method is use to invoke a function immediately after passing a array as argument
// bind method is use to return a function 

// const newFun=print.bind(newObj)
// newFun()


