let arr = [4, 78, 8, 3, 6, 0, 12, 34];
let maxnum = 0;

console.log(arr.reduce((acc,curr)=> 
    acc=(acc>curr)?acc:curr 
,0)
);



