var num = parseInt(prompt("Enter a number : "))
var flag = true

for(let i=2;i<num;i++)
{
    if(num % i == 0)
    {
        flag = false;
    }
}

if(flag)
{
    console.log("Number is Prime.");
}

else
{
    console.log("Number is not Prime.");
}