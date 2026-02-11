// Creates a Date object with the CURRENT date & time (system time)
let myDate = new Date();

// Logs the Date object (browser formats it automatically)
console.log(myDate);

// Converts date to a full readable string (date + time + timezone)
console.log(myDate.toString());

// Returns ONLY date part in readable format (no time)
console.log(myDate.toDateString());

// Returns date & time in local format (depends on system locale)
console.log(myDate.toLocaleString());

// Converts date to ISO format (used in databases & APIs)
// Format: YYYY-MM-DDTHH:mm:ss.sssZ
console.log(myDate.toISOString());

// Same as toISOString() (JSON-safe format)
console.log(myDate.toJSON());

// Returns ONLY date in local format
console.log(myDate.toLocaleDateString());

// Returns ONLY time in local format
console.log(myDate.toLocaleTimeString());

// Year, Month (0-based), Day, Hour, Minute
// Month 0 = January
let myCraeetDate = new Date(2023, 0, 23, 5, 3);

// Date with ONLY year, month, day (time defaults to 00:00)
let myCraeetDate2 = new Date(2023, 0, 23);

// Date using ISO format (YYYY-MM-DD) → safest format
let myCraeetDate3 = new Date("2023-01-17");

// Date using MM-DD-YYYY format (not recommended, can vary by browser)
let myCraeetDate4 = new Date("01-14-2025");

// Prints date & time in local format
console.log(myCraeetDate.toLocaleString());
console.log(myCraeetDate2.toLocaleString());
console.log(myCraeetDate3.toLocaleString());
console.log(myCraeetDate4.toLocaleString());

// Returns current timestamp in milliseconds since Jan 1, 1970
let myTimeStamp = Date.now();
console.log(myTimeStamp);

// Returns timestamp of the custom date
console.log(myCraeetDate.getTime());

// Converts milliseconds → seconds (used in APIs, JWT, etc.)
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();

// Full date object
console.log(newDate);

// Day of week (0 = Sunday, 6 = Saturday)
console.log(newDate.getDay());

// Month number (0-based, so +1 needed)
console.log(newDate.getMonth() + 1);

// Full year (YYYY)
console.log(newDate.getFullYear());

// Current hour (0–23)
console.log(newDate.getHours());

// Current minutes (0–59)
console.log(newDate.getMinutes());

// Current seconds (0–59)
console.log(newDate.getSeconds());

// Prints day month year using template literals
console.log(`${newDate.getDay()} ${newDate.getMonth() + 1} ${newDate.getFullYear()}`);

// Custom date formatting using locale options
console.log(
  newDate.toLocaleString('default', {
    weekday: "long",        // Prints full weekday name
    timeZone: "Asia/Kolkata" // Forces Indian timezone
  })
);
// Tuesday
