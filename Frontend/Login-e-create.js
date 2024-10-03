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
async function login() {
    const email = document.getElementById('email-login').value;
    const senha = document.getElementById('senha-login').value;

    const cliente = {
        email: email,
        senha: senha
    };

    login: async (req, res) => {
        try {
            // Exibe o que está sendo enviado pelo frontend no terminal
            console.log('Dados recebidos no backend:', req.body);
    
            // Verifica se o cliente existe no banco de dados
            const cliente = await Clientes.findOne({
                where: {
                    email: req.body.email
                }
            });
    
            // Verifica se o cliente foi encontrado
            if (!cliente) {
                return res.status(400).send('Email ou senha incorretos');
            }
    
            // Exibe a senha recebida e a senha no banco de dados para verificar a comparação
            console.log('Senha recebida:', req.body.senha);
            console.log('Senha no banco de dados:', cliente.senha);
    
            // Compara a senha recebida com a senha armazenada no banco
            if (req.body.senha === cliente.senha) {
                res.json(cliente);
            } else {
                res.status(400).send('Email ou senha incorretos');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    };
    
}
