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
        button.classList.toggle('in-cart');  // Adiciona ou remove a classe "in-cart"

        // Atualiza o contador do carrinho
        cartCount.innerHTML = document.querySelectorAll('.cart.in-cart').length;
    });
});
