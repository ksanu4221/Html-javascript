const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {     setTimeout(() => {
        if (url !== "https://example.com/api/itemlist") {         reject({           status: 404,
          message: "Items list not found."
        });     } else {         resolve({           status: 200,         data: {
              message: "Success",           data: [
                { itemName: "Bread", price: 30 },
              { itemName: "Water Bottle", price: 50 },
              { itemName: "Dairy Milk", price: 20 }
            ]
          }       });
      }
    }, 2000);
  });
  }
  fakeFetch("https://example.com/api/itemlist").then((res)=>{

        console.log(res.data.data);
        const paratag= document.getElementById("para")
        paratag.innerText=res.data.data.map((item)=>`${item.itemName} ${item.price}`)
})
  .catch((res)=>{
         const divtag=document.getElementsByClassName("output")
          divtag.innerHTML=res.message
        }
)
