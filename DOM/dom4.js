function keyUp(){
    let txt = document.getElementById("txt")
    console.log(txt.value);

    let txtError = document.getElementById("txtErr")

    if(txt.value.length < 3)
    {
        txtError.innerHTML = "Please enter at lease 3 letter"
        txtError.style.color = "red"
        txt.style.outline = "2px solid red"
    }
    else{
        txtError.innerHTML = txt.value
        txtError.style.color = "green"
        txt.style.outline = "2px solid green"
    }
}