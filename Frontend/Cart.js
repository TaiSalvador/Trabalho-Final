function atualizarQuantidadeItens() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const quantidadeItens = carrinho.length;

    // Atualiza os elementos itemA e itemB com o número de itens no carrinho
    document.getElementById('itemA').textContent = `${quantidadeItens} Itens`;
    document.getElementById('itemB').textContent = `${quantidadeItens} Itens`;
}

function displaycart() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Se o carrinho estiver vazio
    if (carrinho.length === 0) {
        document.getElementById("root").innerHTML = "Seu carrinho está vazio";
        document.getElementById("totalA").textContent = 'R$ 0,00';
        document.getElementById("totalB").textContent = 'R$ 0,00';
        atualizarQuantidadeItens(); // Atualiza a quantidade de itens
        return;
    }

    // Exibe os produtos no carrinho
    document.getElementById("root").innerHTML = carrinho.map((item, index) => {
        return (
            `<tr>
                <td width='150'><div class='img-box'><img class='img' src='${item.linkimg}'/></div></td>
                <td width='200'><p>${item.nome}</p></td>
                <td width='200'><h2 style='font-size:15px; color:red;'>R$ ${item.preco.toFixed(2)}</h2></td>
                <td width='80'><i class='fa-solid fa-trash' onclick='delElement(${index})'></i></td>
            </tr>`
        );
    }).join('');

    // Atualiza o total
    const total = carrinho.reduce((acc, item) => acc + item.preco, 0);
    document.getElementById("totalA").textContent = `R$ ${total.toFixed(2)}`;
    document.getElementById("totalB").textContent = `R$ ${total.toFixed(2)}`;

    // Atualiza a quantidade de itens
    atualizarQuantidadeItens();
}

// Função para deletar um produto do carrinho
function delElement(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Remove o produto do carrinho com base no índice
    carrinho.splice(index, 1);

    // Atualiza o localStorage e a exibição do carrinho
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    displaycart();
}

// Exibe os produtos no carrinho quando a página é carregada
window.onload = displaycart;
