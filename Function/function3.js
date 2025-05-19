function science(name,per)
{
    return name + " you are eligable for science stream with " + per + "% marks";
}

function commerce(name,per)
{
    return name + " you are eligable for commerce stream with " + per + "% marks";
}

function arts(name,per)
{
    return name + " you are eligable for arts stream with " + per + "% marks";
}

var first_name = prompt("Enter your name: ");
var per = parseInt(prompt("Enter your percentage: "));
let temp;

if(per > 80)
{
    temp = science(first_name,per)
}

else if(per > 60)
{
    temp = commerce(first_name,per)
}
else if(per > 35)
{
    temp = arts(first_name,per)
}
else
{
    console.log(first_name + " sorry, you are not eligable for any stream with " + per + "% marks because your are failed in exam");
}

console.log(temp);