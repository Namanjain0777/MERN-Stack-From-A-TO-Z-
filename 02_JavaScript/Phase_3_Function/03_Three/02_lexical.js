// Lexical Scope:
// Scope decide hota hai code likhte time

// Scope decide hota hai code ke structure se,
// runtime se nahi

// Rule:
// Ek function apne scope ke variables +
// apne parent scope ke variables access kar sakta hai
// ❌ child scope ke variables access nahi kar sakta

function abcd() {
    let a = 12; // parent scope

    function defg() {
        let b = 13; // child scope

        console.log(a); // ✅ parent variable accessible

        function ghij() {
            let c = 14; // inner-most scope

            console.log(a); // ✅ grand-parent scope
            console.log(b); // ✅ parent scope
            // console.log(c); // ❌ bahar se access nahi hota
        }

        ghij();
    }

    defg();
}

abcd();


// ✔ Inner → outer allowed
// ❌ Outer → inner NOT allowed


// “Lexical scope means scope is determined by code structure.”

// “A closure is a function that remembers its lexical scope even after execution.”

// JavaScript scope is lexical, not dynamic