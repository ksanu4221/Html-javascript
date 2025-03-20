const axios  = require("axios");


const apiurl="https://dummyjson.com/users/1"   // api endpoint

const fetchData=async(url)=>{
      try{
              const response= await  axios.get(url);
              if(response.status===200){
                 console.log(response);
                //   const paratag= document.getElementById('para')
                //   paratag.innerHTML=response.data
              }
              else{
                const error= new Error("something went wrong");
                error.status=response.status;
                throw error;
              }
      }
      catch(error){
        console.log(`error ${error.message} ${error.status}`)
      }
      }
fetchData(apiurl);
