const obj=["sanu","vishkha",121,234]

// slice(starting index,ending index excluding last index element)
// slice return  copy of an existing array

// splice(starting index,delete count)
// splice modify existing array



const obj2=obj.slice(0,-1)
console.log(obj2);

obj.splice(1,2)
console.log(obj);

