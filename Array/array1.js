var users = ["madhav","heer","ranjha","samay","harsh","rahul","rajvi","priya"];

var newArray = []


for(let i=0;i<users.length;i++)
{
    // console.log(users[i]);
    newArray.push(users[i].toUpperCase())
}
console.log(newArray);

console.log(users);

users.pop()

console.log(users);





console.log(users);
for(let i=0;i<users.length;i++)
{
    console.log(users[i].toUpperCase());
    
}
console.log(users);

var x = users.push("shubham","guru")


console.log(users);
console.log(x);

console.log(users);


var x = users.unshift("moksh","patel")
console.log(users);

users.shift()

console.log(users);