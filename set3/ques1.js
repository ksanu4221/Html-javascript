// // NAINA 19-02-2025 22:43 • Write an ES6 function that takes an array 
// // of objects representing students with properties name and score, and returns the 
// // average score of all the students using the reduce function. 
// const students = [{ name: 'John', score: 80 }, { name: 'Jane', score: 90 },
// { name: 'Bob', score: 75 }, { name: 'Alice', score: 85 }]


// const avg = students.reduce((acc,curr) => acc+=curr.score,0)
// console.log(avg);


//  console.log(avg/students.length);

// ;

let array = [2, 3, 4]

array.map((_, mapIndex) =>{

    const subarr = array.filter((_, index) => mapIndex !== index);

    if(subarr.reduce((acc, curr) => acc + curr, 0) === 6){

        console.log(mapIndex);
        console.log(subarr);
    }

}
)

