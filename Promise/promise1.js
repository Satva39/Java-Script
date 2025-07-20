function getData(){
    console.log("Starting Data...");
    
    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Datat fatched Succesfully...")
        },4000)
    })

    console.log(promise);
    promise.then((res)=>{
        console.log(res);
        console.log("Ending Data....");
    })
    
    promise.catch((err)=>{
        console.log(err);
        console.log("Ending Data...");
        
    })

}

getData()