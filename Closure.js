// function timer(){
//     console.log("outer");
    
//     let count=0;
//   return {
//     inc:
//     //closure fun
//     ()=>{
//         console.log(count++);
        
//     },
//     dec:
//     //closure fun
//     ()=>{
//         console.log(count--);
        
//     }
//   }
// }
// const innerfuns=timer();
// innerfuns.inc();
// innerfuns.dec();


// // closure fun is fun that can access property of outer fun even after outer fun is called


function outer(){
  let count=0;
  console.log("hi this is outer fun called");
  return{
    counter:()=>{
         const TimerId=setInterval(()=>{
          console.log(count++);
          // console.log(TimerId);
          
         if(count>5){
          clearInterval(TimerId);
         }},1000)
    }
  }
}
const closure=outer()

closure.counter();