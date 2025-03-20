function findDublicate(arr) {
    const uniqueNum = new Set();
    const duplicate = new Set();
    for (const x of arr) {
      if (uniqueNum.has(x)) {
        duplicate.add(x);
      } else {
        uniqueNum.add(x);
      }
    }
    return [...duplicate]; // Convert Set to Array for better output
  }
  console.log(findDublicate([1,2,3,4,3,1,2]));
  
  module.exports = { findDublicate };
  