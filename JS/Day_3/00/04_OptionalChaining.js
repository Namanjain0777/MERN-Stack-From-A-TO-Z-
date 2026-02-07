let user = {
    name: "Naman",
    addresses: {   //let someone change it to address -> addresses
        citys: "Delhi",  
        pincode: 110091
    }
};
// console.log(user.address.city)   //It give error
console.log(user?.address?.city)  //undefined


// Computed Properties
// You can use variables as keys:
let key = "marks";
let report = {
    [key]: 89
};
console.log(report)
