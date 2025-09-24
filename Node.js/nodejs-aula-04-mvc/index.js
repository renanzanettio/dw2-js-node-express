// Importando o Express 
import express from 'express';

// Iniciando o Express na variável app
const app = express();

// Importantando o router de Clientes
import ClientesController from './controllers/ClientesController.js';

app.use(express.static('public'));

// Configurando o EJS
app.set('view engine', 'ejs');

// Definindo o uso das rotas que estão nos controllers
app.use('/', ClientesController);


// Iniciando a rota raiz "/"
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/pedidos', (req, res) => {
  const pedidos = [
    {numero: 1, produto: "Celular", valor: 3000},
    {numero: 2, produto: "Computador", valor: 4000},
    {numero: 3, produto: "Tablet", valor: 2000},
    {numero: 4, produto: "Notebook", valor: 3800},
  ]
  res.render('pedidos', {
    pedidos: pedidos
  });
})


// Iniciando a rota de Produtos
app.get('/produtos', (req, res) => {
  // const produtos = ["Computador", "Celular", "Tablet", "Notebook"];
  const produtos = [
    { nome: "Celular", preco: 3000 },
    { nome: "Computador", preco: 4000 },
    { nome: "Tablet", preco: 2000 },
    { nome: "Notebook", preco: 3800 },
  ];
  res.render('produtos', {
    produtos : produtos
  });
})



// Iniciando a rota de Perfil
// :user -> É um parâmetro que será enviado na URL (Obrigatório)
// :user? -> O ponto de interrogação indica que o parâmetro é opcional
app.get('/perfil/:user', (req, res) => {
  //Criando a variável que será enviada para a página
  const user = req.params.user
  res.render('perfil', {
    // Enviando váriável para a página perfil.ejs
    user : user
  });
})


// Iniciando o servidor HTTP
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro ao iniciar o servidor! ${error}`);
  } else {
    console.log(`Servidor iniciado na porta http://localhost:${port}`);
  }
});