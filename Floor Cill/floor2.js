var nn = parseInt(prompt("Enter the amount :"))

var n500 = Math.floor(nn/500);
nn = nn % 500;

var n200 = Math.floor(nn/200);
nn = nn % 200;

var n100 = Math.floor(nn/100);
nn = nn % 100;

var n50 = Math.floor(nn/50);
nn = nn % 50;

var n20 = Math.floor(nn/20);
nn = nn % 20;

var n10 = Math.floor(nn/10);
nn = nn % 10;

var n5 = Math.floor(nn/5);
nn = nn % 5;

var n2 = Math.floor(nn/2);
nn = nn % 2;


console.log("Notes of 500 : ",n500);
console.log("Notes of 200 : ",n200);
console.log("Notes of 100 : ",n100);
console.log("Notes of 50 : ",n50);
console.log("Notes of 20 : ",n20);
console.log("Notes of 10 : ",n10);
console.log("Notes of 5 : ",n5);
console.log("Notes of 2 : ",n2);
console.log("Notes of 1 : ",nn);