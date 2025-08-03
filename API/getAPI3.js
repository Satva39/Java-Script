const getData = async () => {
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
        tr.appendChild(actionTD);
        tbody.appendChild(tr);
    });
};