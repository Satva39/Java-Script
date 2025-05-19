const wordHandler = (option) => {
    return option.fname + " is handled by Word Hnadler... "
}

const pdfHandler = (option) => {
    return option.fname + " is handled by PDF Hnadler... "
}

const pngHandler = (option) => {
    return option.fname + " is handled by PNG Handler... "
}

const jpgHandler = (option) => {
    return option.fname + " is handled by JPG Handler... "
}

var filename = prompt("Enter your file name : ")
var filesize = "1000kb"
var temp;

if(filename.endsWith(".word")){
    temp = wordHandler({fname:filename, size:filesize})
}

if(filename.endsWith(".pdf")){
    temp = wordHandler({fname:filename, size:filesize})
}

if(filename.endsWith(".png")){
    temp = wordHandler({fname:filename, size:filesize})
}

if(filename.endsWith(".jpg")){
    temp = wordHandler({fname:filename, size:filesize})
}

console.log(temp);