function submitHandler(event) {
    event.preventDefault()
    let fname = document.getElementById("firstName").value
    let lname = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let cpassword = document.getElementById("confirmPassword").value
    let pnumber = document.getElementById("phone").value

    localStorage.setItem("email", email)
    if(cpassword === password) {
        localStorage.setItem("password",password)
        alert("Registration successful")
        location.href = "form5.html"
    }
    else{
        alert("Passwords do not match")
    }
}