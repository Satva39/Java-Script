// const getData = ()=>{
//     var promise = new Promise((success,faliour)=>{
//         setTimeout(()=>{
//             success({
//                 message:"Data fatched successfully",
//                 status:200
//             },4000)
//         })
//     })


//     console.log(promise);
//     promise.then((data)=>{
//         console.log(data);
//     }).catch((error)=>{
//         console.log(error);

//     })


// }

// getData()


// const getData = () => {
//     var promise = new Promise((success, faliour) => {
//         setTimeout(() => {
//             success({
//                 message: "Data fatched successfully",
//                 status: 200
//             }, 4000)
//         })
//     })


//     return promise


// }

// let ans = getData()
// console.log(ans);

// ans.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

// const getData = ()=>{
//     return new Promise((success,failure)=>{
//         setTimeout(()=>{
//             success({
//                 message:"data fetched successfully..",
//                 status:200
//             })
//         },4000);
//     })

// }

// let ans = getData()
// // console.log(ans);
// ans.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

const getData = ()=>{
    return new Promise((success,failure)=>{
        setTimeout(()=>{
            success({
                message:"data fetched successfully..",
                status:200
            })
            // failure({
                // message:"Error in fetching data..",
                // status:404
            // })
        },4000);
    })

}


getData().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})