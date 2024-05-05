// To target elements which are in HTML
var monthName = document.getElementById("month-name");
var dayName = document.getElementById("day-name"); 
var dayNumber = document.getElementById("day-number");
var yearNumber = document.getElementById("year-number");

// Create a new object that stores the current date
const date = new Date();

// Get month & day to store in a string so need to create an additional const
const month = date.getMonth();
const weekday = date.getDay();

monthName.innerText = date.toLocaleString("en", { month: "long" });

dayName.innerText = date.toLocaleDateString("en", { weekday: "long" }); // Changed from dayNumber to dayName

// Set the innerText to the current day number
dayNumber.innerText = date.getDate();

// Set the innerText to the current year
yearNumber.innerText = date.getFullYear();
