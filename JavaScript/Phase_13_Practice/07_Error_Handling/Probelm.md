🟢 EASY (Foundation)
1. What is an error in JavaScript?
2. Types of errors:

SyntaxError

ReferenceError

TypeError

Explain each with example.

3. Use try…catch to handle error.
4. What happens if error is not caught?
5. Use finally block.
6. Throw custom error.
throw new Error("Invalid input")

7. Handle JSON.parse error safely.
8. Handle division by zero manually.
9. Catch error from undefined variable.
10. Create function that validates age and throws error.
🟡 MEDIUM (Async + Practical)
11. Handle Promise rejection with .catch()
12. Handle async/await error using try/catch.
13. Create custom error class.
class ValidationError extends Error {}

14. Differentiate operational vs programming errors.
15. Handle API fetch errors properly.
16. Create safe wrapper for async functions.
17. Global error handler function.
18. Implement retry if Promise fails.
19. Create timeout wrapper for Promise.
20. Handle multiple Promise errors with Promise.allSettled().
21. Validate object input and throw meaningful errors.
22. Create error logging function.
23. Simulate server error handling logic.
24. Create middleware-style error handler.
25. Write safe JSON stringifier.
🔴 HARD (Node / Production Level)
26. Build centralized error handling system.
27. Create custom HTTP error class.
28. Create error response formatter.
29. Implement Express-style error middleware logic.
30. Differentiate client error vs server error.
31. Handle unhandledPromiseRejection.
32. Handle uncaughtException.
33. Build error tracking system.
34. Create rate-limit error handler.
35. Implement graceful shutdown on fatal error.
36. Create async wrapper utility for routes.
37. Implement validation error aggregator.
38. Create API error standard structure.

Example:

{
  "success": false,
  "message": "Invalid input",
  "code": 400
}

39. Prevent sensitive data leak in errors.
40. Implement error boundary logic (conceptually).
41. Add stack trace logging.
42. Create production vs development error mode.
43. Implement custom logger with severity levels.
44. Build error metrics collector.
45. Create safe database query wrapper.
46. Implement retry with exponential backoff.
47. Create validation middleware simulation.
48. Design API error contract.
49. Implement circuit breaker concept (basic idea).
50. Explain full error lifecycle in Node app.