var language = ["hindi","english","french","gujarati","marathi","urdu"]
var x = language.filter((lang)=>{
    return lang != "marathi"
})
console.log(x)

const deletelang = (langName)=> language.filter((lang)=> lang != langName)
let ans = deletelang("english")