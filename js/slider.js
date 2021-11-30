// Event Listeners
function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciar);
}

// Funciones
function iniciar() {
    iniciarSlider();
}

function iniciarSlider() {
    $(".slider").slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: false,
        cssEase: 'ease-in-out',
        arrows: false,
        dots: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        swipeToSlide: true,
        touchMove: true,
        touchThreshold: 6
    });
}

// Inicio
eventListeners();