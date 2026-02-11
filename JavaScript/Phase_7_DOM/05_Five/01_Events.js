// Click Event
// 👉 Jab user click kare
// 👉 Tab function chalega
let btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    alert("Button clicked!");
})

// Input Event
// 👉 Har key press pe fire hota hai

let nameInpit = document.getElementById("nameInput");

nameInpit.addEventListener("input",()=>{
    console.log("Input changed");
})

// chnage Event
// 👉 Jab value change ho jaaye
// 👉 Aur user field se bahar aaye
let colorSelect = document.getElementById("colorSelect");

colorSelect.addEventListener("change",()=>{
    body.style.backgroundColor = colorSelect.value;
})

// addEventListner
// ✔ Multiple events add kar sakte ho
// ✔ Old onclick se better
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click",()=>{
    alert("Button clicked!");
})

// event object
// Ye event object automatically milta hai.

let btn3 = document.getElementById("btn3");
btn3.addEventListener("click",(event)=>{
    console.log(event);
})

// event.target      // jis element pe event hua
// event.type        // event type (click, input)
// event.preventDefault()  // stop default behavior
// 