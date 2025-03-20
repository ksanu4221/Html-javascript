

const cartA = ["apples", "bananas", "grapes", "oranges", "pears", "pineapple"]
const cartB = ["potatoes", "beans", "carrots", "spinnach", "kale", "broccoli"]

function swap(){
  
  for(let i=0; i<cartA.length;i++){
    
    if(i%2===0){ let tempA =cartA[i];
 let tempB=cartB[i]
  cartA[i]=tempB
  cartB[i]=tempA
    
}
  }
  return {cartA,cartB}
}

console.log(swap(cartA,cartB))