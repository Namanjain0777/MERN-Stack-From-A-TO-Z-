// Closures & Lexical Scope

// Closures -> ek fnc jo return kare ek our function aur returm hona waala function humesha youse karege parent fnc ka koi variale

function abc() {
    let a = 12; // parent function variable

    return function () {
        // inner function uses variable 'a'
        console.log(a);
    };
}

// abc() returns a function
let result = abc();

// Even though abc() execution is finished,
// inner function still remembers 'a'
result(); // 12  ✅ THIS is closure

// Why this is called a Closure
    // Inner function closes over parent variables
    // Parent function is gone from call stack
    // But its variables are still remembered
    // 👉 That memory is called closure.


// Lexical Scope

// Lexical scope means:
// A function can access variables defined in its own scope and in its parent scope (NOT child scope)

function abcd() {
    let a = 12; // parent scope

    function defg() {
        let b = 13; // child scope
        console.log(a); // ✅ accessible (parent variable)

        function ghij() {
            let c = 14;
            console.log(a); // ✅
            console.log(b); // ✅
        }

        ghij();
    }

    defg();
}

abcd();




// “Lexical scope means scope is determined by code structure.”

// “A closure is a function that remembers its lexical scope even after execution.”