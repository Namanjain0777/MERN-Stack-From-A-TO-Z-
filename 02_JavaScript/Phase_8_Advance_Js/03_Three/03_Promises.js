// Promises (Solution to Callback Hell)
// A Promise represents: future value
        // Pizza order kiya 🍕
        // Abhi pending hai
        // Ya toh mil jayega (resolve)
        // Ya cancel ho jayega (reject)
// Promise ke 3 stages hain:
    // Pending → abhi wait kar raha hai
    // Fulfilled → kaam successful
    // Rejected → kaam fail

// Promise ek object hota hai jo 2 cheezain store karta hai:
    // 1. State
    // 2. Value

// Basic Promise
let promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Task completed");
    } else {
        reject("Task failed");
    }

});

// Resuly handle kaose karta hau?
promise
    .then(result => console.log(result))   // resolve wala value
    .catch(error => console.log(error));  // reject wala value


fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));



// Callbach hell problem
step1(() => {
   step2(() => {
      step3(() => {
         step4();
      });
   });
});

// Code deep ho jata hai 😵
// Promise chaining se better hota hai:

step1()
   .then(step2)
   .then(step3)
   .catch(error => console.log(error));

