// Three types of functions in JavaScript:
// 1. Without Return value without argument
// 2. With Return value without argument
// 3. Without Return value with argument
// 4. With Return value with argument

// Without Return value without argument
function addition()
{
    var a = parseInt(prompt("Enter first number: "));
    var b = parseInt(prompt("Enter second number: "));
    var c = a + b;
    console.log("Addition is: " + c);
}

// addition()

// With Return value without argument
function substraction()
{
    var a = parseInt(prompt("Enter first number: "));
    var b = parseInt(prompt("Enter second number: "));
    var c = a - b;
    return c;
}

// var sub = substraction()
// console.log("Substraction is: " + sub);

// Without Return value with argument
function multiplication(a, b)
{
    var c = a * b;
    console.log("Multiplication is: " + c);
}

// var a = parseInt(prompt("Enter first number: "));
// var b = parseInt(prompt("Enter second number: "));
// multiplication(a, b)

// With Return value with argument
function division(a, b)
{
    var c = a / b;
    return c;
}

var a = parseInt(prompt("Enter first number: "));
var b = parseInt(prompt("Enter second number: "));
var ans = division(a, b)
console.log("Division is: " + ans);