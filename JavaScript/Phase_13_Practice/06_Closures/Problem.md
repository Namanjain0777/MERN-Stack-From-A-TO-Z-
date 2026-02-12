🟢 LEVEL 1 – Basic Closure Understanding
1. What is lexical scope?
2. What is closure? Explain in your own words.
3. Write a function that returns another function.
4. Show how inner function accesses outer variable.
5. What happens if outer function finishes execution?
6. Predict output:
function outer() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  }
}

7. Create a counter using closure.
8. Why is closure not destroyed after function execution?
9. What is scope chain?
10. Can closure access global variables?
🟡 LEVEL 2 – Practical Usage
11. Create private variable using closure.
12. Create bank account with private balance.
13. Implement increment/decrement counter module.
14. Create configuration function:
const greet = createGreeting("Hello");
greet("Naman");

15. Create multiplier function:
const double = multiply(2);
double(5); // 10

16. Create once() function (runs only once).
17. Implement memoization using closure.
18. Write debounce using closure.
19. Write throttle using closure.
20. Create ID generator using closure.
21. Create cache system using closure.
22. Maintain state without global variables.
23. Create logger function with private logs.
24. Build simple module pattern using IIFE.
25. Explain closure in async context.
🔴 LEVEL 3 – Advanced / Interview Level
26. Predict output:
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

27. Fix above using closure.
28. Explain why let works differently.
29. Build custom useState-like function.
30. Build private event emitter using closure.
31. Implement middleware chain using closures.
32. Build custom bind using closure.
33. Implement curry using closure.
34. Implement partial application.
35. Create reactive state system.
36. Create observer pattern using closure.
37. Explain memory leak related to closures.
38. How does closure behave in async/await?
39. Create closure-based timer system.
40. Implement secure password validator (hidden rules).
41. Build authentication session tracker.
42. Implement state history tracker.
43. Create retry mechanism using closure state.
44. Build pipeline system using closures.
45. Implement plugin system using closures.
46. Explain closure vs class private fields.
47. Show how closure enables functional programming.
48. Implement private API wrapper.
49. Create dynamic configuration manager.
50. Explain closure deeply as if teaching beginner.