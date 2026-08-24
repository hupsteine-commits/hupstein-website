const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    const navItems = document.querySelectorAll(".nav-links a");

    navItems.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 700) {
            navLinks.classList.remove("active");
        }
    });

}


/* Gallery Lightbox */

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const lightboxClose = document.querySelector(".lightbox-close");

if (lightbox && lightboxImage && lightboxClose) {

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            lightbox.classList.add("active");

        });

    });


    lightboxClose.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });


    lightbox.addEventListener("click", event => {

        if (event.target === lightbox) {
            lightbox.classList.remove("active");
        }

    });


    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            lightbox.classList.remove("active");
        }

    });

}