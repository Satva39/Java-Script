var num = parseInt(prompt("Enter a number : "))
var flag = true

let i=2

while (i<num) 
{
    if(num % i == 0)
    {
        flag = false
    }
    i++    
}

if(flag)
{
    console.log("Number is Prime");
}

else
{
    console.log("Number is not Prime");
}