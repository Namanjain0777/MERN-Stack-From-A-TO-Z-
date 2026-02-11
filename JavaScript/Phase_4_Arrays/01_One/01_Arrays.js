// Arrays in JavaScript
// Array ek data structure hai jo multiple values store karta hai JS arrays different data types bhi store kar sakte hain Index hamesha 0 se start hota hai

// Create Array (Literal way)
let marks = [10, 25, 37, 43];

// Access elements using index
console.log(marks[0]);   // 10 (first element)
console.log(marks[500]); // undefined (index exist nahi karta)

// Create Array using constructor
let arr = new Array();
console.log(arr);  // [] empty array

// Update
marks[0] = 17;
console.log(marks);

// delete
marks.splice(0, 1); // index 0 se 1 element remove
console.log(marks);

// length -> Array ka total size batata hai | undefined hone ke baad bhi length same rehti hai
console.log(marks.length);

// indexof -> Array ke andar element ka index batata hai | agar element nahi hai to -1 return karta hai |element ka first index deta hai
console.log(marks.indexOf(25));




delete marks[1];
console.log(marks);
// ❌ index delete hota nahi, sirf value remove hoti hai