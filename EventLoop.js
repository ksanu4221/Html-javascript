// event loop is a mechanism to handle async operation very
//  effectively without blocking any further operation
//  event loop continuously check the call stack and task ques stack ,if call stack is empty then it push 
// task from que stack to call stack


// call stack== every function must go through call stack and when function is return ,then its is remove from
//  call stack

// web apis==== timer, setTimeout, fetch,dom, when web api is resolved then its callback is push to callback stack

// task que stack ===if callback is resolved then it is push to microtask ques.
  // promise>>> callback

// console.log('1: Start'); // Synchronous

function asyncOperation(callback) {
  console.log('2: Inside asyncOperation');
  setTimeout(callback, 2000); // Web API (setTimeout)
  console.log('3: Async operation scheduled');
}
function asyncOperation2(callback) {
  console.log('4: Inside asyncOperation2');
  setTimeout(callback, 1000); // Web API (setTimeout)
  console.log('5: Async operation scheduled');
}
const mypromise= new Promise((resolve,reject)=>{
  if(true){
    resolve("this is resolve")
  }
})
mypromise.then((res)=>console.log(res))
function myCallback() {
  console.log('7: Callback called after async operation complete');
}
function myCallback2() {
  console.log('8: Callback2 called after async operation complete');
}
asyncOperation(myCallback);
asyncOperation2(myCallback2);

console.log('6: End'); // Synchronous


// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout 1");
// }, 0);

// setTimeout(() => {
//     console.log("Timeout 2");
// }, 100);

// Promise.resolve().then(() => {
//     console.log("Promise 1");
// });

// Promise.resolve().then(() => {
//     console.log("Promise 2");
// });

// console.log("End");