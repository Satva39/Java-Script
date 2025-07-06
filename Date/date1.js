function date(){
    const date = new Date();

    console.log(date.getDate());
    console.log(date.getDay());
    console.log(date.getFullYear());
    console.log(date.getHours());
    console.log(date.getMinutes());
    console.log(date.getMonth()+1);
    console.log(date.getSeconds());
    console.log(date.getTime());
}
// date()

function date2(){
    const date = new Date("2025-10-01T01:00:00Z")
    date.setDate(31)
    date.setMonth(2)
    date.setFullYear(2026)
    date.setHours(12)
    date.setMinutes(2)
    date.setSeconds(0)
    console.log(date);
    
}

date2() 