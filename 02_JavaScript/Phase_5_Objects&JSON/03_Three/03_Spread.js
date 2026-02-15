let user = {
    name: "Naman",
    age: 22,
    address: {
        city: "Delhi",
        state: "Rajasthan",
        pincode: 302001
    },
    skills: {
        frontend: ["HTML", "CSS", "JS"],
        backend: ["Node", "MongoDB"]
    }
};

// Spread Operator
// Copy object (shallow copy)
let userCopy = { ...user };

console.log(userCopy);

// Merge objects
let extraInfo = {
    college: "NIT",
    year: 3
};

let mergedUser = { ...user, ...extraInfo };

console.log(mergedUser);

//Override properties
let updatedUser = {
    ...user,
    age: 23,        // override
    city: "Jaipur"  // new property
};

console.log(updatedUser);


// Deep copy
let deepCopy = JSON.parse(JSON.stringify(user));
deepCopy.address.city = "Chennai";

console.log(user.address.city); // Delhi ✅
console.log(deepCopy.address.city); // Chennai ✅