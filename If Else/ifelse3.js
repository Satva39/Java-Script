var a = parseInt(prompt("Enter a number : "))

if(a%5 == 0)
{
    if(a%3 == 0)
    {
        console.log("Number can be divided by 3 & 5.");
    }
}

else
{
    console.log("Number can't be divided by 3 & 5.");
}