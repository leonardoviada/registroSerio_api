/* Moduli Base */
const express = require('express');
const bodyParser = require('body-parser');

/* Modelli ORM */
const { Alunno } = require('./orm/sequelize.js');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  const alunni = await Alunno.findAll();
  console.log(alunni);

  res.status(200).render('home', { alunni: alunni });
});

app.post('/alunno', async (req, res) => {
  await Alunno.build(req.body).save();
  res.redirect('/');
});

app.post('/alunno/:id/delete', async (req, res) => {
  const a = await Alunno.findAll({ where: { _id: req.params.id } });
  console.log('Devo eliminare', a);
  res.redirect('/');
});

const PORT = 5000 || process.env.PORT;
app.listen(PORT, (err) => {
  if (!err) console.log(`Server in esecuzione su porta ${PORT}`);
});
