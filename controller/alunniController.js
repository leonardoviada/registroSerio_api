const { Alunno } = require('../orm/sequelize');
const { QueryTypes } = require('sequelize');

const _ = require('lodash');

exports.read = async (req, res) => {
  const alunni = await Alunno.findAll();
  res.status(200).json({
    status: 200,
    msg: '[OK] Tutti gli Alunni',
    data: alunni,
  });
};

exports.read_one = async (req, res) => {
  const alunno = await Alunno.findByPk(req.params.id);
  res.status(200).json({
    status: 200,
    msg: '[OK] Alunno per _id',
    data: alunno,
  });
};

exports.create = async (req, res) => {
  const nuovoAlunno = await Alunno.build(req.body).save();
  console.log('ALUNNO SALVATO', req.body);
  res.status(201).json({
    status: 201,
    msg: '[CREATED] Alunno Creato',
    data: nuovoAlunno,
  });
};

exports.update = async (req, res) => {
  let modAlunno = await Alunno.findByPk(req.params.id);
  _.assign(modAlunno, req.body);
  modAlunno.save();
  res.status(200).json({
    status: 200,
    msg: '[OK] Alunno Aggiornato',
    data: modAlunno,
  });
};

exports.delete = async (req, res) => {
  await Alunno.destroy({ where: { _id: req.params.id } });
  res.status(204).json({
    status: 204,
    msg: '[NO CONTENT] Alunno Rimosso',
  });
};
