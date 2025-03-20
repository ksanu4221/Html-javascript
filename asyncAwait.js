const axios = require('axios');

const callData = () => {
  console.log("calldata");
  console.log("sanu");
}
const url = 'https://jsonplaceholder.typicode.com/photos'
const fetchData = async () => {

  const response = await axios.get(url)

  //  await will pause the further execution of code of next line untill promise is fullfilled or rejected
  try {
    console.log(response);
    
    // console.log("async Await")
    // console.log(response.data.map((item) => item.title));
  }
  catch (error) {
    console.log(error);

  }
}
fetchData()
// console.log("hi there");
// callData();







