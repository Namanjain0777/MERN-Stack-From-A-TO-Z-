// Destructuring
let arr = [1,2,3,4,5]
let [a,b , , c] = arr;
console.log(a,b,c);

// Spread -> create a new array
let nums = [1,2,3,4,5,6,7,8,9]

// let nums2 = num;   //it doest compy ass its object

let nums2 = [...nums];
console.log(nums2)

