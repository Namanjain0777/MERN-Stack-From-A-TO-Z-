// getElementById
// Selects ONE element by ID
let heading = document.getElementById("main-title");
console.log(heading.innerHTML);


// getElementsByClassName
// Returns HTMLCollection (array-like)
let para = document.getElementsByClassName("text");
console.log(para);
para[0].style.color = "red";
para[1].style.color = "blue";

// getElementsByTagName
// Returns HTMLCollection (array-like)
// Selects elements by tag name
let box = document.getElementsByTagName("div");
console.log(box);
box[0].style.background = "yellow";

// querySelector
// Selects FIRST matching element
let heading2 = document.querySelector("#main-title");
heading2.style.color = "green";

// querySelectorAll
// Selects ALL matching elements
let para2 = document.querySelectorAll(".text");
console.log(para2);
para2.forEach(function(box) {
     box.style.fontSize = "10px";
});
