// // synchronous function is also called blocking function
// function sync(){
//   console.log("this is sync");
//   // throw new Error("thiis is eerror");
// }

// // asynchronous function is also called as non blocking function

// function async(){
//   setTimeout(()=>{
//     throw new Error("thiis is eerror");
//     console.log("this is async");
//   }
//   ,1000
// )
// }
// async()

// sync()


function fun(){
  let count=0;
  const id=setInterval(()=>{
    console.log(count++)
  // console.log(id)
  if(count>5){
    clearInterval(id);
  }
},
   1000
  )

}

fun()


