let slideIndex = 1;

function showSlides(n) {
    let i;
    const slides = $(".mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides.hide();
    slides.eq(slideIndex - 1).show().addClass("fade");
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

let slideInterval;

function startAutoSlide() {
    slideInterval = setInterval(function () {
        plusSlides(1);
    }, 5000); // Ganti angka ini dengan durasi slide yang diinginkan (dalam milidetik)
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

$(document).ready(function () {
    showSlides(slideIndex);
    startAutoSlide();
});

$(document).on("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
        stopAutoSlide();
    } else if (document.visibilityState === "visible") {
        startAutoSlide();
    }
});
