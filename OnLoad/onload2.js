var body = document.getElementsByTagName("body")[0]
var colors = ["red","blue", "green", "yellow", "purple", "orange", "pink", "cyan", "magenta", "lime", "teal", "brown", "navy", "maroon", "olive", "gray"];


function color(){

    setInterval(()=>{
        rencol()
    },1000)

}

function rencol(){
    var randomIndex = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[randomIndex];
}