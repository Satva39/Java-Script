const getData = async()=>{

    const res = await fetch("https://node5.onrender.com/user/user",{
        method: "GET"
    })

    const response = await res.json()
    console.log(response.data)

    let tbody = document.getElementById("tbody")
    response.data.forEach((user)=>{
        
        let tr = document.createElement("tr")
        let idTD = document.createElement("td")
        let nameTD = document.createElement("td");
        let emailTd = document.createElement("td");
        let ageTD = document.createElement("td");
        let isActiveTD = document.createElement("td");

        idTD.innerHTML = user._id;
        nameTD.innerText = user.name;
        emailTd.innerText = user.email;
        ageTD.innerText = user.age;
        isActiveTD.innerText = user.isActive;

        tr.appendChild(idTD)
        tr.appendChild(nameTD);
        tr.appendChild(emailTd);
        tr.appendChild(ageTD);
        tr.appendChild(isActiveTD);
        tbody.appendChild(tr)

    })

}