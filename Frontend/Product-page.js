const wishListCount = document.querySelector('#wishlist-link span');
const heartButtons = document.querySelectorAll('.heart-button');

heartButtons.forEach((button) => {
    button.addEventListener('click', () =>{
        button.classList.toggle('active');

        wishListCount.innerHTML = document.querySelectorAll('.heart-button.active').length;
    })
})

const cartCount = document.querySelector('#cart-link span');
const cartButtons = document.querySelectorAll('.cart');

cartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('in-cart');  

        
        cartCount.innerHTML = document.querySelectorAll('.cart.in-cart').length;
    });
});

fetch('http://localhost:3000/api/produtos')
    .then(resposta => resposta.json()) 
    .then(listaProdutosBackend => {
        const proContainer = document.getElementById('pro-container')

        for(i=0; i<listaProdutosBackend.length; i++){
            const produto = listaProdutosBackend[i]
            const cartaoProduto = document.createElement('div');
            cartaoProduto.className = 'pro'
            
            cartaoProduto.innerHTML = `
                <img src="${produto.linkimg}" alt="Kit de shampoo">
               <a href="#"><button class="heart-button"></a>
                    <svg viewBox="0 0 24 24" width="22px" height="22px" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="des">
                    <h5>${produto.nome}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>${produto.preco}</h4>
                </div>
                <a href="#"><i class='bx bx-cart cart'></i></a>
            `;
            
            proContainer.appendChild(cartaoProduto);
        }})
    .catch(error => {
        console.error('Erro ao buscar produtos:', error);
    });
