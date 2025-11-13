import express from 'express';
import FilmesController from './controllers/FilmesController.js';

import connection from './config/sequelize-config.js';

const app = express();

// Configurações do Express
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.use('/', FilmesController);

// Conectando o banco de dados
connection.authenticate().then(() => {
    console.log('Conexão com o banco de dados realizada com sucesso.');
}).catch((error) => {
    console.log('Não foi possível conectar ao banco de dados:', error);
});

// Criando o banco 
connection.query("create database if not exists filmes;").then(() => {
    console.log('Banco de dados criado ou já existe.');
}).catch((error) => {
    console.log('Erro ao criar o banco de dados:', error);
});


const port = 8080;
app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Servidor iniciado em http://localhost:${port}`);
    }
});