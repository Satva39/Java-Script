let box = document.getElementsByClassName("box")
box[0].addEventListener("click",()=>{
    box[2].style.backgroundColor = "teal"
})

box[2].addEventListener("mouseover",()=>{
    box[0].style.borderRadius = "50%"
    box[1].style.borderRadius = "50%"
    box[2].style.borderRadius = "50%"
    box[3].style.borderRadius = "50%"
})

var colors = ["red","green","yellow","teal","blue","orange","pink","purple","brown","grey","black"]
box[3].addEventListener("mousemove",()=>{
    let randomIndex = Math.floor(Math.random() * colors.length)

    box[0].style.backgroundColor = colors[randomIndex];
    box[1].style.backgroundColor = colors[randomIndex];
})