const postData = async (event) => {
    event.preventDefault(); // fixed

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = parseInt(document.getElementById("age").value); // should be number
    let status = document.getElementById("status").value;
    let isActive = status === "True" ? true : false;

    const res = await fetch("https://node5.onrender.com/user/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            age: parseInt(age),   // convert to number
            email: email,
            password: password,
            isActive: status === "True" ? true : false // convert to boolean
        })
    });

    console.log(res);

    const response = await res.json();
    console.log(response);

    getData()

};

const getData = async()=>{
    const response = await fetch("https://node5.onrender.com/user/user", {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    });

    const res = await response.json();
    console.log(res.data);

    let tbody = document.getElementById("tbody");

    res.data.forEach((element) => {
        let tr = document.createElement("tr");
        let idTD = document.createElement("td");
        let nameTD = document.createElement("td");
        let emailTD = document.createElement("td");
        let passwordTD = document.createElement("td");
        let ageTD = document.createElement("td");
        let statusTD = document.createElement("td");
        let actionTD = document.createElement("td");
        let btn = document.createElement("button");
        let btn2 = document.createElement("button");

        btn.innerText = "Delete";
        btn.className = "btn btn-danger";
        btn.addEventListener("click", async () => {
            const response2 = await fetch("https://node5.onrender.com/user/user/" + element._id, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                }
            });

            tr.remove();

        });

        btn2.innerText = "Update"
        btn2.className = "btn btn-primary";
        btn2.addEventListener("click", async ()=>{
            
        })

        idTD.innerHTML = element._id;
        nameTD.innerHTML = element.name;
        emailTD.innerHTML = element.email;
        passwordTD.innerHTML = element.password;
        ageTD.innerHTML = element.age;
        statusTD.innerHTML = element.isActive;

        tr.appendChild(idTD);
        tr.appendChild(nameTD);
        tr.appendChild(emailTD);
        tr.appendChild(passwordTD);
        tr.appendChild(ageTD);
        tr.appendChild(statusTD);
        actionTD.appendChild(btn);
        actionTD.appendChild(btn2);
        tr.appendChild(actionTD);
        tbody.appendChild(tr);
    });
}
