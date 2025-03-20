const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://example.com/winner-team") {
                resolve({
                    auth: true,
                    status: 200, data: {
                        message: "Success",
                        data: ["Jhon", "Raju", "Anjali", "Sakshi"]
                    }
                });
            } else {
                reject({
                    status: 404,
                    message: "No Users found."
                });
            }
        }, 2000);
    });
};
fakeFetch("https://example.com/winner-team").then((res) => {
    console.log(res)
    // if(res.auth){
    //          document.getElementById("para").innerHTML=`verified`
    // }

    res.auth?document.getElementById("para").innerHTML=`verified`:
    document.getElementById("para").innerHTML=`not verified`
    // document.getElementById("para").innerHTML =
    //     `Congratulation to the members of winning team ${res.data.data.map((item) => item)}`
}
).catch((err) => console.log(err))
// your code here
// Output on the DOM should be:
// Congratulation to the members of winning team Jhon, Raju, Anjali, Sakshi, great work k
