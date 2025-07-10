var images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
var currentIndex = 0;

let prev = document.getElementById("prev");
let next = document.getElementById("next");
let img = document.getElementById("img");

function showImage(index) {
    img.src = "../Images/" + images[index];
}

prev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}, 3000);
