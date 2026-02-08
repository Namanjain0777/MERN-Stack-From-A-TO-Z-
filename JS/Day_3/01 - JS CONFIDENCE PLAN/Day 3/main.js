// // Find MAX number (without Math.max)
// let arr = [12, 5, 78, 34, 9];
// let max =  arr[0]
// for(let i = 0 ; i<=arr.length-1 ; i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }
// console.log(max);

// // Remove duplicates
// let num = [1,2,2,3,4,4,5];
// let uniqu = [...new Set(num)];
// console.log(uniqu);

// let nums = [1,2,2,3,4,4,5];
// let unique = [];

// for(let i = 0; i < nums.length; i++){
//     if(!unique.includes(nums[i])){
//         unique.push(nums[i]);
//     }
// }

// console.log(unique);

// // Create new array with only EVEN numbers
// let someArr = [1,2,3,4,5,5,6,7,8,3,2];
// let filterArray = someArr.filter(function(val){
//     if(val%2==0) return true;
// })
// console.log(filterArray)

// // Double each value (use map)
// let mapArr = [1,2,3,4,5];
// let donearr = mapArr.map(function(val){
//     return val*2;
// })
// console.log(donearr)

// // Sum of array (use reduce)
// let sumOfArray = [1,2,3,4,5,6,7,8,9,10];
// let sumof = 0
// let sum = sumOfArray.reduce(function(pre , val){
//     return pre+val;

// },0)
// console.log(sum)

// // Print all elements
// let arr2 = [5, 10, 15, 20];
// for(let i = 0 ; i<arr2.length;i++){
//     console.log(arr2[i]);
// }

// // Count elements
// let arr3 = [5, 10, 15, 20];
// let count = 0;
// for(let i = 0 ; i<arr3.length;i++){
//     count++;
// }
// console.log(count)

// // Find smallest number
// let arr4 = [12, 5, 78, 34, 9];
// let min =  arr4[0]
// for(let i = 0 ; i<=arr4.length-1 ; i++){
//     if(arr4[i]<min){
//         min = arr4[i];
//     }
// }
// console.log(min);

// // Check if element exists
// let arr5 = [1, 2, 3, 4, 5];
// let found = false;

// for(let i = 0; i < arr5.length; i++){
//     if(arr5[i] === 3){
//         found = true;
//         break;
//     }
// }
// console.log(found);

// // Sum of array (loop)
// let arr6 = [1,2,3,4]
// let sum1 = 0;
// for(let i = 0 ; i<arr6.length ; i++){
//     sum1 += arr6[i];
// }
// console.log(sum1)

// // Create new array with squares
// let arr7 = [1, 2, 3, 4];
// let square = arr7.map(function(val){
//     return val*val;
// })
// console.log(square)

// // Count even numbers
// let arr8 = [10, 15, 20, 25, 30];
// let count1 = 0;
// for(let i = 0; i < arr8.length; i++){
//     if(arr8[i] % 2 === 0){
//         count1++;
//     }
// }
// console.log(count1);


// // Remove all odd numbers
// let arr9 = [1,2,3,4,5,6];
// let removeOddNumber = arr9.filter(function(val){
//     return val%2==0;
// })
// console.log(removeOddNumber)

// // Reverse array (without reverse())
// let arr10 = [1,2,3,4];
// let reverseArray = [];
// for(let i = arr10.length-1 ; i>=0 ; i--){
//     reverseArray.push(arr10[i]);
// }
// console.log(reverseArray)

// // Find second largest number
// let arr11 = [10, 40, 30, 20];
// let largest = -Infinity;
// let secondLargest = -Infinity;
// for(let i = 0; i < arr11.length; i++){
//     if(arr11[i] > largest){
//         secondLargest = largest;
//         largest = arr11[i];
//     } else if(arr11[i] > secondLargest && arr11[i] !== largest){
//         secondLargest = arr11[i];
//     }
// }

// console.log(secondLargest);

// Check if array is sorted
let arr12 = [1];
let isSorted = true;

for(let i = 0; i < arr12.length - 1; i++){
    if(arr12[i] > arr12[i+1]){
        isSorted = false;
        break;
    }
}

console.log(isSorted);


// Frequency counter
let arr13 = ["a","b","a","c","b","a"];
let freq = {};

for(let i = 0; i < arr13.length; i++){
    let element = arr13[i];
    if(freq[element]){
        freq[element] = freq[element] + 1;
    } else {
        freq[element] = 1;
    }
}
console.log(freq);


// Merge two arrays (no concat)
let a = [1,2];
let b = [3,4];
let c = [];

// push elements of a
for(let i = 0; i < a.length; i++){
    c.push(a[i]);
}

// push elements of b
for(let i = 0; i < b.length; i++){
    c.push(b[i]);
}

console.log(c); // [1,2,3,4]

// MINI PROJECT – Marks Analyzer 🎓
// let marks = [45, 78, 32, 90, 67];
// Show:
// ✅ Total marks
// ✅ Average
// ✅ Highest marks
// ✅ Passed students (>=33)

let marks = [45, 78, 32, 90, 67];

let markAnalyser = function(val){
    let sum = 0;

    val.forEach(element => {
        sum += element;
    });

    let average = sum / val.length;

    let max = val[0];
    for(let i = 1; i < val.length; i++){
        if(val[i] > max){
            max = val[i];
        }
    }

    let passedCount = val.filter(mark => mark >= 33).length;

    console.log("Total Marks:", sum);
    console.log("Average:", average);
    console.log("Highest marks:", max);
    console.log("Passed students:", passedCount);
}

markAnalyser(marks);
