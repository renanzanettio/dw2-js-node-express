import express from "express";
import Pedido from "../models/Pedido.js";
// Importando o Middleware de autenticação 
import Auth from "../middleware/Auth.js";

// iMPORTANDO O MODEL DE CLIENTE
import Cliente from "../models/Cliente.js"
const router = express.Router();

// ROTA PEDIDOS
router.get("/pedidos", Auth, function (req, res) {
  // Realiza ambas as consulta em paralelo dentro de uma promessa
  Promise.all([
  Pedido.findAll({
    // FAZENDO O INNERJOIN COM A TABELA DE CLIENTES
    include: [
      {
        model: Cliente, //inclui o modelo Cliente que está relacionado
        required: true, // garante que apenas pedidos com clientes sejam retornados
      },
    ],
  }),
  Cliente.findAll(),
])
    .then(([pedidos, clientes]) => {
      res.render("pedidos", {
        pedidos: pedidos,
        clientes: clientes,
      });
    }).catch((err) => {
      console.log(err);
    });
});

// ROTA DE CADASTRO DE PEDIDOS
router.post("/pedidos/new", Auth, (req, res) => {
  const numero = req.body.numero;
  const valor = req.body.valor;
  const clienteId = req.body.clienteId
  Pedido.create({
    numero: numero,
    valor: valor,
    cliente_id: clienteId,
  }).then(() => {
      res.redirect("/pedidos");
    }).catch((err) => {
      console.log(err);
    });
});

// ROTA DE EXCLUSÃO DE CLIENTES
router.get("/pedidos/delete/:id", Auth, (req, res) => {
  const id = req.params.id;
  Pedido.destroy({
    where: {id: id}
  }).then(() => {
      res.redirect("/pedidos");
    }).catch((err) => {
      console.log(err);
    });
});

export default router;
