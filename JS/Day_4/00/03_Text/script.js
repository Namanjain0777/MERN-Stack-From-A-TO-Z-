let h1 = document.querySelector("h1");
console.dir(h1)  //open console and see there are 3 key : innerHTML , innerText , textContent have the value of my h1


// h1.innerHTML = "Hello Naman";
// h1.innerText = "Hello Naman";
// h1.textContent = "Hello Naman";

// innerHtml -> Agar tag diya to browser usko HTML maan lega
// HTML dalni ho
h1.innerHTML = "<b>Hello</b>"  //Hello  (bold ho jayega)
console.dir(h1) 

// innerText -> Only text cant manipulate Html tag like inner html
// Sirf visible text chahiye
h1.innerText = "<b>Hello</b>";   //<b>Hello</b>   (bold nahi)

// textContent -> Jo likha hai (sab hidden wala bhi)
// Simple text change
h1.textContent = "<b>Hello</b>";  

