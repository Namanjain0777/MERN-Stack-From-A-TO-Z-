function createElements() {

    // 1️⃣ createElement()
    let newDiv = document.createElement("div");
    newDiv.textContent = "I am created using createElement";
    newDiv.classList.add("box");
    // Abhi tak visible nahi hai
    // Kyunki DOM me add nahi kiya

    // 2️⃣ append()
    document.body.append(newDiv);
    // append returns NOTHING (undefined)
    // It just adds element

    // 3️⃣ appendChild()
    let anotherDiv = document.createElement("div");
    anotherDiv.textContent = "I am added using appendChild";
    anotherDiv.classList.add("box");

    document.body.appendChild(anotherDiv);
    // appendChild returns the added element

    // 4️⃣ prepend()
    let topDiv = document.createElement("div");
    topDiv.textContent = "I am added at top using prepend";
    topDiv.classList.add("box");

    document.body.prepend(topDiv);
    // prepend also returns NOTHING

}
// 5️⃣ remove()
function removeLast() {

    let last = document.body.lastElementChild;

    if (last) {
        last.remove();  // direct remove
    }
}


// append  → neeche add karta hai
// prepend → upar add karta hai

// After remove, element DOM se delete hota hai
// But memory me still exist kar sakta hai agar reference stored ho.




// Probelm You will Face
// let div = document.createElement("div")

// 👉 Ye sirf memory me bana hai
// 👉 Page pe tab tak nahi dikhega
// 👉 Jab tak tum usse DOM me add nahi karte

document.body.append(div);
// Now it becomes visible.
