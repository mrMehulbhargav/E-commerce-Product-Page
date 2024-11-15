const colorSelection = document.getElementById("colorSelection");
const productPrice = 40; // Price in CAD

// Handle Add to Cart functionality
function addToCart() {
    const selectedColor = colorSelection.value;
    const cartStatus = document.getElementById("cartStatus");
    cartStatus.innerText = `Added 1 Spigen Case in ${selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)} color to the cart for ${productPrice} CAD.`;
    cartStatus.classList.add("text-success");
}

// Update image based on color selection
colorSelection.addEventListener("change", () => {
    const selectedColor = colorSelection.value;
    const productGallery = document.getElementById("productGallery");

    if (selectedColor === "green") {
        productGallery.getElementsByClassName("carousel-item")[0].classList.add("active");
        productGallery.getElementsByClassName("carousel-item")[1].classList.remove("active");
        productGallery.getElementsByClassName("carousel-item")[2].classList.remove("active");
    } else if (selectedColor === "black") {
        productGallery.getElementsByClassName("carousel-item")[1].classList.add("active");
        productGallery.getElementsByClassName("carousel-item")[0].classList.remove("active");
        productGallery.getElementsByClassName("carousel-item")[2].classList.remove("active");
    } else if (selectedColor === "blue") {
        productGallery.getElementsByClassName("carousel-item")[2].classList.add("active");
        productGallery.getElementsByClassName("carousel-item")[0].classList.remove("active");
        productGallery.getElementsByClassName("carousel-item")[1].classList.remove("active");
    }
});
