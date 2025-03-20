
// web api storage === it is of two type 1. session storage , 2.local storage

// local storage web api stores the data locally .it will store the data even we close the window or tab.
// we can remove the data from local storage using sessionStorage.removeItem()

// session storage is storage web api .it is use to store the data in a session.when a tab or window 
// is closed then storage will be cleared

//  web api storage always store the data in key and value

// sessionStorage.setItem(key,value)


// function save(){
//  const inputData=document.getElementById("inputData").value
//  sessionStorage.setItem("mydata",inputData)
//  document.getElementById("showData").innerText=`data is saved and this is my ${inputData}`
// }


function save(){
    console.log(" save button clicked");
    
      const mydata=document.getElementById("inputData").value;
      localStorage.setItem("inputdata",mydata)
        const data=  localStorage.getItem("inputdata")
        document.getElementById("para").innerHTML= `this is my data :${data}`
}
 function htaoyar(){
    console.log("Clear button clicked");

    // Remove the item from localStorage
    localStorage.removeItem("inputdata");
    document.getElementById("para").innerHTML= `this is my data :${data}`

}