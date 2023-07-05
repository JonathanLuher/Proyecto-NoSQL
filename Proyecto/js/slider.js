$(document).ready(function() {
var slideIndex = 0;
var slides = $(".slide");

function showSlide(index) {
    slides.removeClass("active");
    slides.eq(index).addClass("active");
}

// Mostrar el primer slide
showSlide(slideIndex);

// Cambiar de slide automáticamente cada 3 segundos
setInterval(function() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}, 4000);
});
