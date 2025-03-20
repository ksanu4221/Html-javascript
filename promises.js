//promises  
//javascript object use to handle asynchronous operations
//stages  1.pending  2.fullfilled or resolve 3. rejected
//methods  1 .then  2 .catch 3.finally
//inbuilt method that return a promise   fetch(),axios()
//fetch(url).then((res) => console.log(res)).catch((res) => console.log(res));

// const promise=new Promise((resolve,rejected)=>{
//      if(false){
//         resolve("this is resolved")
//      }
//      else{
//         rejected("this is rejected")
//      }
// })

// promise.then((res)=>console.log(res)).catch((res)=>console.log(res)
// )


const url='https://jsonplaceholder.typicode.com/todos/2'

  const fetchdata=()=>{
          fetch(url).then((res)=>console.log(res.data)).catch((res)=>console.log(res)
        //   response is resolved   or rejected value
          )
  }
fetchdata()
