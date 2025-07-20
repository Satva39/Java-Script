let mydiv = document.getElementById("mydiv")
function createFrom(){
    let form = document.createElement('form')

    let label1 = document.createElement('label')
    let uname = document.createElement('input')

    let label2 = document.createElement('label')
    let email = document.createElement('input')

    let label3 = document.createElement('label')
    let age = document.createElement('input')

    let label4 = document.createElement('label')
    let password = document.createElement('input')

    let submit = document.createElement('input')

    submit.addEventListener("click", (event)=>{
        event.preventDefault()
        console.log(uname.value);
        console.log(email.value);
        console.log(age.value);
        console.log(password.value);
        
    })

    
    uname.type = "name"
    uname.placeholder = "Your Name"
    label1.innerHTML = "User Name : "
    

    email.type = "email"
    email.placeholder = "Your Email"
    label2.innerHTML = "User Email : "

    age.type = "number"
    age.placeholder = "Your Age"
    label3.innerHTML = "User Age : "

    password.type = "password"
    password.placeholder = "Set Password"
    label4.innerHTML = "Set Password : "

    submit.type = "submit"


    mydiv.append(form)

    form.append(label1)
    form.append(uname)
    form.append(document.createElement('br'))

    form.append(label2)
    form.append(email)
    form.append(document.createElement('br'))
    
    form.append(label3)
    form.append(age)
    form.append(document.createElement('br'))

    form.append(label4)
    form.append(password)
    form.append(document.createElement('br'))

    form.append(submit)
    form.append(document.createElement('br'))
    
}