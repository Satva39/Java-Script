const prime = (num)=>{
    for(i=2;i<num;i++)
    {
        if(num%i==0)
        {
            return true
        }
    }
}

var num = parseInt(prompt("Enter a number :"))

var ans = prime(num);

if(ans)
{
    console.log("The number is not prime");
}
else
{
    console.log("the number is prime");
}