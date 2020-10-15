/* Moduli Base */
const express = require('express');
const bodyParser = require('body-parser');

const mainRouter = require('./routes/mainRouter');

const app = express();

/* Motore Rendering */
app.set('view engine', 'ejs');

/* Middlewares */
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', mainRouter);

/* Configurazione port */
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (!err) console.log(`Server in esecuzione su porta ${PORT}`);
});
