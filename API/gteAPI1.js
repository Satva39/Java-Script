const getData = async()=>{

    const res = await fetch("https://reqres.in/api/users?page=2",{
        method: "GET",
        headers:{
            "x-api-key": "reqres-free-v1"
        }
    })

    const response = await res.json()
    console.log(response.data)

    let tbody = document.getElementById("tbody")
    response.data.forEach((user)=>{
        let tr = document.createElement("tr")
        let idTd = document.createElement("td");
        let emailTd = document.createElement("td");
        let firstNameTd = document.createElement("td");
        let lastNameTd = document.createElement("td");
        let avatarTd = document.createElement("td");
        let img = document.createElement("img");

        idTd.innerText = user.id;
        emailTd.innerText = user.email;
        firstNameTd.innerText = user.first_name;
        lastNameTd.innerText = user.last_name;
        // avatarTd.innerText = user.avatar;
        img.src = user.avatar;

        tr.appendChild(idTd);
        tr.appendChild(emailTd);
        tr.appendChild(firstNameTd);
        tr.appendChild(lastNameTd);
        tr.appendChild(avatarTd);
        avatarTd.appendChild(img);
        tbody.appendChild(tr);

    })

}