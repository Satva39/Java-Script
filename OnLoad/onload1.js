var body = document.getElementsByTagName("body")[0]

function color(){
    body.style.backgroundColor = "red"

    setTimeout(()=>{
        green()
    },4000)
}

function green(){
    body.style.backgroundColor = "green"

    setTimeout(()=>{
        yellow()
    },4000)
}

function yellow(){
    body.style.backgroundColor = "yellow"

    setTimeout(()=>{
        color()
    },4000)
}