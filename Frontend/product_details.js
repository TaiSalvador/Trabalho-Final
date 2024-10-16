function getQueryParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const productId = getQueryParameter('id');

if (productId) {
    fetch(`http://localhost:3000/api/produtos/${productId}`)
        .then(response => response.json())
        .then(produto => {
            const productDetails = document.getElementById('product_details');

            productDetails.innerHTML = `
                <div class="d-product-img">
                    <img src="${produto.linkimg}" alt="${produto.nome}">
                </div>
                <div class="d-product-text">
                    <span class="category">${produto.categoria}</span>
                    <strong>${produto.nome}</strong>
                    <span class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fa-regular fa-star-half-stroke"></i>
                        <span>200 Reviews</span>
                    </span>
                    <p>${produto.descricao}</p>
                    <span class="price">R$ ${produto.preco}</span>
                    <div class="quantity">
                        <span>Quantidade</span>
                        <input type="text" min="1" value="1">
                    </div>
                    <a href="#" class="add-cart-btn">Adicionar ao carrinho</a>
                </div>
            `;
        })
        .catch(error => {
            console.error('Erro ao buscar o produto:', error);
        });
} else {
    console.error('Nenhum ID de produto fornecido na URL');
}