function changeColor(){

    let color = document.getElementById("colors")
    console.log(color.value);
    mydiv.style.height = "200px"
    mydiv.style.width = "200px"
    mydiv.style.backgroundColor = color.value;
    mydiv.style.margin = "100px 400px"

}

function changeImage() {
    let imageSelect = document.getElementById("images");
    let imgURL = imageSelect.value;

    let mydiv = document.getElementById("mydiv");

    console.log(imgURL);
    mydiv.style.height = "200px";
    mydiv.style.width = "200px";
    mydiv.style.backgroundImage = `url('${imgURL}')`;
    mydiv.style.backgroundSize = "cover";
    mydiv.style.margin = "100px 400px";
}

function changeRadio(){
    let radioSelect = document.getElementById("radius")
    let borderRadious = radioSelect.value
    let mydiv = document.getElementById("mydiv")
    console.log(borderRadious);
    mydiv.style.height = "200px"
    mydiv.style.width = "200px"
    mydiv.style.borderRadius = borderRadious
    mydiv.style.margin = "100px 400px"
}