/* Moduli Base */
const express = require('express');
const bodyParser = require('body-parser');

/* Modelli ORM */
const { Alunno } = require('./orm/sequelize.js');

const app = express();

/* Motore Rendering */
app.set('view engine', 'ejs');

/* Middlewares */
app.use(bodyParser.urlencoded({ extended: false }));

/* Routes e Controllers */
app.get('/', async (req, res) => {
  const alunni = await Alunno.findAll();
  console.log(alunni);

  res.status(200).render('home', { alunni: alunni });
});

app.post('/alunno', async (req, res) => {
  /* Salvataggio nuova istanza */
  await Alunno.build(req.body).save();
  res.redirect('/');
});

app.post('/alunno/:id/delete', (req, res) => {
  /* Query per _id su alunni */
  Alunno.findByPk(req.params.id).then(alunno => alunno.destroy());
  console.log(`[${req.params.id}] Eliminato`);
  res.redirect('/');
});

/* Configurazione port */
const PORT = process.env.PORT || 5000;
app.listen(PORT, err => {
  if (!err) console.log(`Server in esecuzione su porta ${PORT}`);
});
