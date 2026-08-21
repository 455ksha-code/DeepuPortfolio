const galleryImages = document.querySelectorAll(
    ".gallery-container img, .theatre-gallery img"
);

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        const overlay = document.createElement("div");

        overlay.classList.add("image-overlay");

        const largeImage = document.createElement("img");

        largeImage.src = image.src;
        largeImage.alt = image.alt;

        overlay.appendChild(largeImage);

        document.body.appendChild(overlay);

        overlay.addEventListener("click", function() {
            overlay.remove();
        });

    });

});