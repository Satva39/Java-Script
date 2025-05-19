let a = 0
let b = 1
var num = parseInt(prompt("Enter a number : "))

console.log(a);
console.log(b);

let i=0

while(i<num)
{
    let c = a + b;
    console.log(c);
    a = b
    b = c
    i++
}