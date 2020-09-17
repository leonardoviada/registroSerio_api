const { Sequelize } = require('sequelize');
const AlunnoModel = require('../models/AlunnoModel');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './dbAlunni.sqlite3',
});

sequelize.sync({ force: true }).then(() => {
  console.log('DB Connesso, Tabelle OK');
});

exports.Alunno = AlunnoModel(sequelize, Sequelize);
