function submitHandler(event){
    event.preventDefault()
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var mobile = document.getElementById("mobile").value

    var nameErr = document.getElementById("nameErr")
    var emailErr = document.getElementById("emailErr")
    var mobileErr = document.getElementById("mobileErr")

    let nameRegex = /^[A-Z]{1}[a-z]+$/
    
    if(!name.match(nameRegex)){
        nameErr.innerHTML = "Please enter first character in uppercase"
        nameErr.style.color = "red"
    }
    else{
        nameErr.innerHTML = "Name is valid"
        nameErr.style.color = "green"
    }

    let mobileRegex = /^[6-9]{1}[0-9]{9}$/
    if(!mobile.match(mobileRegex)){
        mobileErr.innerHTML = "Please enter a valid 10-digit mobile number starting with 6-9"
        mobileErr.style.color = "red"
    } else {
        mobileErr.innerHTML = "Mobile number is valid"
        mobileErr.style.color = "green"
    }

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(!email.match(emailRegex)){
        emailErr.innerHTML = "Please enter a valid email address"
        emailErr.style.color = "red"
    }
    else {
        emailErr.innerHTML = "Email is valid"
        emailErr.style.color = "green"
    }


}