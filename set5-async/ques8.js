// . Use this URL - https://example.com/api/itemlist to make a fake fetch call and 
// list out all the items as an ordered list on the DOM. A fakeFetch has been provided.
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {     setTimeout(() => {
      if (url === "https://example.com/api/itemlist") {         resolve({           status: 200,           message: "Success",           data: [
            { itemName: "Bread", price: 30, quantity: 10 },
            { itemName: "Water Bottle", price: 50, quantity: 50 },
            { itemName: "Dairy Milk", price: 20, quantity: 30 }
          ]
        });       } else {         reject({           status: 404,
          message: "Items list not found."
        });
      }
    }, 2000);
  });
};

fakeFetch("https://example.com/api/itemlist").then(res => {
  console.log(res.data);
    document.getElementById("para").innerHTML=
    `<ol>${res.data.map((item)=>`<li>${item.itemName} -- INR ${item.price} -- ${item.quantity}</li>`)}
    </ol>`
}
  ).catch((res)=>{
    console.log(res);
    
  })
