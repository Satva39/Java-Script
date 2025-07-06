function submitHandler(event){
    event.preventDefault()
    var datetime = document.getElementById("date").value
    var age = document.getElementById("age")
    console.log(datetime);
    // console.log(typeof(datetime));
    var arrdate = datetime.split("-")
    // console.log(arrdate);
    
    var year = arrdate[0]
    var month = arrdate[1]
    var date = arrdate[2]

    // console.log(year);
    // console.log(month);
    // console.log(date);
    

    var today = new Date
    var tdate = today.getDate()
    var tmounth = today.getMonth()
    var tyear = today.getFullYear()
    
    var agee = tyear-year
    console.log(agee);
    age.innerHTML = agee
    
    
}