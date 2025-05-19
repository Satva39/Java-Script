const losangales = (yname, amount) => yname + " Your trip is confirmed for los angales with package " + amount
const singapur = (yname, amount) => yname + " Your trip is confirmed for singapur with package " + amount
const dubai = (yname, amount) => yname + " Your trip is confirmed for dubai with package " + amount
const goa = (yname, amount) => yname + " Your trip is confirmed for goa with package " + amount

var budget = parseInt(prompt("Enter your budget for trip:"))
var fname =prompt("Enter your name:")
var temp

if (budget > 3500) {
    temp = losangales(fname, budget)
}

else if (budget > 3000) {
    temp = singapur(fname, budget)
}

else if (budget > 2500) {
    temp = dubai(fname, budget)
}

else if (budget > 2000) {
    temp = goa(fname, budget)
}

else{
    console.log("Earn more money for trip.");
}

console.log(temp)