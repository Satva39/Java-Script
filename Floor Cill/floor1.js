var days = parseInt(prompt("Enter numbers of days :"))

var year = Math.floor(days/365);
days = days % 365;

var months = Math.floor(days/30);
days = days % 30;

var weeks = Math.floor(days/7);
days = days % 7;

console.log("Years : ",year);
console.log("Months : ",months);
console.log("Weeks : ",weeks);
console.log("Days : ",days);