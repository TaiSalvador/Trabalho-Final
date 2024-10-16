// Alternar entre os formulários de login e cadastro
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Função para cadastrar uma pessoa
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

// Função para realizar login
function login() {
    const email = document.getElementById('email-login').value; // Campo de login
    const senha = document.getElementById('senha-login').value; // Campo de senha

    if (!email || !senha) {
        alert("Por favor, preencha ambos os campos de e-mail e senha.");
        return;
    }

    const cliente = {
        email: email,
        senha: senha,
    };

    fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else if (response.status === 401) {
            throw new Error('E-mail ou senha incorretos');
        }
        throw new Error('Erro ao fazer login');
    })
    .then(data => {
        console.log('Bem vindo!');
        // Redireciona para a página de produtos após login bem-sucedido
        window.location.href = "Home.html";
    })
    .catch(error => {
        // Exibe mensagem de erro se as credenciais estiverem incorretas
        console.error('Erro:', error.message);
        alert(error.message);
    });
}
