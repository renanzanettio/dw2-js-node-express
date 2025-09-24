// Importantando o express
import express from 'express';

// Carregando na variavel router o express.Router() que é responsável por gerenciar as rotas
const router = express.Router();

// Iniciando a rota de Clientes
router.get('/clientes', (req, res) => {
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

export default router;