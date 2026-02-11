// Type Coercion(== vs ===)
// == compares value with type conversion
// === compares value + type (no conversion)

// 12 == "12" -> true
// 12 === "12" -> false


// Concept -> jismein aapka ek type automatically convert ho jyage

console.log("5" + 1); //concat 
// if any one on the operants is string then it convert in string
console.log("5" - 1); //concat 
// if any one on the operants is string then it convert in number

// Number() ->Converts a value into a number
Number("123")      // 123
Number("12.5")     // 12.5
Number(true)       // 1
Number(false)      // 0
Number(null)       // 0
Number(undefined)  // NaN
Number(NaN)        // NaN
Number("abc")      // NaN
Number("123abc")   // NaN
Number(undefined)  // NaN

Number(Infinity)   // Infinity
Number(-Infinity)  // -Infinity

// Rule to remember
    // If it looks like a number → converts
    // If not → NaN

// String() ->Converts a value into a string
String(123)        // "123"
String(true)       // "true"
String(false)      // "false"
String(null)       // "null"
String(undefined)  // "undefined"
String([1, 2, 3])       // "1,2,3"
String({ name: "A" })  // "[object Object]"

// Rule
// Everything can be converted to a string (no error)

// Boolean() ->Converts a value into true or false
// Falsy values (ONLY these 👇)
Boolean(false)     // false
Boolean(0)         // false
Boolean(-0)        // false
Boolean("")        // false
Boolean(null)      // false
Boolean(undefined) // false
Boolean(NaN)       // false

// Everything else is Truthy
Boolean(1)         // true
Boolean("0")       // true
Boolean("false")   // true
Boolean([])        // true
Boolean({})        // true
Boolean(" ")   // true (space is NOT empty)
// Golden rule
    // Empty / zero / nothing = false
    // Everything else = true

