function science(option){
    console.log(option.name + "Your admition is confirm in science with percentage " + option.per);
}

function commerce(option){
    console.log(option.name + "Your admition is confirm in commerce with percentage " + option.per);
}

function arts(option){
    console.log(option.name + "Your admition is confirm in arts with percentage " + option.per);
}

function addmition(file,cb){
    cb({name:name,per:per})
}

var name = prompt("Enter your name : ")
const per = parseInt(prompt("Enter your percentage : "))

if(per > 85)
{
    addmition({name:name,per:per},science)
}

else if(per > 75)
{
    addmition({name:name,per:per},commerce)
}

else if(per > 50)
{
    addmition({name:name,per:per},arts)
}