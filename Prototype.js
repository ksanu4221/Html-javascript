// object contructor
// helps to create new objects of same type


function Person(name,age){
  this.age=age;
  this.name=name;
}

const p1=new Person("sanu",20)
const p2=new Person("vishakaha",19)

console.log(p1);
console.log(typeof(p2));

//Prototype is js object
// helps to add new properties or method to existing constructor object


Person.prototype.add="bangalore"
Person.prototype.print=()=>{console.log("print it");}
const p3=new Person("sanu",20)
console.log(p3.add);

console.log(p1.print());
