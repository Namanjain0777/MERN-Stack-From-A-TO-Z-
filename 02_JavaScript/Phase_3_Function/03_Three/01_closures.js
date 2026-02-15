// Closure
// Function + uska surrounding data = Closure
// Ek function jo kisi aur function ke ANDAR define ho
// aur inner function parent function ke variables ko
// "yaad" rakhe — even after parent function execute ho chuka ho

function abc() {
    let a = 12; // parent function ka variable

    return function () {
        // inner function uses variable 'a'
        console.log(a);
    };
}

// abc() ek function return karta hai
let result = abc();

// Parent function abc() ka execution khatam ho chuka hai
// BUT inner function abhi bhi variable 'a' ko yaad rakhta hai
result(); // 12  ✅ THIS is closure



// Inner function closes over parent variables
// Parent function call stack se nikal chuka hota hai
// Lekin uske variables memory me alive rehte hain
// 👉 Is preserved memory ko hi Closure bolte hain