const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');


registerBtn.addEventListener('click', () => {

    container.classList.add('active');
    
});
loginBtn.addEventListener('click', () => {

    container.classList.remove('active');

});

function cadastrarPessoa() {

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cpf = document.getElementById('cpf').value;

    const cliente = {
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpf 
    };

    fetch('http://localhost:3000/api/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Erro ao cadastrar a cliente');
    })
    .then(data => {
        console.log('Cliente cadastrada com sucesso:', data);
        // Limpa os campos
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('senha').value = '';
        document.getElementById('cpf').value = '';
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}
