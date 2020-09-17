const { Sequelize } = require('sequelize');
const AlunnoModel = require('../models/AlunnoModel');

/* Connessione al DB */
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './dbAlunni.sqlite3',
});

/* Sincronizzazione e adattamento forzato tabelle */
sequelize.sync({ force: true }).then(() => {
  console.log('DB Connesso, Tabelle OK');
});

exports.Alunno = AlunnoModel(sequelize, Sequelize);
