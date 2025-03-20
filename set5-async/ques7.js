// Use this URL - https://example.com/api/chat to make a fake fetch call and handle errors
//  if any. Show a proper message to the user on the DOM, as per the status and message 
//  received from the server. A fakeFetch has been provided. 
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {     setTimeout(() => {
      if (url === "https://example.com/api/chat") {         reject({           status: 503,
        message: "Service Unavailable"
      });     } else {         resolve({           status: 200,         data: {
            message: "Success"
        }       });
    }
  }, 2000);
});
};

fakeFetch("https://example.com/api/chatt").then((res)=>{
    console.log(res)
           document.getElementById("para").innerHTML=`status: ${res.status}  message: ${res.data.message}`}
).catch((err)=>
    // console.log(err)
    document.getElementById("para").innerHTML=`status : ${err.status} message: ${err.message} `
)

