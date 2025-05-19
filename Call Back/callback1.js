function add(a,b){
    console.log("Addition = ",a+b);
}

function sub(a,b){
    console.log("Substraction = ",a-b);
}

function mul(a,b){
    console.log("Multiplication = ",a*b);
}

function div(a,b){
    console.log("Divition = ",a/b);
}

var a = parseInt(prompt("Enter fisrt number : "))
var b = parseInt(prompt("Enter second number : "))
var choice = parseInt(prompt("1 for addition \n 2 for substruction \n 3 for multiplication \n 4 for divition \n\n Enter your choice: "))

function calculator(a,b,cb){
    cb(no1,no2)
}

switch(choice)
{
    case 1:
        calculator(add(a,b))
        break

    case 2:
        calculator(sub(a,b))
        break

    case 3:
        calculator(mul(a,b))
        break
    
    case 4:
        calculator(div(a,b))
        break
}