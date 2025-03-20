// Use this URL - https://example.com/photo to make a fake fetch call and show an 
// image on the DOM using the photo link received in the response. Use HTML, CSS & 
// JS template in REPL or
// Vanilla template in CodeSandbox for this question.
const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://example.com/photo") {
                resolve({
                    status: 200, data: {
                        photo: {
                            link: "https://dthezntil550i.cloudfront.net/1d/0014792504/572eebfb-9ff2-462f-ac5d-f4fe1eb0db6f.jpg"
                            , title: "Random Image"
                        }
                    }
                });
            } else {
                reject({
                    status: 404,
                    message: "No order found"
                });
            }
        }, 2000);
    });
};
fakeFetch("https://example.com/photo").then((res) => {

    console.log(res.data.photo.link);
    document.getElementById("image").src = res.data.photo.link

}
)
   
.catch((error)=>console.log(error))