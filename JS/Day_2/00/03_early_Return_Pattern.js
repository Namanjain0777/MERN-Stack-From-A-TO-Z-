// early return pattern
// This avoids deep nesting and makes logic cleaner.
// Used in functions to exit early if some condition fails.
let n = 269;

function checkVal(val){
    if(val<50) return 'A';
    else if(val<75) return 'B';
    else if(val<80) return 'C';
    else return 'D';
}

console.log(checkVal(n));