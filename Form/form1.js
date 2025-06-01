function submitHandler(event){
    event.preventDefault()

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let age = document.getElementById("age").value

    let nameErr = document.getElementById("nameErr")
    let emailErr = document.getElementById("emailErr")


    if(name.length == "")
    {
        nameErr.innerHTML = "Name is required";
        nameErr.style.color = "red";
    }
    else if(name.length < 4)
    {
        nameErr.innerHTML = "*Name must be at least 4 characters";
        nameErr.style.color = "red";
    }
    else{
        nameErr.innerHTML = name;
        nameErr.style.color = "green";
    }

    if(email.length == "")
    {
        emailErr.innerHTML = "*Email is required";
        emailErr.style.color = "red";
    }
    else if(!email.includes("@") || !email.includes("."))
    {
        emailErr.innerHTML = "Email must contain @ and .";
        emailErr.style.color = "red";
    }
    else{
        emailErr.innerHTML = email;
        emailErr.style.color = "green";
    }


    console.log("Form Submited Successfully");
    
}