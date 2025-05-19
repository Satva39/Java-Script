var num = parseInt(prompt("Enter a number : "))
var rev = 0

for(;num > 0;)
{
    var rem = num % 10;
    rev = rev * 10 + rem
    num = Math.floor(num/10)
}

console.log(rev);