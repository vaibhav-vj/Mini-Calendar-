// To Target elements which are in HTML
var monthName = document.getElementById("month-name");
var dayNumber = document.getElementById("day-number");
var yearNumber= document.getElementById("year-number");

// create a new object that store current date
const date = new Date(); 

// Get month & day to store in string so need to create a additional const
const month = date.getMonth();
const weekday = date.getDay();

monthName.innerText = date.toLocaleString("en", {month:"long"});

dayName.innerText = date.toLocaleDateString("en", { weekday : "long"});

// set the innertext to current day number
dayNumber.innerText = date.getDate();

//set the innerText to year 
yearNumber.innerText = date.getFullYear();
