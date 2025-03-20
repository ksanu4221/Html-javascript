function addition(a,b){
   return a+b
}

function substraction(a,b){
   return a-b
}

function capitalize(name){
    // const updatedName=  name.toUpperCase()
  const updatedName=  name.charAt(0).toUpperCase().concat(name.slice(1)) 
      return updatedName;
}

// capitalize("sanu")





module.exports={addition,substraction,capitalize}