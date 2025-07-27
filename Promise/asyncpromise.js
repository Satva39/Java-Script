const selectProduct = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                productId: 1,
                product: "iphone 12",
                price: 60000,
                message: "Product selected successfully..."
            })
        }, 4000)
    })
}

const addToCart = (product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                ...product,
                message: "Product added to card successfully...",
                status: 200
            }, 4000)
        })
    })
}

const getOrder = (cart) => {
    return new Promise((resolve, reject) => {
        setTimeout((cart) => {
            resolve({
                ...cart,
                message: "Product Ordered Successfully.",
                status: 200
            })
        }, 4000)
    })
}

const print = async () => {

    let product =  await selectProduct()
    let cart = await addToCart()
    let order = await getOrder()

    console.log(product);
    console.log(cart);
    console.log(order);
    

}

console.log(print());
