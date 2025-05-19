let a = 0
let b = 1
var num = parseInt(prompt("Enter a number : "))

console.log(a);
console.log(b);

for(let i=0;i<num;i++)
{
    let c = a + b;
    console.log(c);
    a = b
    b = c
}