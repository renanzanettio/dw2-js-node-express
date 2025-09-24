// Importando o Express 
const express = require('express');

// Iniciando o Express na variável app
const app = express();


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

// Iniciando a rota de Clientes
app.get('/clientes', (req, res) => {
  const clientes = [
    { nome: "Renan Zanetti", cpf: "125.573.464-5", endereco: "Rua A, 123" },
    { nome: "Carlos", cpf: "987.654.321-0", endereco: "Rua B, 456" },
    { nome: "Heloisa", cpf: "456.789.123-2", endereco: "Rua C, 789" },
    { nome: "Raissa", cpf: "321.654.987-1", endereco: "Rua D, 101" },
  ]
  res.render('clientes', {
    clientes : clientes
  });
})

// Iniciando a rota de Perfil
app.get('/perfil', (req, res) => {
  //Criando a variável que será enviada para a página
  const user = "Renan Zanetti"
  res.render('perfil', {
    // Enviando váriável para a página perfil.ejs
    user : user
  });
})

// Configurando o EJS
app.set('view engine', 'ejs');


// Iniciando o servidor HTTP
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro ao iniciar o servidor! ${error}`);
  } else {
    console.log(`Servidor iniciado na porta http://localhost:${port}`);
  }
});