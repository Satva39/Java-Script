var users = ["ram","seeta","geeta","manjulekha","hanuman","lakshaman","ravan"]

// Cheacking condition with or or
var x = users.some((user)=>user.startsWith("r"))
console.log(x);

// Cheacking condition with &&
var y = users.some((user)=>user.startsWith("r"))
console.log(y);