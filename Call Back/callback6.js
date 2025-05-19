const wordHandler = (option) => {
    return option.fname + " is handeled by Word handler"
}

const pngHandler = (option) => {
    return option.fname + " is handeled by PNG handler"
}

const jpgHandler = (option) => {
    return option.fname + " is handeled by JPG handler"
}

const csvHandler = (option) => {
    return option.fname + " is handled by CSV handler"
}

const handler = (fname, size, cb) => {
    const result = cb({ fname: fname, size: size })
    console.log(result);
}

var fname = prompt("Enter your file name : ")
var size = parseInt(prompt("Enter your file's size : "))

if (fname.endsWith(".word")) {
    handler(fname, size, wordHandler)
}

if (fname.endsWith(".word")) {
    handler(fname, size, wordHandler)
}

if (fname.endsWith(".word")) {
    handler(fname, size, wordHandler)
}

if (fname.endsWith(".word")) {
    handler(fname, size, wordHandler)
}