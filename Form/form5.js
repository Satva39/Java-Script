function submitHandler(event) {
    event.preventDefault();
    let hemail = document.getElementById("email").value;
    let hpassword = document.getElementById("password").value;


    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if (hemail === storedEmail && hpassword === storedPassword) {
        alert("Login successful");
    } else {
        alert("Invalid email or password");
    }

}