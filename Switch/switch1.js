var a = parseInt(prompt("Enter first number : "))
var b = parseInt(prompt("Enter second number : "))

var choice = parseInt(prompt("1 for add \n 2 for sub \n 3 for mul \n 4 for div"))

switch(choice)
{
    case 1: let add = a+b;
        console.log("Addition = ",add);
        break;

    case 2: let sub = a-b;
        console.log("Substraction = ",sub);
        break;

    case 3: let mul = a*b;
        console.log("Multiplication = ",mul);
        break;

    case 4: let div = a/b;
        console.log("Divition = ",div);
        break;
    
    default: 
        console.log("Invalid Choice");
}