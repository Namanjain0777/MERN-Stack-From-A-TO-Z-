// Lexical Scope
// Lexical matlab Scope depends on where function is written, not where it is called.

function outer() {
    let a = 10;

    function inner() {
        console.log(a); // accessible
    }

    inner();
}

outer();   //Because inner function outer ke scope me likha hua hai.

function outer() {

    function inner() {
        let b = 20;
    }

    console.log(b); // ❌ Error
}
// Parent child ka variable access nahi kar sakta.

