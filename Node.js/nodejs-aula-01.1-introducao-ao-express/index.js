// Importando o Express 
const express = require('express');

// Iniciando o Express na variável app
const app = express();


// Iniciando a rota raiz "/"
app.get('/', (req, res) => {
  res.send(`<h1>Hello World! Bem vindo ao meu site com Node.js e Express :D</h1>`);
})


// Iniciando a rota de Produtos
app.get('/produtos', (req, res) => {
  res.send(`<h1>Bem-vindo a página de Produtos!</h1>`);
})

// Iniciando a rota de Clientes
app.get('/clientes', (req, res) => {
  res.send(`<h1>Bem-vindo a página de Clientes!</h1>`);
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