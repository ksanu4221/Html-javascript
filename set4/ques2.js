// convert even to odd number by adding 1

var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9] 

console.log(numArr.map((num)=>num%2===0?num:num+1));

// captalize it
var words = ['eat', 'sleep', 'code', 'repeat', 'neog', 'community'] 

// console.log(words.map((word)=>word.charAt(0).toUpperCase()+word.slice(1)));
console.log(words.map((word)=>word.toUpperCase()));
