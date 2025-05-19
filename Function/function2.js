function science(name,per)
{
    console.log(name + " you are eligable for science stream with " + per + "% marks");
}

function commerce(name,per)
{
    console.log(name + " you are eligable for commerce stream with " + per + "% marks");
}

function arts(name,per)
{
    console.log(name + " you are eligable for arts stream with " + per + "% marks");
}

var first_name = prompt("Enter your name: ");
var per = parseInt(prompt("Enter your percentage: "));

if(per > 80)
{
    science(first_name,per)
}

else if(per > 60)
{
    commerce(first_name,per)
}
else if(per > 35)
{
    arts(first_name,per)
}
else
{
    console.log(first_name + " sorry, you are not eligable for any stream with " + per + "% marks because your are failed in exam");
}