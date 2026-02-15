let titile = document.getElementById("title");
let div = document.getElementsByTagName("div");
let box = document.getElementsByClassName("box");
let content = document.querySelector("#content");
let bold = document.querySelector("b");
let btn = document.querySelector("btn");

// innerText
// Changes only visible text (ignores hidden elements)
// Ignores hidden elements
// Remove HTML tags
titile.innerText = "Hello DOM";

// innerHTML
// Can insert HTML tags
// Reads/sets HTML content
// Can cause XSS if unsafe data used

content.innerHTML = "<i>Updated using innerHTML</i>";

// textContent
// Returns all text (even hidden)
// Changes all text content
// Faster than innerText
// Does NOT parse HTML
content.textContent = "Updated using textContent";

// style
// Change CSS directly
// Inline CSS apply karta hai
// Overrides stylesheet

title.style.color = "red";
title.style.fontSize = "30px";

// ClassList -> class manager
// Every HTML element has a class attribute:
// <div class="box highlight active"></div>

// Internally browser sees it like:
// ["box", "highlight", "active"]
// Ye sab ek list ki tarah stored hoti hain.

// classList matlab element ki classes ko add / remove / check karne ka tool.

// classList lets you control those classes individually.
// add()
content.classList.add("highlight");
// 👉 Class add karta hai
// 👉 Purani class nahi hatata

// remove()
content.classList.remove("highlight");
// 👉 Class hata deta hai

// toggle() -IMP
content.classList.toggle("highlight");
// 👉 Agar class hai to remove karta hai
// 👉 Agar class nahi hai to add karta hai

// contains()
content.classList.contains("highlight");
// 👉 Returns true/false


// Recommended way to manage CSS
// Cleaner than .className = ""


// className kyu use nahi karte?
box.className = "red";
// 👉 Overwrite karta hai
// 👉 Purani class nahi hatata

