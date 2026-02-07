// Copying Objects

let obj = {
    name : "Naman",
    age : 21,
    location : "Delhi"
}

// Shallow Copy (one level deep)
let obj2 = {...obj};
console.log(obj2);
let oldWaytoCopy = Object.assign({},obj);
console.log(oldWaytoCopy);
let oldWaytoCopy2 = Object.assign({ skill : "JS"},obj);
console.log(oldWaytoCopy2);


// deep clone  ->use when you have nested object
// Note: JSON-based copy works only for plain data (no functions, undefined, etc.)
// Use JSON.parse(JSON.stringift(Obj))

let user = {
    name: "Naman",
    address: {
        city: "Delhi",
        pincode: 110091
    }
};


// let newUser = {...user};
// console.log(newUser)
// newUser.address.city = "Noida";
// console.log(newUser)
// console.log(user)
let user2 = JSON.parse(JSON.stringify(user))
user2.address.city = "Noida";
console.log(user2)
console.log(user)

