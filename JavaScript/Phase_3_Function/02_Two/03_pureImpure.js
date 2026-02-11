// ------------------------------
// Pure Function
// ------------------------------
// Aisa function jo:
// 1️⃣ Same input pe hamesha same output de
// 2️⃣ Bahar ki kisi value ko change NA kare
// 3️⃣ Koi side effect NA ho (console, DOM, API, global variable)

function add(x, y) {
    return x + y;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (same output every time)


// ✔ No external variable used
// ✔ No external variable changed
// ✔ Predictable output

// ------------------------------
// Impure Function
// ------------------------------
// Aisa function jo:
// 1️⃣ Bahar ki value ko change kare
// OR
// 2️⃣ Same input pe same output guarantee na de
// OR
// 3️⃣ Side effects create kare

let a = 12;

function incre() {
    a++; // external variable change → side effect
}

incre();
console.log(a); // 13

// ✔ Uses external variable
// ✔ Modifies outside state
// ❌ NOT pure

// Bahar ki cheez chhedi? → Impure ❌
// Sirf input → output? → Pure ✅
