const postData = async()=>{
    const res = await fetch("https://node5.onrender.com/user/user",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "John",
            age: 30,
            email: "john.doe@example.com",
            password: "121520",
            isActive: true
        })
    })

    const response = await res.json();
    console.log(response);
}