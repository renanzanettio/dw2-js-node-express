// Importando o Express 
const express = require('express');

// Iniciando o Express na variável app
const app = express();


// Iniciando a rota raiz "/"
app.get('/', (req, res) => {
  res.render('index')
})


// Iniciando a rota de Produtos
app.get('/produtos', (req, res) => {
  res.render('produtos');
})

// Iniciando a rota de Clientes
app.get('/clientes', (req, res) => {
  res.render('clientes');
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