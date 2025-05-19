var year = parseInt(prompt("Enter a number : "))

if((year % 4 == 0 && year % 400 == 0) || year % 100 != 0)
{
    console.log("This year is Leap year");
}

else
{
    console.log("This year is not leap year.");  
}