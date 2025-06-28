function sendEmail(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let name = document.getElementById("name").value;




    const params = {
        name: name,
        email: email,
        message: message
    }


    console.log(params);
    

    const surviceId = "service_0ndvcg4"
    const templateId = "template_l9k2kp3"

    emailjs.send(surviceId, templateId, params).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })

}