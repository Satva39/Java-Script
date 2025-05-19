const roti = (pcs)=>{
    return "You have orderd " + pcs + " pices of Roti"
}

const rice = (plate)=>{
    return "You have orderd " + plate + " plate of Rice"
}

const panner = (plate)=>{
    return "You have orderd " + plate + " plate of Panner"
}

var choice = parseInt(prompt("1 for roti\n2 for rice \n3 for Panner\n\nEnter your choice"))
var flag

switch(choice)
{
    case 1:
        flag = roti(12)
        break
    case 2:
        flag = rice(2)
        break
    case 3:
        flag = panner(1)
        break
}

console.log(flag);