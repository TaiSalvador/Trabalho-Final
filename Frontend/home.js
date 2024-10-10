const carousel = document.querySelector('.product-carousel');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

// Variável para controlar o deslocamento
let scrollPosition = 0;

prevButton.addEventListener('click', () => {
    const itemWidth = document.querySelector('.product-item').offsetWidth;
    scrollPosition -= itemWidth;
    if (scrollPosition < 0) {
        scrollPosition = 0;
    }
    carousel.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    const itemWidth = document.querySelector('.product-item').offsetWidth;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    scrollPosition += itemWidth;
    if (scrollPosition > maxScroll) {
        scrollPosition = maxScroll;
    }
    carousel.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
});
