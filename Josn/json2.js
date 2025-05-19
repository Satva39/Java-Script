var product = {
    id: 1,
    name: "Laptop",
    price: 100000,
    description: "A high-performance laptop",
    details:{
        proseccer: "Intel i7",
        graphic_card: "NVIDIA RTX 3060",
        ram: "16GB",
        storage: "1TB"
    },
    laptop_image: "https://laptop.com",
    laptop_name: "Dell XPS 15",
    laptop_battery: "6 hours",
    laptop_weight: "1 kg",
    laptop_color: ["black", "silver","navy blue"],
}

var bird  = {
    id: 2,
    name: "Bird",
    type: "Cockatail",
    color: "yellow",
    age: "2 months",
    weight: "180 g",
    height: "20 cm",
    wingspan: "30 cm",
    habitat: "Tropical forests",
    diet: "Sunflower seeds and ceralica",
}

console.log(product)
console.log(product.id)
console.log(product.name)
console.log(product.price)
console.log(product.description)
console.log(product.details)
console.log(product.details.proseccer)
console.log(product.details.graphic_card)
console.log(product.details.ram)
console.log(product.details.storage)
console.log(product.laptop_image)
console.log(product.laptop_name)
console.log(product.laptop_battery)
console.log(product.laptop_weight)
console.log(product.laptop_color)

for(i=0; i<product.laptop_color.length; i++){
    console.log(product.laptop_color[i]);
}