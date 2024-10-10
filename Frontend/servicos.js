const carousels = document.querySelectorAll('.carousel-container');

carousels.forEach((carousel) => {
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    const productCarousel = carousel.querySelector('.product-carousel');
    
    let offset = 0;

    nextBtn.addEventListener('click', () => {
        const itemWidth = productCarousel.querySelector('.product-item').offsetWidth;
        offset -= itemWidth;
        productCarousel.style.transform = `translateX(${offset}px)`;
    });

    prevBtn.addEventListener('click', () => {
        const itemWidth = productCarousel.querySelector('.product-item').offsetWidth;
        offset += itemWidth;
        productCarousel.style.transform = `translateX(${offset}px)`;
    });
});
