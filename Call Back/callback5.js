function current(){
    var balance = 50000
    return balance
}

function wd(){
    let amount = parseInt(prompt("Enter amount to witdrawal"))
    let ans = current()
    if(amount<=ans)
    {
        console.log("Successfully withdrawled");
        ans = ans - amount
        console.log(ans);
    }
    else{
        console.log("Withdrawl unsuccessful you have not that much money...");
        const pi = current()
        console.log(pi);
    }
}

function dep()
{
    let da = parseInt(prompt("Enter amounte for depositing."))
    console.log("Successfully deposited");
    let g = current()
    da = da + g
    console.log("your balance = "+ da);
}

let yesorno = false
var inatm = parseInt(prompt("Are you in ATM ? \n 1 for yes. \n 2 for no."))

switch(inatm)
{
    case 1: 
        yesorno = true
        break
    case 2:
        console.log("Thank you for visiting ATM.");    
        break
}

if (yesorno === true)
{

    const choice = parseInt(prompt("1 for Cheack Balance \n 2 for Withdrawl \n 3 for Deposit"))

    switch(choice)
    {
    case 1:
        var bal = current()
        console.log(bal);
        break
    case 2:
        wd()
        break
    case 3:
        dep()
        break
    }
}