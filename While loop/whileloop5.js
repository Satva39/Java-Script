var num = parseInt(prompt("Enter a number : "))
var rev = 0
var no = num

while(num>0)
{
    var rem = num % 10
    rev = rev * 10 + rem
    num = Math.floor(num/10)
}

if(no == rev)
{
    console.log("Number is Palindrom");
}

else
{
    console.log("Number is not Palindrom");
}