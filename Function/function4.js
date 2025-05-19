function addition()
{
    var a = parseInt(prompt("Enter first number: "));
    var b = parseInt(prompt("Enter second number: "));
    var c = a + b;
    console.log("Addition is: " + c);
}
function substraction()
{
    var a = parseInt(prompt("Enter first number: "));
    var b = parseInt(prompt("Enter second number: "));
    var c = a - b;
    console.log("Substraction is: " + c);
}
function multiplication()
{
    var a = parseInt(prompt("Enter first number: "));
    var b = parseInt(prompt("Enter second number: "));
    var c = a * b;
    console.log("Multiplication is: " + c);
}
function division()
{
    var a = parseInt(prompt("Enter first number: "));
    var b = parseInt(prompt("Enter second number: "));
    var c = a / b;
    console.log("Division is: " + c);
}

var choice = parseInt(prompt("Enter your choice: \n 1. Addition \n 2. Substraction \n 3. Multiplication \n 4. Division")); 

switch(choice)
{
    case 1:
        addition()
        break;
    case 2:
        substraction()
        break;
    case 3:
        multiplication()
        break;
    case 4:
        division()
        break;
    default:
        console.log("Invalid choice")
}