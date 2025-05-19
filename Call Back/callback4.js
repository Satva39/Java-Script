function science(option){
    return option.name + " Your admition is confirm in science with percentage " + option.per
}

function commerce(option){
    return option.name + " Your admition is confirm in commerce with percentage " + option.per
}

function arts(option){
    return option.name + " Your admition is confirm in arts with percentage " + option.per
}

function addmition(file,cb){
    return cb({name:file.name,per:file.per})
}

var name = prompt("Enter your name : ")
const per = parseInt(prompt("Enter your percentage : "))
var temp

if(per > 85)
{
    temp = addmition({name:name,per:per},science)
}

else if(per > 75)
{
    temp = addmition({name:name,per:per},commerce)
}

else if(per > 50)
{
    temp = addmition({name:name,per:per},arts)
}

console.log(temp);