// 6.	Write an ES6 function which filters out the products which have a price greater than 40.
const productData = [
{prodName: "Dairy Milk", price: 10},
{prodName: "Dairy Milk Silk", price: 70},
{prodName: "Five Star", price: 20},
{prodName: "Mars", price: 50}]

console.log(productData.filter((product)=>product.price>40));

