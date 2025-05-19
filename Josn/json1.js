var employee = {
    id:100,
    name:"V",
    age:15,
    salary:30000,
    email:"vvvvvvvv11@gmail.com",
    moblie:["9824556177","458766148"],
    status:true,
    isMarried:true,
    address:{
        street:"Ramvadi",
        city:"Ahmdeabad",
        state:"Gujarat",
        country:"India",
        pincode:354401
    }
}

console.log(employee);
console.log(employee.id);
console.log(employee.name);
console.log(employee.age);
console.log(employee.salary);
console.log(employee.email);
console.log(employee.moblie);
console.log(employee.moblie[0]);
for(let i=0; i<employee.moblie.length; i++){
    console.log(employee.moblie[i]);
}
console.log(employee.status);
console.log(employee.isMarried);
console.log(employee.address);
console.log(employee.address);
console.log(employee.address.street);
console.log(employee.address.city);
console.log(employee.address.state);
console.log(employee.address.country);
console.log(employee.address.pincode);