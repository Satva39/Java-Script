const wordHandler = (option) => {
    console.log(option.fname + " is handled by Word Hnadler... ");
}

const pdfHandler = (option) => {
    console.log(option.fname + " is handled by PDF Hnadler... ");
}

const pngHandler = (option) => {
    console.log(option.fname + " is handled by PNG Handler... ");
}

const jpgHandler = (option) => {
    console.log(option.fname + " is handled by JPG Handler... ");
}

var filename = prompt("Enter your file name : ")
var filesize = "1000kb"         

if(filename.endsWith(".word")){
    wordHandler({fname:filename, size:filesize})
}

if(filename.endsWith(".pdf")){
    pdfHandler({fname:filename, size:filesize})
}

if(filename.endsWith(".png")){
    pngHandler({fname:filename, size:filesize})
}

if(filename.endsWith(".jpg")){
    jpgHandler({fname:filename, size:filesize})
}