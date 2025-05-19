var a = parseInt(prompt("Enter First Number"))
var b = parseInt(prompt("Enter Second Number"))
var c = parseInt(prompt("Enter Third Number"))

// if(a>b)
// {
    // if(a>c)
    // {
        // console.log("A is Biggest.");
    // }
// }

// else if(b>c)
// {
    // console.log("B is Biggest");
// }

// else
// {
    // console.log("C is Biggest");
// }


// a > b && a > c ? console.log("A is biggest") : b > a && b > c ? console.log("B is biggest") : console.log("C is biggest");

a > b ? a > c ? console.log( a + " is biggest") : console.log( c + " is biggest") : b > c ? console.log( b + " is biggest") : console.log( c +" is biggest")

