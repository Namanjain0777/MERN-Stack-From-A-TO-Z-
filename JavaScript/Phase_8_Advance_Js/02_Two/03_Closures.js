// Closures

// Jab ek function apne outer scope ke variables ko yaad rakhta hai, even after outer function execution finish ho jaye.

function outer() {
    let a = 10;

    return function inner() {
        console.log(a);
    };
}

let fn = outer();
fn(); // 10


// Outer function khatam ho gaya, Phir bhi a yaad hai 😎
// 👉 That memory = Closure

// Function + uska surrounding data = Closure
