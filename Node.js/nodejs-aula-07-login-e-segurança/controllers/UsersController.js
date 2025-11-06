import express from "express";
const router = express.Router();
// Importando o model de usuário
import User from "../models/Users.js";
// Importando o bcrypt usado para gerar hashs de senhas
import bcrypt from "bcrypt";


// ROTA DE LOGIN
router.get("/login", (req, res) => {
  res.render("login", {
    hasNoSession: true,
  });
});

// ROTA DE CADASTRO
router.get("/cadastro", (req, res) => {
  res.render("cadastro", {
    hasNoSession: true,
  });
});

// ROTA DE CRIAÇÃO DE USUÁRIO
router.post("/createUser", (req, res) => {
  // Coletando os dados do formulário
  const email = req.body.email;
  const password = req.body.password;

  // verificando se o usuário já está cadastrado no banco
  User.findOne({ where: { email: email } }).then((user) => {
    // SE O USUÁRIO NÃO EXISTIR
    if (user == undefined) {
      // fará o cadastro
      // gerando o hash de senha antes de enviar para o banco
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      // gera o hash baseado no password digitado pelo usuário e baseado no valor do salt

      // Enviando para o banco
      User.create({
        // Esse "User" é o model, por isso precisa importar
        email: email,
        password: hash, //password deixa de receber password no bd e recebe hash
      })
        .then(() => {
          res.redirect("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      res.send(`O usuário informado já está cadastrado! <br>
            <a href="/login">Tentar novamente.</a>`);
    }
  });
});

// ROTA DE AUTENTICAÇÃO
router.post("/authenticate", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // BUSCANDO USUÁRIO NO BANCO
    User.findOne({where: {email: email}}).then(user => {
        if (user != undefined){
            // VALIDANDO A SENHA PARA VER SE ESTÁ CORRETA,
            //  FAZER CHECAGEM DO HASH POR MEIO DO BCRYPT
            const correct = bcrypt.compareSync(password, user.password);
            // SE A SENHA FOR VÁLIDA
            if (correct){
                //SE A SENHA FOR CORRETA ELE AUTORIZA O LOGIN
                // AGORA VAI GERAR A SESSÃO PARA O USUÁRIO
                req.session.user = {
                    id: user.id,
                    email: user.email
                }
               // res.send(`O usuário logado é: <br>
               //     ID: ${req.session.user['id']}<br>
               //     E-mail: ${req.session.user['email']}`)
                res.redirect("/")
            } else {
                // SE A SENHA NÃO FOR VÁLIDA
                res.send(`A senha digitada está incorreta! <br>
                    <a href="/login">Tentar novamente</a>`)
            }
        }
    });
});

// ROTA DE LOGOUT
router.get("/logout", (req, res) => {
    req.session.user = undefined
    res.redirect("/")
})

export default router;
