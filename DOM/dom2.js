var images = ["https://hips.hearstapps.com/hmg-prod/images/baby-animal-photos-65f9bc47971de.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*","https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740","https://cdn.shopify.com/s/files/1/1111/3280/files/Getty_1310774601_600x600.jpg?v=1628904619","https://www.akronzoo.org/sites/default/files/styles/uncropped_xl/public/2022-05/Tiger-main.png?itok=HfmVWdFd","https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"]

function changes()
{
    let img = document.getElementById("img")
    let rendomindex = Math.floor(Math.random() * images.length)
    console.log(rendomindex);

    img.src = images[rendomindex]
    
}