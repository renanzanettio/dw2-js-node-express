import express from 'express';
import Filme from '../models/Filme.js';

const router = express.Router();


router.get('/', (req, res) => {
  Filme.findAll().then((filmes) => {
    res.render('filmes', {
      filmes: filmes,
    })
  }).catch((err) => {
    console.error('Erro ao buscar filmes:', err);
  });
  res.render('filmes');
});

router.post('/filmes/new', (req, res) => {
  const titulo = req.body.titulo;
  const genero = req.body.genero;
  const duracao = req.body.duracao;

  Filme.create({
    titulo: titulo,
    genero: genero,
    duracao: duracao,
  }).then(()=> {
    res.redirect('/');
  }).catch((err) => {
    console.error('Erro ao criar filme:', err);
  });
})

router.get('/filmes/delete/:id', (req, res) => {
  const id = req.params.id;
  Filme.destroy({
    where: {
      id: id
    }
  }).then(() => {
    res.redirect('/');
  }).catch((err) => {
    console.error('Erro ao deletar filme:', err);
  });
})


export default router;