document.addEventListener("DOMContentLoaded", () => {
    const carouselImages = document.querySelectorAll(".carousel img");
    let currentIndex = 0;

    function showNextImage() {
        carouselImages[currentIndex].classList.remove("active");

        currentIndex = (currentIndex + 1) % carouselImages.length;

        carouselImages[currentIndex].classList.add("active");
    }

    setInterval(showNextImage, 4000); // cambia cada 4 segundos
});
