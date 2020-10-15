const { Sequelize } = require('sequelize');
const AlunnoModel = require('../models/AlunnoModel');
const ClasseModel = require('../models/ClasseModel');
const MateriaModel = require('../models/MateriaModel');
const VotoModel = require('../models/VotoModel');

var pg = require('pg');
pg.defaults.ssl = true;

/* Connessione al DB */
/* const sequelize = new Sequelize(
  'postgres://osucbyskwxfjad:ca467c11a3b78e548712991cd0f171a659e0bb0cbf6a8a7a82a0b0a2d956a877@ec2-52-208-175-161.eu-west-1.compute.amazonaws.com:5432/d44rjlo7hv8gi3'
); */
const sequelize = new Sequelize(
  'd44rjlo7hv8gi3',
  'osucbyskwxfjad',
  'ca467c11a3b78e548712991cd0f171a659e0bb0cbf6a8a7a82a0b0a2d956a877',
  {
    host: 'ec2-52-208-175-161.eu-west-1.compute.amazonaws.com',
    dialect: 'postgres',
    ssl: true,
    protocol: 'postgres',

    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // <<<<<< YOU NEED THIS
      },
    },
  }
);

/* Sincronizzazione e adattamento forzato tabelle */
sequelize.sync().then(() => {
  console.log('DB Connesso, Tabelle OK');
});

exports.Alunno = AlunnoModel(sequelize, Sequelize);

module.exports = {
  Alunno: AlunnoModel(sequelize, Sequelize),
  Classe: ClasseModel(sequelize, Sequelize),
  Materia: MateriaModel(sequelize, Sequelize),
  Voto: VotoModel(sequelize, Sequelize),
};
