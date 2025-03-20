const apiurl = "https://dummyjson.com/users/"; // API endpoint

const fetchData=async(url)=>{
        try{    
                const response  = await fetch(url)
                if(response.ok){
                    const data=await response.json();
                    console.log(data.users);
                    const paratag= document.getElementById('para')
                    // paratag.innerHTML=`Address : ${data.address.address} city: ${data.address.city}`
                    paratag.innerHTML=data.users.map((user)=>`Address :${user.address.address} city: ${user.address.city}`)
                    console.log(data);
                }
                else{
                    // console.log(response.status);
                    const error = new Error("Failed to fetch data");
                    error.status = response.status; // Add HTTP status code as a custom property
                    throw error; // Throw the custom error
                }
        }
        catch(error){
                        console.log(`${error.message} ${error.status}`);
        }
}
fetchData(apiurl);
