// Função para manipular carrossel
function setupCarousel(containerSelector, prevBtnSelector, nextBtnSelector) {
    const productContainer = document.querySelector(containerSelector);
    const prevBtn = document.querySelector(prevBtnSelector);
    const nextBtn = document.querySelector(nextBtnSelector);

    let containerDimensions = productContainer.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn.addEventListener('click', () => {
        productContainer.scrollLeft += containerWidth;
    });

    prevBtn.addEventListener('click', () => {
        productContainer.scrollLeft -= containerWidth;
    });
}

// Configurar os carrosséis
setupCarousel('.product-container-1', '#pre-btn-1', '#ntx-btn-1');
setupCarousel('.product-container-2', '#pre-btn-2', '#ntx-btn-2');
setupCarousel('.product-container-3', '#pre-btn-3', '#ntx-btn-3');
setupCarousel('.product-container-4', '#pre-btn-4', '#ntx-btn-4');
setupCarousel('.product-container-5', '#pre-btn-5', '#ntx-btn-5');
setupCarousel('.product-container-6', '#pre-btn-6', '#ntx-btn-6');

