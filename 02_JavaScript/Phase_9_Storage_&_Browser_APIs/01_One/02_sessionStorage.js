// 2️⃣ sessionStorage
// 👉 Data tab tak store hota hai jab tak tab open hai
// 👉 Browser close ya tab close → data delete

// Syntax same hota hai
sessionStorage.setItem("theme", "dark");

let theme = sessionStorage.getItem("theme");
console.log(theme);

// Difference Table (Interview Gold)
// Feature	            localStorage	         sessionStorage
// Data lifetime	      Permanent	             Until tab closed
// Scope	            Same origin	               Same tab only
// Storage limit        	 ~5MB	                   ~5MB
// Accessible via JS	   Yes	                       Yes


// What is localStorage?
// A browser storage mechanism that stores data permanently (until manually cleared).

// What is sessionStorage?
// Stores data temporarily for one browser session.

// Why use JSON.stringify?
// Because Web Storage stores only strings.

