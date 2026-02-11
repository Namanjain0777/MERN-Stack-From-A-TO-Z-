let uzer = {
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

// Access nested properties
console.log(uzer.address.city);        // Delhi
console.log(uzer.skills.frontend[2]);  // JS


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

console.log("Deep Copy");
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
console.log(user2)  //{ name: 'Naman', address: { city: 'Noida', pincode: 110091 } }  
console.log(user)   //{ name: 'Naman', address: { city: 'Delhi', pincode: 110091 } }

const uzer2 = {
  name: "Naman"
};

const { name, city = "Delhi" } = uzer2;

console.log(city); // Delhi
