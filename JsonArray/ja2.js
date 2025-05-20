var company = [
    {
        name: "google",
        employees:[
            {
                id:101,
                name:"meet desai",
                salary:25600,
                email:"meet@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:102,
                name:"jane",
                salary:22000,
                email:"jane@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:103,
                name:"priti",
                salary:27800,
                email:"priti@gmail.com",
                IsMarried:true,
                child:2,
                gender:"female"
            }
        ]
    },
    {
        name:"facebook",
        employees:[
            {
                id:201,
                name:"jim",
                salary:24500,
                email:"jim@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:202,
                name:"sarah",
                salary:21500,
                email:"sarah@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:203,
                name:"akash",
                salary:26200,
                email:"akash@gmail.com",
                IsMarried:true,
                child:2,
                gender:"male"
            }
        ]
    },
    {
        name:"amazon",
        employees:[
            {
                id:301,
                name:"ankit",
                salary:26200,
                email:"ankit@gmail.com",
                IsMarried:false,
                child:0,
                gender:"male"
            },
            {
                id:302,
                name:"riya",
                salary:86000,
                email:"riya@gmail.com",
                IsMarried:true,
                child:1,
                gender:"female"
            },
            {
                id:303,
                name:"kriti",
                salary:62500,
                email:"kriti@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            }
        ]
    },
    {
        name:"flipkart",
        employees:[
            {
                id:401,
                name:"pooja",
                salary:29800,
                email:"pooja@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:402,
                name:"ritesh",
                salary:22500,
                email:"ritesh@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:403,
                name:"bhuwan",
                salary:28700,
                email:"bhuwan@gmail.com",
                IsMarried:false,
                child:0,
                gender:"male"
            }
        ]
    }
    
]

var a = company.reduce((sum,emp)=>sum+emp.employees.length,0)
console.log(a)

var b = company.find((com)=>com.employees.find((emp)=>emp.name === "riya")).name
console.log(b);

var c = company.reduce((sum, com) => sum + com.employees.reduce((empSum, emp) => empSum + emp.salary, 0),0);
console.log("Average salary of all over compnies = " +c/2);

var d = company.map((emp)=>emp.employees.filter((mar)=>mar.IsMarried===true))
console.log(d);

var e = company.reduce((total, comp) => total + comp.employees.reduce((sum, emp) => sum + emp.child, 0), 0);
console.log(e);

var f = company.map((com)=>com.employees.filter((emp)=>emp.gender==="female"))
console.log(f);

var g = company.reduce((count, com) => count + com.employees.filter(emp => emp.IsMarried === false).length,0);
console.log(g);

var h = company.reduce((total, com) => total + com.employees.length, 0);
console.log(h);



// 9. Find the email addresses of all employees earning more than 30,000. can't solve