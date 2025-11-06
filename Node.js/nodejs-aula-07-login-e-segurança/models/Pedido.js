import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Pedido = connection.define("pedidos", {
  numero: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  valor: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  cliente_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});

//Pedido.sync({ force: false }); -> essa linha cria de fato no banco

export default Pedido;
