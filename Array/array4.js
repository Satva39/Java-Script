let users = ["ram","seeta","geeta","manjulekha","hanuman","lakshaman","ravan"]
users.forEach((user)=>{
    console.log(user);
})

var x = users.map((user)=>{
    return user.length > 5
})
console.log(x);


var y = users.filter((user)=>{
    return user.length > 5
})
console.log(y);